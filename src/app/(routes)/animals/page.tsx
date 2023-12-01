'use client'

import AsideMenu from './components/asideMenu/AsideMenu'
import AnimalTypeFilter from './components/animalTypeFilter/AnimalTypeFilter'
import AnimalsContainer from './components/animalsContainer/AnimalsContainer'
import { useEffect, useState } from 'react'
import BurgerMenu from '@/app/components/burgerMenu/BurgerMenu'

export default function Animals() {
  const [isAsideOpen, setIsAsideOpen] = useState(false)
  const [viewWidth, setViewWidth] = useState(0)

  function handleToggleAsideMenu() {
    setIsAsideOpen((state) => !state)
  }

  function handleResize() {
    setViewWidth(window.innerWidth)
  }

  useEffect(() => {
    setViewWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex font-nunito">
      <AsideMenu
        viewWidth={viewWidth}
        isAsideOpen={isAsideOpen}
        handleToggleAsideMenu={handleToggleAsideMenu}
      />
      <main className="flex flex-col gap-12 bg-rose-50 text-sky-900 relative lg:ml-[24rem] min-h-screen h-auto grow lg:pt-20 max-lg:pt-4 pb-8 pl-8 pr-28 max-lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <BurgerMenu
              isOpen={isAsideOpen}
              handleToggleAsideMenu={handleToggleAsideMenu}
              color="bg-sky-900"
            />
            <div className="sm:hidden">
              <AnimalTypeFilter />
            </div>
          </div>
          <div className="flex max-sm:flex-col justify-between items-center">
            <h2>
              Encontre <strong>6 amigos</strong> na sua cidade
            </h2>
            <div className="max-sm:hidden">
              <AnimalTypeFilter />
            </div>
          </div>
        </div>
        <AnimalsContainer />
      </main>
    </div>
  )
}
