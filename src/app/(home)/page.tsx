import fullLogoIllustration from '@/assets/full-logo.svg'
import animalsIllustration from '@/assets/animals.svg'
import Image from 'next/image'
import AnimalFetchForm from './animalFetchForm/AnimalFetchForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col bg-rose-500 h-screen w-screen px-28 py-32 text-white">
      <header className="">
        <Link href="/">
          <Image
            src={fullLogoIllustration}
            alt="logotipo completo"
            width={215}
            height={56}
          />
        </Link>
      </header>
      <main className="flex flex-col justify-around grow">
        <div className="flex justify-center items-end gap-32">
          <h1 className="text-7xl font-extrabold max-w-[30rem]">
            Leve a felicidade para o seu lar
          </h1>
          <Image
            src={animalsIllustration}
            alt="Ilustração de animais"
            width={592}
            height={305}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold max-w-[30rem]">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </p>
          <AnimalFetchForm />
        </div>
      </main>
    </div>
  )
}
