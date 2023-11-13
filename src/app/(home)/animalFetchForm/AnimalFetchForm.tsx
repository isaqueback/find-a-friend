'use client'

import Image from 'next/image'
import searchIcon from '@/assets/searchIcon.svg'
import { Select } from '@radix-ui/themes'
import styles from './animalFetchForm.module.sass'
import { useEffect, useState } from 'react'

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
  id: number
  nome: string
}

export default function AnimalFetchForm() {
  const [states, setStates] = useState([] as State[])
  const [chosenState, setChosenState] = useState('RO')
  const [chosenCity, setChosenCity] = useState('')
  const [cities, setCities] = useState([] as City[])

  async function fetchStates() {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const fetchedStates = await response.json()

    setStates(() => {
      const formattedStates: State[] = fetchedStates.map((state: ApiState) => {
        return { id: state.id, name: state.nome, acronym: state.sigla }
      })

      return formattedStates
    })
  }

  async function fetchCities(city: string) {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${city}/municipios`,
    )

    const fetchedCities = await response.json()

    setCities(() => {
      const formattedCities: City[] = fetchedCities.map((city: ApiCity) => {
        return { id: city.id, name: city.nome }
      })

      return formattedCities
    })
  }

  async function handleChangedState(newState: string) {
    setChosenState(newState)

    await fetchCities(newState)
  }

  useEffect(() => {
    fetchStates()
    fetchCities('RO')
  }, [])

  useEffect(() => {
    if (cities.length > 0) {
      setChosenCity(cities[0].name)
    }
  }, [cities])

  return (
    <form className="flex gap-8 items-center">
      <p className="mr-3">Busque um amigo:</p>
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
      <div className={styles.locationLabel}>
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
      <button className="ml-3 bg-amber-300 rounded-3xl py-6 px-7">
        <Image src={searchIcon} alt="Ícone de lupa" width={26} height={26} />
      </button>
    </form>
  )
}
