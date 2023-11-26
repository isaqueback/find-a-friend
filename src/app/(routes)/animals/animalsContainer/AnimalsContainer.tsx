import Image from 'next/image'
import dog1Img1Illustration from '@/assets/animalsIllustration/dog1-1.png'
import dog2Img1Illustration from '@/assets/animalsIllustration/dog2-1.png'
import dog3Img1Illustration from '@/assets/animalsIllustration/dog3-1.png'
import dog4Img1Illustration from '@/assets/animalsIllustration/dog4-1.png'
import cat1Img1Illustration from '@/assets/animalsIllustration/cat1-1.png'
import cat2Img1Illustration from '@/assets/animalsIllustration/cat2-1.png'
import partialLogo from '@/assets/partial-logo.svg'
import styles from './animalsContainer.module.sass'

export default function AnimalsContainer() {
  return (
    <div className="flex flex-wrap gap-9 justify-center">
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={dog1Img1Illustration}
          alt="Imagem 1 do Alfredo"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-rose-500 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Alfredo
          </h3>
        </div>
      </div>
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={cat1Img1Illustration}
          alt="Imagem 1 do Juscelino"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-amber-300 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Juscelino
          </h3>
        </div>
      </div>
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={dog2Img1Illustration}
          alt="Imagem 1 do Alfredo"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-rose-500 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Juscelino
          </h3>
        </div>
      </div>
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={cat2Img1Illustration}
          alt="Imagem 1 do Juscelino"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-amber-300 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Juscelino
          </h3>
        </div>
      </div>
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={dog3Img1Illustration}
          alt="Imagem 1 do Getúlio"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-rose-500 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Getúlio
          </h3>
        </div>
      </div>
      <div
        className={`hover:bg-sky-900 bg-white rounded-3xl w-fit p-1 pb-5 flex flex-col items-center cursor-pointer hover:scale-[1.01] transition-all ease-out duration-500 ${styles.animalCard}`}
      >
        <Image
          src={dog4Img1Illustration}
          alt="Imagem 1 do Alfredo"
          width={274}
          height={135}
          className="rounded-3xl w-[17.125rem] h-[8.4375rem] object-cover"
        />
        <div className="relative bottom-7">
          <div
            className={`hover:bg-sky-900 bg-white rounded-xl w-fit p-1 ${styles.miniAnimalIllustration}`}
          >
            <div className="bg-amber-300 rounded-xl p-4">
              <Image
                src={partialLogo}
                alt="Imagem da logo parcial"
                width={15}
                height={15}
              />
            </div>
          </div>
          <h3 className="text-sky-900 text-lg font-bold absolute pt-1">
            Alfredo
          </h3>
        </div>
      </div>
    </div>
  )
}
