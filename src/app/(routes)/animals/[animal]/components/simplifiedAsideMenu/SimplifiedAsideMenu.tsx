import Image from 'next/image'
import Link from 'next/link'
import partialLogo from '@/assets/partial-logo.svg'
import leftArrowIllustration from '@/assets/left-arrow.svg'

export default function SimplifiedAsideMenu() {
  return (
    <>
      <aside className="w-24 h-[51.25rem] max-h-full bg-rose-500 flex flex-col justify-between items-center py-8 fixed max-lg:hidden">
        <Image
          src={partialLogo}
          width={45}
          height={45}
          alt="Logotipo parcial"
        />
        <Link href="/animals" className="p-3 bg-amber-300 rounded-2xl">
          <Image
            src={leftArrowIllustration}
            width={24}
            height={24}
            alt="Seta para voltar"
          />
        </Link>
      </aside>
      <aside className="w-full h-20 bg-rose-500 flex justify-between items-center py-8 lg:hidden fixed px-10 z-10">
        <Link href="/animals" className="p-3 bg-amber-300 rounded-2xl">
          <Image
            src={leftArrowIllustration}
            width={24}
            height={24}
            alt="Seta para voltar"
          />
        </Link>
        <Image
          src={partialLogo}
          width={45}
          height={45}
          alt="Logotipo parcial"
        />
      </aside>
    </>
  )
}
