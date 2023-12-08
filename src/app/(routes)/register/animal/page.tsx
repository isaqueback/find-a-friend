'use client'

import Image from 'next/image'
import Link from 'next/link'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import xCancelIcon from '@/assets/x-circle-light.svg'
import { HorizontalBar } from '@/app/components/horizontalBar/HorizontalBar'
import uploadCloudIllustration from '@/assets/upload-cloud.svg'
import partialLogo2Illustration from '@/assets/partial-logo2.svg'
import fileTextIllustration from '@/assets/file-text.svg'
import xSquareIllustration from '@/assets/x-square.svg'
import plusIllustration from '@/assets/+.svg'
import logOutIllustration from '@/assets/log-out.svg'
import styles from './animal.module.sass'
import {
  ChangeEvent,
  DragEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react'
import { AnimalRequirements } from '@/app/components/animalRequirements/AnimalRequirements'
import SimplifiedAsideMenu from '@/app/components/simplifiedAsideMenu/SimplifiedAsideMenu'

const registerFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  age: z.string(z.enum(['baby', 'adult', 'senior'])),
  size: z.string(z.enum(['small', 'medium', 'big'])),
  energyLevel: z.string(z.enum(['low', 'medium', 'high'])),
  independencyLevel: z.string(z.enum(['low', 'medium', 'high'])),
  environmentSize: z.string(z.enum(['small', 'medium', 'big'])),
  imgs: z.array(z.unknown()),
  requirements: z.array(z.string()).default([]),
})

type RegisterFormType = z.infer<typeof registerFormSchema>

interface Owner {
  name: string
  location: {
    address: string
  }
}

