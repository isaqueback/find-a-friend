'use client'

import { Select } from '@radix-ui/themes'
import styles from './filtersForm.module.sass'
import { Dispatch, SetStateAction } from 'react'

interface FiltersFormProps {
  setAnimalAge: Dispatch<SetStateAction<string>>
  setAnimalEnergyLevel: Dispatch<SetStateAction<string>>
  setAnimalSize: Dispatch<SetStateAction<string>>
  setAnimalIndependencyLevel: Dispatch<SetStateAction<string>>
}

export default function FiltersForm({
  setAnimalAge,
  setAnimalEnergyLevel,
  setAnimalIndependencyLevel,
  setAnimalSize,
}: FiltersFormProps) {
  return (
    <div className={`flex flex-col gap-7 flex-1 ${styles.formContainer}`}>
      <h2 className="text-white text-xl font-extrabold">Filtros</h2>
      <form className="flex flex-col gap-7">
        <div className={styles.selectContainer}>
          <label htmlFor="age">Idade</label>
          <Select.Root
            defaultValue="adult"
            onValueChange={(e) => setAnimalAge(e)}
          >
            <Select.Trigger variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="baby">Filhote</Select.Item>
                <Select.Item value="adult">Adulto</Select.Item>
                <Select.Item value="senior">Idoso</Select.Item>
                <Select.Item value="all">Todos</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="energy-level">Nível de Energia</label>
          <Select.Root
            defaultValue="3"
            onValueChange={(e) => setAnimalEnergyLevel(e)}
          >
            <Select.Trigger variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="1">01</Select.Item>
                <Select.Item value="2">02</Select.Item>
                <Select.Item value="3">03</Select.Item>
                <Select.Item value="4">04</Select.Item>
                <Select.Item value="5">05</Select.Item>
                <Select.Item value="all">Todos</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="size">Porte do Animal</label>
          <Select.Root
            defaultValue="medium"
            onValueChange={(e) => setAnimalSize(e)}
          >
            <Select.Trigger variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="small">Pequenino</Select.Item>
                <Select.Item value="medium">Médio</Select.Item>
                <Select.Item value="big">Grandão</Select.Item>
                <Select.Item value="all">Todos</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="independency-level">Nível de Independência</label>
          <Select.Root
            defaultValue="medium"
            onValueChange={(e) => setAnimalIndependencyLevel(e)}
          >
            <Select.Trigger variant="ghost" />
            <Select.Content>
              <Select.Group>
                <Select.Item value="low">Baixo</Select.Item>
                <Select.Item value="medium">Médio</Select.Item>
                <Select.Item value="high">Alto</Select.Item>
                <Select.Item value="all">Todos</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
      </form>
    </div>
  )
}
