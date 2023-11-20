'use client'

import Image from 'next/image'
import Link from 'next/link'
import animalsIllustration from '@/assets/animals.svg'
import fullLogoIllustration from '@/assets/full-logo.svg'
import eyeOffIllustration from '@/assets/eye-off.svg'
import eyeOnIllustration from '@/assets/eye-on.svg'
import { useState } from 'react'
import { GoogleMap } from '@/app/components/googleMap/GoogleMap'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import xCancelIcon from '@/assets/x-circle-light.svg'

const registerFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email('Isto não é um e-mail válido.'),
    postalCode: z.string().refine((data) => /^[0-9]{5}-[0-9]{3}$/.test(data), {
      message: 'CEP deve estar no formato 12345-678.',
    }),
    address: z.string(),
    cellNumber: z.string(),
    password: z.string().min(4, 'A senha deve ter no mínimo 4 dígitos.'),
    confirmationPassword: z
      .string()
      .min(4, 'A senha deve ter no mínmio 4 dígitos.'),
  })
  .refine((data) => data.password === data.confirmationPassword, {
    message: 'As senhas não são iguais.',
    path: ['confirmationPassword'],
  })

type RegisterFormType = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  })
  const [password, setPassword] = useState({
    isVisible: false,
    isFocused: false,
  })
  const [passwordConfirmation, setPasswordConfirmation] = useState({
    isVisible: false,
    isFocused: false,
  })

  function handleTogglePasswordVisibility(field: string) {
    if (field === 'password') {
      setPassword((state) => ({ ...state, isVisible: !state.isVisible }))
    } else {
      setPasswordConfirmation((state) => ({
        ...state,
        isVisible: !state.isVisible,
      }))
    }
  }

  function handleFocusChange(field: string, isFocused: boolean) {
    if (field === 'password') {
      setPassword((state) => ({ ...state, isFocused }))
    } else {
      setPasswordConfirmation((state) => ({ ...state, isFocused }))
    }
  }

  async function onSubmit(data: RegisterFormType) {
    console.log(data)
  }

  return (
    <div className="px-32 py-20 max-xl:p-4 flex w-full min-h-screen font-nunito justify-center">
      <div className="w-full max-w-[105rem] flex gap-32">
        <div className="bg-rose-500 flex flex-col items-center justify-between flex-1 pt-28 pb-10 rounded-3xl max-xl:hidden">
          <Link href="/">
            <Image
              src={fullLogoIllustration}
              alt="Logotipo completa"
              width={174}
              height={45}
            />
          </Link>
          <Image
            src={animalsIllustration}
            alt="Ilustração de animais"
            width={384}
            height={195}
          />
        </div>
        <div className="flex-1 flex flex-col justify-between max-xl:justify-center max-xl:items-center gap-7 max-xl:gap-10 pt-28 max-xl:pt-0">
          <Link
            href="/"
            className="xl:hidden bg-rose-500 rounded-3xl p-3 mb-auto"
          >
            <Image
              src={fullLogoIllustration}
              alt="Logotipo completa"
              width={174}
              height={45}
            />
          </Link>
          <h1 className="text-sky-900 font-bold text-5xl">
            Cadastre sua organização
          </h1>
          <div className="xl:hidden bg-rose-500 rounded-3xl p-3">
            <Image
              src={animalsIllustration}
              alt="Ilustração de animais"
              width={384}
              height={195}
            />
          </div>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sky-900 text-base font-semibold"
              >
                Nome do responsável
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
                htmlFor="email"
                className="text-sky-900 text-base font-semibold"
              >
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="nome@email.com"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
              {errors.email?.message && (
                <small className="text-rose-500">{errors.email?.message}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="postal-code"
                className="text-sky-900 text-base font-semibold"
              >
                CEP
              </label>
              <input
                {...register('postalCode')}
                type="text"
                id="postal-code"
                placeholder="XXXXX-XXX"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
              {errors.postalCode?.message && (
                <small className="text-rose-500">
                  {errors.postalCode?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="address"
                className="text-sky-900 text-base font-semibold"
              >
                Endereço
              </label>
              <input
                {...register('address')}
                type="text"
                id="address"
                placeholder="Exemplo: Rua do meio, n° 2008"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
              <GoogleMap cep={watch('postalCode')} address={watch('address')} />
              {errors.address?.message && (
                <small className="text-rose-500">
                  {errors.address?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="cell-number"
                className="text-sky-900 text-base font-semibold"
              >
                Whatsapp
              </label>
              <input
                {...register('cellNumber')}
                type="text"
                id="cell-number"
                placeholder="Coloque seu número de celular com DDD"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
              {errors.cellNumber?.message && (
                <small className="text-rose-500">
                  {errors.cellNumber?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor={password.isVisible ? 'text' : 'password'}
                className="text-sky-900 text-base font-semibold"
              >
                Senha
              </label>
              <div className="flex items-center bg-slate-50 border-slate-300 rounded-tr-xl rounded-br-xl">
                <input
                  {...register('password')}
                  type={password.isVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="Coloque sua senha"
                  className="outline-0 p-5 bg-slate-50 rounded-xl border rounded-r-none border-r-0 text-sky-900 text-lg font-semibold flex-1 focus:border-sky-900"
                  onFocus={() => handleFocusChange('password', true)}
                  onBlur={() => handleFocusChange('password', false)}
                />
                <label
                  htmlFor="password"
                  className={`border border-l-0 rounded-tr-xl pr-5 rounded-br-xl cursor-text h-full flex item-center ${
                    password.isFocused ? 'border-sky-900' : 'border-slate-300'
                  }`}
                >
                  <div className="flex cursor-pointer">
                    <Image
                      src={eyeOffIllustration}
                      alt="Ícone de olho fechado representando ocultar senha"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        password.isVisible ? '' : 'hidden'
                      }`}
                      onClick={() => handleTogglePasswordVisibility('password')}
                    />
                    <Image
                      src={eyeOnIllustration}
                      alt="Ícone de olho aberto representando senha aparecendo"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        password.isVisible ? 'hidden' : ''
                      }`}
                      onClick={() => handleTogglePasswordVisibility('password')}
                    />
                  </div>
                </label>
              </div>
              {errors.password?.message && (
                <small className="text-rose-500">
                  {errors.password?.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor={passwordConfirmation.isVisible ? 'text' : 'password'}
                className="text-sky-900 text-base font-semibold"
              >
                Confirmação de senha
              </label>
              <div className="flex items-center bg-slate-50 border-slate-300 rounded-tr-xl rounded-br-xl">
                <input
                  {...register('confirmationPassword')}
                  type={passwordConfirmation.isVisible ? 'text' : 'password'}
                  id="password-confirmation"
                  placeholder="Confirme sua senha"
                  className="outline-0 p-5 bg-slate-50 rounded-xl border rounded-r-none border-r-0 text-sky-900 text-lg font-semibold flex-1 focus:border-sky-900"
                  onFocus={() =>
                    handleFocusChange('passwordConfirmation', true)
                  }
                  onBlur={() =>
                    handleFocusChange('passwordConfirmation', false)
                  }
                />
                <label
                  htmlFor="password-confirmation"
                  className={`border border-l-0 rounded-tr-xl pr-5 rounded-br-xl cursor-text h-full flex item-center ${
                    passwordConfirmation.isFocused
                      ? 'border-sky-900'
                      : 'border-slate-300'
                  }`}
                >
                  <div className="flex cursor-pointer">
                    <Image
                      src={eyeOffIllustration}
                      alt="Ícone de olho fechado representando ocultar senha"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        passwordConfirmation.isVisible ? '' : 'hidden'
                      }`}
                      onClick={() =>
                        handleTogglePasswordVisibility('passwordConfirmation')
                      }
                    />
                    <Image
                      src={eyeOnIllustration}
                      alt="Ícone de olho aberto representando senha aparecendo"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        passwordConfirmation.isVisible ? 'hidden' : ''
                      }`}
                      onClick={() =>
                        handleTogglePasswordVisibility('passwordConfirmation')
                      }
                    />
                  </div>
                </label>
              </div>
              {errors.confirmationPassword?.message && (
                <small className="text-rose-500">
                  {errors.confirmationPassword?.message}
                </small>
              )}
            </div>
            <div
              className={`flex flex-col gap-4 ${
                Object.keys(errors).length > 0 ? 'mt-1' : 'mt-11'
              }`}
            >
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
                className={`bg-sky-900 rounded-3xl text-white text-xl font-extrabold py-4 px-20  ${
                  Object.keys(errors).length > 0
                    ? 'cursor-not-allowed grayscale'
                    : ''
                }`}
                disabled={Object.keys(errors).length > 0}
              >
                Cadastrar
              </button>
              <Link
                href="/login/org"
                className="text-sky-900 text-xl font-extrabold py-4 px-20 text-center"
              >
                Já possui conta?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
