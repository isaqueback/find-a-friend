'use client'

import { Select } from '@radix-ui/themes'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AnimalTypeFilter() {
  const [animalSpecies, setAnimalSpecies] = useState('dog,cat')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(searchParams.toString())

    if (animalSpecies === 'dog,cat') {
      currentSearchParams.set('animalSpecies', 'dog')
      currentSearchParams.append('animalSpecies', 'cat')
    } else {
      currentSearchParams.set('animalSpecies', 'other')
    }

    router.push(`${pathname}?${currentSearchParams.toString()}`)
  }, [animalSpecies, pathname, searchParams, router])

  return (
    <Select.Root
      defaultValue="dog,cat"
      onValueChange={(value) => setAnimalSpecies(value)}
    >
      <Select.Trigger
        variant="ghost"
        className="text-sky-900 text-base outline-none"
        style={{
          backgroundColor: '#FBE0E2',
          padding: '12px 18px',
          borderRadius: '15px',
          outline: 'none',
          cursor: 'pointer',
        }}
      />
      <Select.Content>
        <Select.Group>
          <Select.Item value="dog,cat">Gatos e cachorros</Select.Item>
          <Select.Item value="other">Outros</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
