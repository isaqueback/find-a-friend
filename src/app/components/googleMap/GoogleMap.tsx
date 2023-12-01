import { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'

interface GoogleMapProps {
  cep: string
  address: string
  latitude?: number
  longitude?: number
}

type Location =
  | {
      latitude: number
      longitude: number
    }
  | undefined

export function GoogleMap({ cep, address }: GoogleMapProps) {
  const [location, setLocation] = useState<Location>(undefined)

  async function getLocation(cep: string, address: string) {
    try {
      const apiKey = process.env.googleApiKey

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cep} ${address}&key=${apiKey}`,
      )

      const data = await response.json()

      const result = data.results[0]

      if (result) {
        const { lat, lng } = result.geometry.location

        setLocation({ latitude: lat, longitude: lng })
      } else {
        setLocation(undefined)
      }
    } catch (err) {
      return setLocation(undefined)
    }
  }

  useEffect(() => {
    getLocation(cep, address)
  }, [cep, address])

  return (
    <div className="w-full h-36 border border-slate-300 rounded-xl border-dashed overflow-hidden hover:border-sky-900 ease-out duration-300">
      {location && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.googleApiKey as string }}
          defaultCenter={{ lat: location.latitude, lng: location.longitude }}
          defaultZoom={12}
        ></GoogleMapReact>
      )}
    </div>
  )
}
