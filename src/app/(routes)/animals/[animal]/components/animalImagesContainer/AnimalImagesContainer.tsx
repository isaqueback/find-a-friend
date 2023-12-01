import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import styles from './animalImagesContainer.module.sass'

interface AnimalImagesContainerProps {
  animalName: string
  animalImagesUrls: string[] | StaticImageData[]
}

export default function AnimalImagesContainer({
  animalName,
  animalImagesUrls,
}: AnimalImagesContainerProps) {
  const [selectedImg, setSelectedImg] = useState({
    url: animalImagesUrls[0],
    id: 0,
  })

  function handleAnimalImgChange(id: number, url: StaticImageData | string) {
    setSelectedImg({ id, url })
  }
  return (
    <div className="flex flex-col gap-8 w-full">
      <Image
        src={selectedImg.url}
        width={99999}
        height={99999}
        alt={`Imagem ${selectedImg.id + 1} do ${animalName}`}
        className="rounded-3xl w-full h-fit"
      />
      <div
        className={`flex gap-3 px-16 max-sm:px-2 justify-center max-sm:overflow-x-auto ${styles.imagesContainer}`}
      >
        {animalImagesUrls.map((img, idx) => {
          return (
            <div
              key={idx}
              className={`border-4 hover:border-sky-900 ${
                selectedImg.id === idx ? 'border-sky-900' : 'border-white'
              } cursor-pointer rounded-2xl overflow-hidden w-[88px] min-w-[88px] h-[88px]`}
            >
              <Image
                onClick={() => handleAnimalImgChange(idx, img)}
                src={img}
                width={80}
                height={80}
                alt={`Imagem ${idx + 1} pequena do ${animalName}`}
                className="w-full h-full"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
