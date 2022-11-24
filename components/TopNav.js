import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, ChevronRightIcon, SearchIcon } from "@heroicons/react/outline";
import Breadcrumb from "./Breadcrumb";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between p-3 sm:p-6 gap-3">

      < Breadcrumb />

      {/* Right Topnav */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search  */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button aria-label="Search" className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
              <SearchIcon className="text-gray-500 dark:text-gray-400 w-5 h-5" />
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
            <Menu.Items className="absolute z-10 -right-16 sm:right-0 mt-4 md:mt-2 w-64 p-4 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
              <div className="px-1 py-1">
                <input className="text-sm transition-all w-full px-3 py-[0.5rem] rounded-md
          dark:text-white bg-white dark:bg-neutral-800  
          border border-gray-300 dark:border-neutral-600 
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder='Search' />
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Search  */}

        {/* Notification  */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button aria-label="Notification" className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
              <BellIcon className="text-gray-500 dark:text-gray-400 w-5 h-5" />
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
            <Menu.Items className="absolute z-10 -right-10 sm:right-0 mt-4 md:mt-2 w-64 p-4 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
              <div className="px-1 py-1">
                <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">Yusron menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
                <p className="text-xs text-gray-400">Hari ini, 06:00</p>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Notification  */}

        {/* Account  */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button aria-label="Profil" className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
              <div className="relative w-6 sm:w-8 h-6 sm:h-8">
                <Image alt="avatar" layout='fill' src="/avatar.jpg" className="rounded-full" />
              </div>
              <p className="hidden sm:block font-semibold text-neutral-700 dark:text-gray-200 text-sm ml-1 sm:ml-2 whitespace-nowrap">John Doe</p>
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
            <Menu.Items className="absolute z-10 right-0 mt-4 md:mt-2 w-40 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${active ? 'bg-slate-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <ChevronRightIcon
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Account  */}
      </div>
      {/* Right Topnav */}
      
    </nav>
  )
}