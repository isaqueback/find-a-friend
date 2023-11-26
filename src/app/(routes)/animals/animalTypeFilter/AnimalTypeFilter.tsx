'use client'

import { Select } from '@radix-ui/themes'

export default function AnimalTypeFilter() {
  return (
    <Select.Root defaultValue="dogs-and-cats">
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
          <Select.Item value="dogs-and-cats">Gatos e cachorros</Select.Item>
          <Select.Item value="other">Outros</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}
