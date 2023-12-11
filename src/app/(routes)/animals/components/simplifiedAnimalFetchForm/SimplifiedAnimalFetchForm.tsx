'use client'

import Image from 'next/image'
import searchIcon from '@/assets/searchIcon.svg'
import { Select } from '@radix-ui/themes'
import styles from './simplifiedAnimalFetchForm.module.sass'
import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface State {
  id: number
  acronym: string
  name: string
}

interface ApiState {
  id: number
  sigla: string
  nome: string
}

interface City {
  id: number
  name: string
}

interface ApiCity {
  codigo_ibge: number
  nome: string
}

interface SimplifiedAnimalFetchFormProps {
  animalAge: string
  animalEnergyLevel: string
  animalSize: string
  animalIndependencyLevel: string
}

export default function SimplifiedAnimalFetchForm({
  animalAge,
  animalEnergyLevel,
  animalIndependencyLevel,
  animalSize,
}: SimplifiedAnimalFetchFormProps) {
  const searchParams = useSearchParams()

  const [states, setStates] = useState([] as State[])
  const [chosenState, setChosenState] = useState(
    searchParams.get('state') || 'RO',
  )
  const [chosenCity, setChosenCity] = useState('')
  const [cities, setCities] = useState([] as City[])

  const router = useRouter()
  const pathname = usePathname()
  const currentSearchParams = new URLSearchParams(searchParams.toString())

  async function fetchStates() {
    const response = await fetch('https://brasilapi.com.br/api/ibge/uf/v1')
    const fetchedStates = await response.json()

    setStates(
      Array.from(fetchedStates, (state: ApiState) => ({
        id: state.id,
        name: state.nome,
        acronym: state.sigla,
      })),
    )
  }

  async function fetchCities(state: string) {
    const response = await fetch(
      `https://brasilapi.com.br/api/ibge/municipios/v1/${state}`,
    )

    const fetchedCities = await response.json()

    setCities(() => {
      const formattedCities: City[] = fetchedCities.map((city: ApiCity) => {
        return { id: city.codigo_ibge, name: city.nome }
      })

      return formattedCities
    })
  }

  async function handleChangedState(newState: string) {
    setChosenState(newState)

    await fetchCities(newState)
  }

  function handleFilterClick() {
    currentSearchParams.set('animalAge', animalAge)
    currentSearchParams.set('animalEnergyLevel', animalEnergyLevel)
    currentSearchParams.set('animalIndependencyLevel', animalIndependencyLevel)
    currentSearchParams.set('animalSize', animalSize)
    currentSearchParams.set('state', chosenState)
    currentSearchParams.set('city', chosenCity)

    router.push(`${pathname}?${currentSearchParams.toString()}`)
  }

  useEffect(() => {
    fetchStates()
    fetchCities(chosenState)
  }, [chosenState])

  useEffect(() => {
    if (cities.length > 0) {
      setChosenCity(cities[0].name)
    }
  }, [cities])

  return (
    <form className="flex flex-col gap-3">
      <div className="flex gap-7 w-full items-stretch">
        <div className={styles.locationLabel}>
          <Select.Root
            defaultValue={chosenState}
            onValueChange={handleChangedState}
          >
            <Select.Trigger className={styles.stateTrigger} variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Label>Estados</Select.Label>
                {states.map((state) => {
                  return (
                    <Select.Item key={state.id} value={state.acronym}>
                      {state.acronym}
                    </Select.Item>
                  )
                })}
              </Select.Group>
              <Select.Separator />
            </Select.Content>
          </Select.Root>
        </div>
        <div className={`flex-1 ${styles.locationLabel}`}>
          <Select.Root
            key={chosenCity}
            defaultValue={chosenCity}
            onValueChange={(newCity) => setChosenCity(newCity)}
          >
            <Select.Trigger className={styles.cityTrigger} variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Label>Cidades</Select.Label>
                {cities.map((city) => {
                  return (
                    <Select.Item key={city.id} value={city.name}>
                      {city.name}
                    </Select.Item>
                  )
                })}
              </Select.Group>
              <Select.Separator />
            </Select.Content>
          </Select.Root>
        </div>
      </div>
      <button
        type="button"
        className="bg-amber-300 rounded-3xl p-5 w-full flex justify-center"
        onClick={handleFilterClick}
      >
        <Image
          src={searchIcon}
          alt="Ícone de lupa"
          width={26}
          height={26}
          className=""
        />
      </button>
    </form>
  )
}