export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  })

  const [selectedImgs, setSelectedImgs] = useState([] as File[])
  const [newRequirement, setNewRequirement] = useState('')
  const [owner, setOwner] = useState({
    name: 'Seu Cãopanheiro',
    location: {
      address: 'Rua do meio, 123, Boa Viagem, Recife - PE',
    },
  } as Owner)

  async function onSubmit(data: RegisterFormType) {
    console.log(data)
  }

  function handleInputImg(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.currentTarget

    if (files && files.length > 0 && selectedImgs.length < 7) {
      const newFiles = Array.from(files)

      setSelectedImgs((state) => [...state, ...newFiles])
    }

    e.target.value = ''
  }

  function handleDeleteSelectedImg(id: number) {
    const currentSelectedImgs = selectedImgs
    const updatedSelectedImgs = currentSelectedImgs.filter(
      (img) => img.lastModified !== id,
    )

    setSelectedImgs(updatedSelectedImgs)
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files)

    setSelectedImgs((state) => [...state, ...files])
  }

  function handleAddNewRequirement() {
    if (getValues('requirements')) {
      setValue('requirements', [...getValues('requirements'), newRequirement])
    } else {
      setValue('requirements', [newRequirement])
    }
  }

  function handleAddNewRequirementOnEnter(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleAddNewRequirement()
    }
  }

  function handleDeleteSelectedRequirement(idx: number) {
    const updatedRequirements = getValues('requirements').filter(
      (_, index) => idx !== index,
    )

    setValue('requirements', updatedRequirements)
  }

  useEffect(() => {
    setValue('imgs', selectedImgs)
  }, [selectedImgs, setValue])

  return (
    <div className="bg-rose-50 px-32 py-20 max-xl:p-0 max-xl:pt-20 max-lg:pt-0 flex w-full min-h-screen font-nunito justify-center relative">
      <div className="absolute left-0 top-0">
        <SimplifiedAsideMenu url="/animals" />
      </div>
      <div className="w-full max-w-[44.25rem] flex flex-col gap-8 max-lg:mt-48 px-4">
        <div className="flex max-sm:flex-col max-sm:items-center bg-sky-900 rounded-3xl px-20 py-7 gap-5">
          <Image
            src={partialLogo2Illustration}
            width={64}
            height={64}
            alt="Logotipo parcial"
            className="w-16 h-16"
          />
          <div className="w-[23.75rem]">
            <h3 className="text-white text-3xl font-bold max-sm:text-center">
              {owner.name}
            </h3>
            <p className="text-white text-base font-semibold max-sm:text-center">
              {owner.location.address}
            </p>
          </div>
          <Link
            href="/"
            className="sm:w-16 h-16 max-sm:w-full bg-sky-800 rounded-[15px] flex justify-center items-center"
          >
            <Image
              src={logOutIllustration}
              width={30}
              height={30}
              alt="Ícone de logout"
              className="w-6 h-6"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-between max-xl:justify-center max-xl:items-center gap-7 max-xl:gap-10 bg-white border rounded-3xl px-20 pt-16 pb-20 max-md:p-4">
          <h1 className="text-sky-900 font-extrabold text-5xl">
            Adicione um pet
          </h1>
          <HorizontalBar />
          <form
            action=""
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sky-900 text-base font-semibold"
              >
                Nome
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder="Exemplo: João Silva"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
              {errors.name?.message && (
                <small className="text-rose-500">{errors.name?.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-sky-900 text-base font-semibold flex gap-6 items-center "
              >
                <span>Sobre</span>
                <small className="text-slate-400 text-xs font-normal">
                  Máximo de 300 caracteres
                </small>
              </label>
              <textarea
                maxLength={300}
                {...register('description')}
                id="description"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 h-60"
              ></textarea>
              {errors.description?.message && (
                <small className="text-rose-500">
                  {errors.description?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="age"
                className="text-sky-900 text-base font-semibold"
              >
                Idade
              </label>
              <select
                {...register('age')}
                className={`outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 ${styles.selectContainer}`}
              >
                <option value="baby">Filhote</option>
                <option value="adult">Adulto</option>
                <option value="senior">Idoso</option>
              </select>
              {errors.age?.message && (
                <small className="text-rose-500">{errors.age?.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="size"
                className="text-sky-900 text-base font-semibold"
              >
                Porte
              </label>
              <select
                {...register('size')}
                className={`outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 ${styles.selectContainer}`}
              >
                <option value="small">Pequenino</option>
                <option value="medium">Médio</option>
                <option value="big">Grandão</option>
              </select>
              {errors.size?.message && (
                <small className="text-rose-500">{errors.size?.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="energyLevel"
                className="text-sky-900 text-base font-semibold"
              >
                Nível de energia
              </label>
              <select
                {...register('energyLevel')}
                className={`outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 ${styles.selectContainer}`}
              >
                <option value={1}>Calminho</option>
                <option value={2}>Sossegado</option>
                <option value={3}>Meio-tempo</option>
                <option value={4}>Foguetinho</option>
                <option value={5}>Furacão</option>
              </select>
              {errors.energyLevel?.message && (
                <small className="text-rose-500">
                  {errors.energyLevel?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="independencyLevel"
                className="text-sky-900 text-base font-semibold"
              >
                Nível de independência
              </label>
              <select
                {...register('independencyLevel')}
                className={`outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 ${styles.selectContainer}`}
              >
                <option value="low">
                  Baixa {'('}precisa de companhia sempre{')'}
                </option>
                <option value="medium">
                  Média {'('}aprecia companhia, mas tolera períodos curtos
                  sozinho{')'}
                </option>
                <option value="high">
                  Alta {'('}sem dependência constante de companhia{')'}
                </option>
              </select>
              {errors.independencyLevel?.message && (
                <small className="text-rose-500">
                  {errors.independencyLevel?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="environment-size"
                className="text-sky-900 text-base font-semibold"
              >
                Ambiente
              </label>
              <select
                id="environment-size"
                {...register('environmentSize')}
                className={`outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 ${styles.selectContainer}`}
              >
                <option value="low">Ambiente pequeno</option>
                <option value="medium">Ambiente médio</option>
                <option value="high">Ambiente amplo</option>
              </select>
              {errors.environmentSize?.message && (
                <small className="text-rose-500">
                  {errors.environmentSize?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="imgs"
                className="text-sky-900 text-base font-semibold flex flex-col"
              >
                <span>Fotos</span>
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="flex flex-col justify-center items-center gap-2 h-40 outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900 cursor-pointer"
              >
                <Image
                  src={uploadCloudIllustration}
                  width={24}
                  height={24}
                  alt="Ícone da nuvem de upload"
                />
                <span className="text-lg font-semibold">
                  Arraste e solte o arquivo
                </span>
              </div>
              <Controller
                name="imgs"
                control={control}
                render={() => (
                  <input
                    id="imgs"
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    className={`hidden`}
                    onChange={handleInputImg}
                  />
                )}
              />
              <ul className="flex flex-col gap-3 mt-4">
                {selectedImgs.map((img, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl border border-slate-300 p-3 flex items-center"
                  >
                    <div className="flex gap-3 items-center">
                      <Image
                        src={fileTextIllustration}
                        width={24}
                        height={24}
                        alt="Ícone de imagem"
                      />
                      <span className="text-sm font-normal">{img.name}</span>
                    </div>
                    <Image
                      src={xSquareIllustration}
                      width={24}
                      height={24}
                      alt="Ícone de cancelar"
                      className="ml-auto cursor-pointer"
                      onClick={() => handleDeleteSelectedImg(img.lastModified)}
                    />
                  </li>
                ))}
              </ul>
              <label
                htmlFor="imgs"
                className="w-full h-16 mt-9 bg-rose-400 bg-opacity-10 rounded-xl border border-red-500 border-dashed flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={plusIllustration}
                  width={16}
                  height={16}
                  alt="Ícone do adicionar (mais)"
                />
              </label>
              {errors.imgs?.message && (
                <small className="text-rose-500">{errors.imgs?.message}</small>
              )}
            </div>
            <div className="text-sky-900 flex flex-col gap-7 mt-20">
              <h2 className="text-3xl font-extrabold">
                Requisitos para adoção
              </h2>
              <HorizontalBar />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="requirement"
                  className="text-base font-semibold"
                >
                  Requisito
                </label>
                <input
                  type="text"
                  id="requirement"
                  onChange={(e) => setNewRequirement(e.target.value)}
                  value={newRequirement}
                  placeholder="Define um requisito"
                  className="text-lg font-semibold bg-slate-50 rounded-xl border border-slate-300 px-6 py-4 outline-none"
                  onKeyDown={handleAddNewRequirementOnEnter}
                />
                <AnimalRequirements
                  requirements={watch('requirements') ?? []}
                  handleDeleteSelectedRequirement={
                    handleDeleteSelectedRequirement
                  }
                />
                <div
                  onClick={handleAddNewRequirement}
                  className="w-full h-16 mt-1 bg-rose-400 bg-opacity-10 rounded-xl border border-red-500 border-dashed flex justify-center items-center cursor-pointer"
                >
                  <Image
                    src={plusIllustration}
                    width={16}
                    height={16}
                    alt="Ícone do adicionar (mais)"
                  />
                </div>
              </div>
            </div>
            <div className={`flex flex-col gap-4 mt-40`}>
              {Object.keys(errors).length > 0 && (
                <div className="flex gap-1 items-center">
                  <Image
                    src={xCancelIcon}
                    alt="Ícone de x dentro de círculo representando erro"
                    width={20}
                    height={20}
                  />
                  <small className="text-rose-500">
                    Há erros no formulário
                  </small>
                </div>
              )}
              <button
                type="submit"
                className={`bg-amber-300 rounded-3xl text-sky-900 text-xl font-extrabold py-4 px-20  ${
                  Object.keys(errors).length > 0
                    ? 'cursor-not-allowed grayscale'
                    : ''
                }`}
                disabled={Object.keys(errors).length > 0}
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
