'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import icons from '../../public/assets/outline/index.js'

const DarkLightTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="flex justify-center align-center p-5">
      <div className="pr-2">
        <Image src={icons.sun} alt={'icon-sun'} height={20} width={20} />
      </div>
      <label htmlFor="toggle-button" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle-button"
            className="sr-only"
            onChange={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
          />
          <div className="block bg-primary w-11 h-6 rounded-full dark:bg-primary" />
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition" />
        </div>
        <div className="ml-3 text-gray-700 font-medium" />
      </label>
      <Image src={icons.moon} alt={'icon-moon'} height={20} width={20} />
    </div>
  )
}

export default DarkLightTheme
