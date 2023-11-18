'use client'

import Image from 'next/image'
import Link from 'next/link'
import animalsIllustration from '@/assets/animals.svg'
import fullLogoIllustration from '@/assets/full-logo.svg'
import eyeOffIllustration from '@/assets/eye-off.svg'
import eyeOnIllustration from '@/assets/eye-on.svg'
import { useState } from 'react'

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState(false)

  function handlePasswordVisible() {
    setIsPasswordVisible((state) => !state)
  }

  function handlePasswordFocus() {
    setIsPasswordFocus((state) => {
      console.log(!state)
      return !state
    })
  }
  return (
    <div className="px-32 py-20 max-xl:p-4 flex w-screen min-h-screen font-nunito justify-center">
      <div className="w-screen max-w-[105rem] flex gap-32">
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
        <div className="flex-1 flex flex-col justify-between max-xl:justify-center max-xl:items-center max-xl:gap-10 pt-28 max-xl:pt-0">
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
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sky-900 text-base font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="nome@email.com"
                className="outline-0 bg-slate-50 rounded-xl border border-slate-300 p-5 text-sky-900 text-lg font-semibold focus:border-sky-900"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor={isPasswordVisible ? 'text' : 'password'}
                className="text-sky-900 text-base font-semibold"
              >
                Senha
              </label>
              <div className="flex items-center bg-slate-50 border-slate-300 rounded-tr-xl rounded-br-xl">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="Coloque sua senha"
                  className="outline-0 p-5 bg-slate-50 rounded-xl border rounded-r-none border-r-0 text-sky-900 text-lg font-semibold flex-1 focus:border-sky-900"
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordFocus}
                />
                <label
                  htmlFor="password"
                  className={`border border-l-0 rounded-tr-xl pr-5 rounded-br-xl cursor-text h-full flex item-center ${
                    isPasswordFocus ? 'border-sky-900' : 'border-slate-300'
                  }`}
                >
                  <div className="flex cursor-pointer">
                    <Image
                      src={eyeOffIllustration}
                      alt="Ícone de olho fechado representando ocultar senha"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        isPasswordVisible ? '' : 'hidden'
                      }`}
                      onClick={handlePasswordVisible}
                    />
                    <Image
                      src={eyeOnIllustration}
                      alt="Ícone de olho aberto representando senha aparecendo"
                      width={24}
                      height={24}
                      className={`opacity-50 ${
                        isPasswordVisible ? 'hidden' : ''
                      }`}
                      onClick={handlePasswordVisible}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-11">
              <button
                type="submit"
                className="bg-sky-900 rounded-3xl text-white text-xl font-extrabold py-4 px-20"
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
