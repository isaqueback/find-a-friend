import partialLogoIcon from '@/assets/partial-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import SimplifiedAnimalFetchForm from './simplifiedAnimalFetchForm/SimplifiedAnimalFetchForm'

export default function Animals() {
  return (
    <div className="flex">
      <aside className="bg-red-500 w-96">
        <header>
          <Link href="/">
            <Image
              src={partialLogoIcon}
              alt="Logotipo parcial"
              width={45}
              height={46}
            />
          </Link>
          <SimplifiedAnimalFetchForm />
        </header>
        <div>
          <h2>Filtros</h2>
        </div>
      </aside>
      <main className="grow bg-white"></main>
    </div>
  )
}
