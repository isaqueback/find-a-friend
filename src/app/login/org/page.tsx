'use client'

import Image from 'next/image'
import Link from 'next/link'
import animalsIllustration from '@/assets/animals.svg'
import fullLogoIllustration from '@/assets/full-logo.svg'
import eyeOffIllustration from '@/assets/eye-off.svg'
import eyeOnIllustration from '@/assets/eye-on.svg'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const loginFormSchema = z.object({
  email: z.string().email('Isto não é um e-mail válido.'),
  password: z.string().min(4, 'A senha deve ter no mínimo 4 dígitos.'),
})

type LoginFormType = z.infer<typeof loginFormSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  })
  const [password, setPassword] = useState({
    isVisible: false,
    isFocused: false,
  })

  function handleTogglePasswordVisibility() {
    setPassword((state) => {
      return { ...state, isVisible: !state.isVisible }
    })
  }

  function handleFocusChange(isFocused: boolean) {
    setPassword((state) => {
      return { ...state, isFocused }
    })
  }

  function onSubmit(data: LoginFormType) {
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
          <h1 className="text-sky-900 font-bold text-5xl">Boas-vindas!</h1>
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
                <small className="text-rose-500">{errors.email.message}</small>
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
                  onFocus={() => handleFocusChange(true)}
                  onBlur={() => handleFocusChange(false)}
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
                      onClick={handleTogglePasswordVisibility}
                    />
                    <Image
                      src={eyeOnIllustration}
                      alt="Ícone de olho aberto representando senha aparecendo"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        password.isVisible ? 'hidden' : ''
                      }`}
                      onClick={handleTogglePasswordVisibility}
                    />
                  </div>
                </label>
              </div>
              {errors.password?.message && (
                <small className="text-rose-500">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-4 mt-11">
              <button
                type="submit"
                className={`bg-sky-900 rounded-3xl text-white text-xl font-extrabold py-4 px-20 ${
                  Object.keys(errors).length > 0
                    ? 'cursor-not-allowed grayscale'
                    : ''
                }`}
              >
                Login
              </button>
              <Link
                href="/register/org"
                className="bg-sky-900 bg-opacity-5 rounded-3xl text-sky-900 text-xl font-extrabold py-4 px-20 text-center"
              >
                Cadastrar minha organização
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
