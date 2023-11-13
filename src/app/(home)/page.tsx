import fullLogoIllustration from '@/assets/full-logo.svg'
import animalsIllustration from '@/assets/animals.svg'
import Image from 'next/image'
import AnimalFetchForm from './animalFetchForm/AnimalFetchForm'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-rose-500 min-h-screen w-screen px-28 py-32 max-lg:p-10 max-md:p-5 max-md:gap-12 text-white">
      <header className="flex max-lg:justify-center self-start">
        <Link href="/">
          <Image
            className="max-md:w-48"
            src={fullLogoIllustration}
            alt="logotipo completo"
            width={215}
            height={56}
          />
        </Link>
      </header>
      <main className="flex flex-col justify-around grow lg-w-screen max-w-[105rem]">
        <div className="flex justify-evenly items-end max-lg:items-center max-lg:gap-10 max-md:gap-8 max-lg:flex-col">
          <h1 className="text-7xl max-lg:text-6xl max-md:text-5xl max-lg:text-center font-extrabold max-w-[30rem]">
            Leve a felicidade para o seu lar
          </h1>
          <Image
            src={animalsIllustration}
            alt="Ilustração de animais"
            className="max-lg:w-96 max-xl:w[35rem]"
            width={592}
            height={305}
          />
        </div>
        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-4 max-md:pt-10">
          <p className="text-2xl font-semibold lg:max-w-[30rem] max-lg:text-center">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </p>
          <AnimalFetchForm />
        </div>
      </main>
    </div>
  )
}
