import partialLogoIcon from '@/assets/partial-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import SimplifiedAnimalFetchForm from '../simplifiedAnimalFetchForm/SimplifiedAnimalFetchForm'
import styles from './asideMenu.module.sass'
import FiltersForm from '../filtersForm/FiltersForm'
import BurgerMenu from '@/app/components/burgerMenu/BurgerMenu'

interface AsideMenuProps {
  viewWidth: number
  isAsideOpen: boolean
  handleToggleAsideMenu: () => void
}

export default function AsideMenu({
  viewWidth,
  isAsideOpen,
  handleToggleAsideMenu,
}: AsideMenuProps) {
  return (
    <aside
      className={`bg-red-500 w-96 max-w-full pt-20 max-sm:pt-10 flex flex-col gap-9 fixed overflow-hidden h-screen overflow-y-scroll max-lg:z-10 transition-transform duration-300 ease-out ${
        !isAsideOpen && viewWidth < 1024 && '-translate-x-full'
      } ${styles.toolbar}`}
    >
      <header className="flex flex-col gap-7 px-10 max-sm:px-5 pb-0">
        <div className="flex justify-between items-center">
          <Link href="/" className="w-fit">
            <Image
              src={partialLogoIcon}
              alt="Logotipo parcial"
              width={45}
              height={46}
            />
          </Link>
          <BurgerMenu
            isOpen={isAsideOpen}
            handleToggleAsideMenu={handleToggleAsideMenu}
          />
        </div>
        <SimplifiedAnimalFetchForm />
      </header>
      <FiltersForm />
    </aside>
  )
}
