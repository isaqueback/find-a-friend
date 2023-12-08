import Image from 'next/image'
import alertIllustration from '@/assets/warning.svg'
import xSquareIllustration from '@/assets/x-square.svg'

interface AnimalRequirementsProps {
  requirements: string[]
  handleDeleteSelectedRequirement?: (index: number) => void
}

export function AnimalRequirements({
  requirements,
  handleDeleteSelectedRequirement,
}: AnimalRequirementsProps) {
  return (
    <div className="flex flex-col gap-10 pb-5">
      <ul className="flex flex-col gap-3">
        {requirements.map((requirement, idx) => {
          return (
            <li
              key={idx}
              className="flex gap-3 items-center rounded-xl py-4 px-10 bg-opacity-5 bg-gradient-to-br from-rose-50 to-white border border-rose-500 cursor-pointer"
            >
              <Image
                src={alertIllustration}
                width={24}
                height={24}
                alt="Ícone de aviso"
              />
              <span className="text-rose-500 text-lg font-semibold">
                {requirement}
              </span>
              {handleDeleteSelectedRequirement && (
                <Image
                  src={xSquareIllustration}
                  width={24}
                  height={24}
                  alt="Ícone de cancelar"
                  className="ml-auto"
                  onClick={() => handleDeleteSelectedRequirement(idx)}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
