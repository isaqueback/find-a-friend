'use client'
import SimplifiedAsideMenu from '../../../components/simplifiedAsideMenu/SimplifiedAsideMenu'
import dog2Img1Illustration from '@/assets/animalsIllustration/dog2-1.png'
import dog2Img2Illustration from '@/assets/animalsIllustration/dog2-2.jpeg'
import dog2Img3Illustration from '@/assets/animalsIllustration/dog2-3.jpeg'
import dog2Img4Illustration from '@/assets/animalsIllustration/dog2-4.jpeg'
import dog2Img5Illustration from '@/assets/animalsIllustration/dog2-5.jpeg'
import dog2Img6Illustration from '@/assets/animalsIllustration/dog2-6.jpeg'
import partialLogo from '@/assets/partial-logo.svg'
import whatsappIllustration from '@/assets/whatsapp.svg'
import whatsapp2Illustration from '@/assets/white-whatsapp.svg'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import AnimalImagesContainer from './components/animalImagesContainer/AnimalImagesContainer'
import AnimalCharacteristicsContainer from './components/animalCharacteristicsContainer/AnimalCharacteristicsContainer'
import Link from 'next/link'
import { GoogleMap } from '@/app/components/googleMap/GoogleMap'
import { AnimalRequirements } from '../../../components/animalRequirements/AnimalRequirements'
import { HorizontalBar } from '../../../components/horizontalBar/HorizontalBar'

interface Animal {
  name: string
  description: string
  age: 'baby' | 'adult' | 'senior'
  size: 'small' | 'medium' | 'big'
  energyLevel: 1 | 2 | 3 | 4 | 5
  IndependencyLevel: 'low' | 'medium' | 'high'
  environmentSize: 'small' | 'medium' | 'big'
  imgs: string[] | StaticImageData[]
  requirements: string[]
}

interface Owner {
  name: string
  cellNumber: string
  location: {
    address: string
    postalCode: string
    latitude: number
    longitude: number
  }
  animal: Animal
}

export default function Animal() {
  const [owner] = useState<Owner>({
    name: 'Seu Cãopanheiro',
    cellNumber: '+55 (69) 9272-4862',
    location: {
      address: 'Rua Marechal Taumaturgo, 2009, Três Marias, Porto Velho - RO',
      latitude: -8.778458,
      longitude: -63.8548295,
      postalCode: '76812-508',
    },
    animal: {
      age: 'adult',
      description:
        'Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.',
      environmentSize: 'big',
      name: 'Alfredo',
      size: 'small',
      IndependencyLevel: 'medium',
      requirements: [
        'Local grande para o animal correr e brincar.',
        'Proibido apartamento!',
        'Ambiente frio, pois possui muito pelo.',
        'Cão com intolerância a lactose.',
      ],
      energyLevel: 4,
      imgs: [
        dog2Img1Illustration,
        dog2Img2Illustration,
        dog2Img3Illustration,
        dog2Img4Illustration,
        dog2Img5Illustration,
        dog2Img6Illustration,
      ],
    },
  })

  return (
    <div className="bg-rose-50 font-nunito text-sky-900">
      <SimplifiedAsideMenu url="/animals" />
      <main className="flex flex-col justify-center items-center gap-10 py-10">
        <h4 className="text-slate-400 text-lg font-semibold">Seu novo amigo</h4>
        <div className="w-[44rem] max-w-full rounded-3xl bg-white flex flex-col items-center gap-8">
          <AnimalImagesContainer
            animalName={owner.animal.name}
            animalImagesUrls={owner.animal.imgs}
          />
          <div className="max-w-full px-16 max-sm:px-2 pt-10 flex flex-col gap-7">
            <h2 className="text-5xl font-extrabold">{owner.animal.name}</h2>
            <p className="text-lg font-semibold">{owner.animal.description}</p>
            <AnimalCharacteristicsContainer
              animalEnergyLevel={owner.animal.energyLevel}
              animalEnvironmentSize={owner.animal.environmentSize}
              animalSize={owner.animal.size}
            />
            <GoogleMap
              address={owner.location.address}
              cep={owner.location.postalCode}
              latitude={owner.location.latitude}
              longitude={owner.location.longitude}
            />
            <div className="flex gap-5 py-12 max-sm:flex-col max-sm:items-center">
              <div className="w-16 h-16 p-4 bg-orange-500 rounded-2xl">
                <Image
                  src={partialLogo}
                  alt="Imagem meramente ilustrativa para representar o dono"
                />
              </div>
              <div className="flex flex-col gap-2 max-sm:items-center">
                <h3 className="text-3xl font-bold">{owner.name}</h3>
                <p className="text-base font-semibold max-sm:text-center">
                  {owner.location.address}
                </p>
                <Link
                  href={`tel:${owner.cellNumber}`}
                  className="bg-sky-900 bg-opacity-5 rounded-xl py-3 px-8 text-lg font-bold flex gap-2 w-fit mt-3"
                >
                  <Image
                    src={whatsappIllustration}
                    width={24}
                    height={24}
                    alt="Ícone do Whatsapp"
                  />
                  <span>{owner.cellNumber}</span>
                </Link>
              </div>
            </div>
            <HorizontalBar />
            <h3 className="text-3xl font-bold mb-3 mt-6">
              Requisitos para adoção
            </h3>
            <AnimalRequirements requirements={owner.animal.requirements} />
            <HorizontalBar />
            <Link
              href={`tel:${owner.cellNumber}`}
              className="flex justify-center gap-3 bg-emerald-400 rounded-3xl py-5 mt-5 mb-20"
            >
              <Image
                src={whatsapp2Illustration}
                width={20}
                height={20}
                alt="Ícone do Whatsapp"
              />
              <span className="text-white text-lg font-extrabold">
                Entrar em contato
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
