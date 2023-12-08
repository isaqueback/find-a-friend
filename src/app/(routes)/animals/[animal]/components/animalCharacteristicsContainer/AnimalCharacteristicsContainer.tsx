import Image from 'next/image'
import boltIllustration from '@/assets/bolt.svg'
import blueBoltIllustration from '@/assets/blue-bolt.svg'
import maximizeIllustration from '@/assets/maximize.svg'

interface AnimalCharacteristicsContainerProps {
  animalEnergyLevel: 1 | 2 | 3 | 4 | 5
  animalEnvironmentSize: 'small' | 'medium' | 'big'
  animalSize: 'small' | 'medium' | 'big'
}

export default function AnimalCharacteristicsContainer({
  animalEnergyLevel,
  animalEnvironmentSize,
  animalSize,
}: AnimalCharacteristicsContainerProps) {
  return (
    <div className="flex gap-4 w-full mb-10 flex-wrap">
      <div className="flex flex-col gap-4 justify-center w-fit border-2 rounded-[20px] p-6 flex-grow">
        <div className="flex gap-2">
          {Array.from({ length: animalEnergyLevel }, (_, idx) => {
            return (
              <Image
                key={idx}
                src={blueBoltIllustration}
                width={18}
                height={20}
                alt="Ilustração de raio"
                className=""
              />
            )
          })}
          {Array.from({ length: 5 - animalEnergyLevel }, (_, idx) => {
            return (
              <Image
                key={idx}
                src={boltIllustration}
                width={18}
                height={20}
                alt="Ilustração de raio"
                className=""
              />
            )
          })}
        </div>
        <p className="text-sky-900 text-lg font-semibold">
          {animalEnergyLevel === 1 && 'Calminho'}
          {animalEnergyLevel === 2 && 'Sossegado'}
          {animalEnergyLevel === 3 && 'Meio-tempo'}
          {animalEnergyLevel === 4 && 'Foguetinho'}
          {animalEnergyLevel === 5 && 'Furacão'}
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center w-fit border-2 rounded-[20px] p-6 flex-grow">
        <Image
          src={maximizeIllustration}
          width={24}
          height={24}
          alt="Ilustração de maximizar"
          className="self-start"
        />
        <p className="text-sky-900 text-lg font-semibold">
          Ambiente{' '}
          {animalEnvironmentSize === 'small'
            ? 'pequeno'
            : animalEnvironmentSize === 'medium'
              ? 'médio'
              : 'amplo'}
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center w-fit border-2 rounded-[20px] p-6 flex-grow max-sm:mx-auto">
        <div className="flex gap-2">
          {Array.from(
            {
              length:
                animalSize === 'small' ? 1 : animalSize === 'medium' ? 2 : 3,
            },
            (_, idx) => {
              return (
                <span
                  key={idx}
                  className="w-3 h-3 bg-sky-900 rounded-full"
                ></span>
              )
            },
          )}
          {Array.from(
            {
              length:
                animalSize === 'small' ? 2 : animalSize === 'medium' ? 1 : 0,
            },
            (_, idx) => {
              return (
                <span
                  key={idx}
                  className="w-3 h-3 bg-sky-900 bg-opacity-20 rounded-full"
                ></span>
              )
            },
          )}
        </div>
        <p className="text-sky-900 text-lg font-semibold">
          {animalSize === 'small'
            ? 'Pequenino'
            : animalSize === 'medium'
              ? 'Médio'
              : 'Grandão'}
        </p>
      </div>
    </div>
  )
}
