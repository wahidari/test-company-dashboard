import { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function ThemeToggle() {
  // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {theme == 'dark' ?
        <button onClick={() => setTheme('light')} aria-label="Light" className="flex items-center justify-center px-3 py-2.5 sm:px-[18px] sm:py-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
          <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        </button>
        :
        <button onClick={() => setTheme('dark')} aria-label="Dark" className="flex items-center justify-center px-3 py-2.5 sm:px-[18px] sm:py-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
          <MoonIcon className="transform rotate-6 h-5 w-5 text-gray-600 dark:text-gray-400" />
        </button>
      }
    </>
  )
}