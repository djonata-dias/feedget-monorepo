


import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { Monitor, Sun, MoonStars } from 'phosphor-react'

const themeIcons = {
    "light": (props?: any) => <Sun {...props} />,
    "dark": (props?: any) => <MoonStars {...props} />,
    "system": (props?: any) => <Monitor {...props} />,
}

const themeMode = {
    "light": () => localStorage.theme = 'light',
    "dark": () => localStorage.theme = 'dark',
    "system": () => localStorage.removeItem('theme')
}

type themes = keyof typeof themeIcons

export function ThemeModeButton() {
    const [activeTheme, setActiveTheme] = useState<themes>('system')

    useEffect(() => {
        themeMode[activeTheme]()
    }, [activeTheme])

    useEffect(() => {

        if (
            localStorage.theme === 'dark' ||
            (
                !('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            )
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [localStorage.theme])

    return (
        <div className="absolute right-2 top-0">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="p-2 m-1 flex w-full justify-center align-middle rounded-md bg-zinc-500 dark:bg-zinc-700 bg-opacity-20  text-sm font-medium text-zinc-900 dark:text-white hover:bg-opacity-60 dark:hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {themeIcons[activeTheme]({
                            className: "h-5 w-5 text-zinc-900 dark:text-zinc-300",
                            "aria-hidden": "true"
                        })}

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-30 origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-300 dark:bg-zinc-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                <button
                                    onClick={() => setActiveTheme('light')}
                                    className={`${activeTheme === 'light' ? ' bg-zinc-400 dark:bg-zinc-900' : 'bg-zinc-300 dark:bg-zinc-800'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-zinc-900 dark:text-zinc-300`}
                                >
                                    {themeIcons["light"]({
                                        className: "mr-2 h-5 w-5",
                                        "aria-hidden": "true"
                                    })}


                                    Light
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={() => setActiveTheme('dark')}
                                    className={`${activeTheme === 'dark' ? ' bg-zinc-400 dark:bg-zinc-900' : 'bg-zinc-300 dark:bg-zinc-800'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-zinc-900 dark:text-zinc-300`}
                                >
                                    {themeIcons["dark"]({
                                        className: "mr-2 h-5 w-5",
                                        "aria-hidden": "true",

                                    })}
                                    Dark
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    onClick={() => setActiveTheme('system')}
                                    className={`${activeTheme === 'system' ? ' bg-zinc-400 dark:bg-zinc-900' : 'bg-zinc-300 dark:bg-zinc-800'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-zinc-900 dark:text-zinc-300`}
                                >
                                    {themeIcons["system"]({
                                        className: "mr-2 h-5 w-5",
                                        "aria-hidden": "true"
                                    })}
                                    System
                                </button>

                            </Menu.Item>
                        </div>

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
