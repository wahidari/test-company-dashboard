import Head from 'next/head'
import { Fragment, useContext, useState } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { ArchiveIcon, BellIcon, ChevronRightIcon, ClipboardCheckIcon, CogIcon, CubeIcon, CurrencyDollarIcon, GlobeAltIcon, HomeIcon, LibraryIcon, MailIcon, MenuIcon, MoonIcon, OfficeBuildingIcon, PencilIcon, PhoneIcon, PlusIcon, ReceiptTaxIcon, SearchIcon, ShareIcon, SunIcon, SupportIcon, TemplateIcon, TicketIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';

export default function Home() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const [active, setActive] = useState(true)

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex bg-slate-100 dark:bg-neutral-900 min-h-screen min-w-full">
        {/* Sidemenu  */}
        <div className="bg-white dark:bg-neutral-800 drop-shadow-lg py-6">
          <div className="relative w-8 h-6 sm:w-10 sm:h-8 p-4 mx-auto mb-10">
            <Image alt="bg" layout='fill' src="/logo.png" />
          </div>

          <div>
            {darkMode ?
              <a href="#" onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
                <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
              :
              <a href="#" onClick={() => setDarkMode(!darkMode)} className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
                <MoonIcon className="transform rotate-6 h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
            }
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <HomeIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <TicketIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <ClipboardCheckIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <ArchiveIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 bg-slate-100 dark:bg-neutral-900 border-l-4 border-l-green-600 transition-all duration-200">
              <OfficeBuildingIcon className="-ml-1 h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <br />
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <UsersIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <TemplateIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <CubeIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <SupportIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <CurrencyDollarIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
            <br />
            <a href="#" className="flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200">
              <ReceiptTaxIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>
        {/* Sidemenu  */}

        <main className="w-full">
          {/* Topnav  */}
          <nav className="flex items-center justify-between p-3 sm:p-6">
            {/* <div className="sm:hidden">
              <button>
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div> */}
            {/* Breadcrumb */}
            <ol className="flex items-center flex-wrap sm:space-x-1 last:pr-4">
              <li>
                <div className="flex items-center">
                  <Link href="#">
                    <a className="mr-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-all">Perusahaan</a>
                  </Link>
                  <ChevronRightIcon className="text-gray-500 w-4 h-4" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Link href="#">
                    <a className="sm:ml-1 text-sm font-semibold text-gray-800 dark:text-gray-200 transition-all">Mitramas Infosys Global</a>
                  </Link>
                </div>
              </li>
            </ol>
            {/* Breadcrumb */}

            <div className="flex items-center">
              {/* Search  */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
                    <a href="#">
                      <SearchIcon className="text-gray-500 dark:text-gray-400 w-5 h-5 mx-1 sm:mx-2" />
                    </a>
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
                  <Menu.Items className="absolute z-10 -right-16 sm:right-0 mt-6 w-64 p-4 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
                    <div className="px-1 py-1">
                      <input className="text-sm transition-all w-full px-3 py-[0.5rem] rounded-md
          dark:text-white bg-white dark:bg-neutral-700  
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
                  <Menu.Button className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
                    <a href="#">
                      <BellIcon className="text-gray-500 dark:text-gray-400 w-5 h-5 mr-2 lg:mr-6 " />
                    </a>
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
                  <Menu.Items className="absolute z-10 -right-10 sm:right-0 mt-6 w-64 p-4 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
                    <div className="px-1 py-1">
                      <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">Yusron menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">Hari ini, 06:00</p>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* Notification  */}

              {/* Account  */}
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex w-full items-center justify-center rounded-md text-sm font-medium text-white">
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
                  <Menu.Items className="absolute z-10 right-0 mt-4 w-40 origin-top-right bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active ? 'bg-slate-100 text-gray-700 dark:bg-neutral-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-200'
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
          </nav>
          {/* Topnav  */}

          <div className="md:flex space-y-3 sm:space-y-0 md:space-x-6 px-3 sm:px-6 pb-6">
            {/* Sidebar  */}
            <div className="md:basis-1/4 bg-white dark:bg-neutral-800 shadow-lg rounded pb-8">
              <div className="relative w-full h-28">
                <Image alt="bg" layout='fill' src="/building.jpg" className="object-cover object-center rounded" />
              </div>
              <div className="relative w-28 h-28 bg-white -mt-16 mx-auto rounded-full shadow-lg p-4">
                <Image alt="bg" layout='fill' src="/mitramas.jpg" className="object-cover object-center rounded-full p-4" />
              </div>
              <div className="px-4 my-6">
                <p className="font-bold text-lg text-center text-gray-800 dark:text-gray-200">Mitramas Infosys Global</p>
                <p className="text-center text-sm mb-4 text-neutral-700 dark:text-gray-300">Layanan IT</p>
                <a href="#" className="text-green-700 text-sm font-medium flex items-center justify-center">
                  <PencilIcon className="w-4 h-4 text-green-700 mr-2" />
                  Sunting profil
                </a>
              </div>
              <div className="px-6">
                <p className="text-sm mb-1.5 text-neutral-700 dark:text-gray-300">Status Perusahaan</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-700 font-medium">{active ? "Aktif" : "Nonaktif"}</p>
                  <div onClick={() => setActive(!active)} className={`transition-all cursor-pointer w-10 h-6 ${active ? "bg-green-700" : "bg-neutral-200 dark:bg-neutral-900"} rounded-full relative`}>
                    <div className={`h-4 w-4 bg-white rounded-full absolute top-1 transition-all ${active ? "left-5" : "left-1"}`}></div>
                  </div>
                </div>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Singkatan</p>
                <p className="text-neutral-800 dark:text-gray-100">MIG</p>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Alamat</p>
                <p className="text-neutral-800 dark:text-gray-100">Jl. Tebet Raya No 42, Jakarta Selatan</p>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Penanggung Jawab (PIC)</p>
                <p className="text-neutral-800 dark:text-gray-100">John Doe</p>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Tanggal PKP</p>
                <p className="text-neutral-800 dark:text-gray-100">03 Maret 2021</p>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Email</p>
                <div className="flex items-center">
                  <MailIcon className="w-4 h-4 text-green-700 mr-1" />
                  <a href="#" className="text-green-700 underline font-medium flex items-center justify-center">
                    mig@mitrasolusi.group
                  </a>
                </div>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">No. Telp</p>
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 text-green-700 mr-1" />
                  <a href="#" className="text-green-700 font-medium flex items-center justify-center">
                    021-5678-1234
                  </a>
                </div>
                <p className="text-sm mt-3.5 mb-1.5 text-neutral-700 dark:text-gray-300">Situs Web</p>
                <div className="flex items-center">
                  <GlobeAltIcon className="w-4 h-4 text-green-700 mr-1" />
                  <a href="#" className="text-green-700 underline font-medium flex items-center justify-center">
                    mitramas.com
                  </a>
                </div>
              </div>
            </div>
            {/* Sidebar  */}

            {/* Main  */}
            <div className="md:basis-3/4">
              {/* Lokasi  */}
              <div className="bg-white mt-3 sm:mt-6 md:mt-0 dark:bg-neutral-800 shadow-lg rounded p-6">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-lg text-neutral-700 dark:text-gray-200">Lokasi</p>
                  <a href="#" className="text-green-700 font-medium flex items-center justify-center">
                    Lihat Semua
                  </a>
                </div>
                <div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
                  <div className="md:basis-1/3 bg-green-600  p-6 rounded">
                    <div className="flex space-x-2 items-center justify-between">
                      <OfficeBuildingIcon className="w-12 h-12 text-white" />
                      <div>
                        <p className="text-white font-semibold text-2xl text-right">20</p>
                        <p className="text-gray-200 text-xs">Induk</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:basis-1/3 bg-green-600 opacity-90 p-6 rounded">
                    <div className="flex space-x-2 items-center justify-between">
                      <CogIcon className="w-12 h-12 text-white" />
                      <div>
                        <p className="text-white font-semibold text-2xl text-right">3</p>
                        <p className="text-gray-200 text-xs whitespace-nowrap">Sub Lokasi Level 1</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:basis-1/3 bg-green-600 opacity-75 p-6 rounded">
                    <div className="flex space-x-2 items-center justify-between">
                      <LibraryIcon className="w-12 h-12 text-white" />
                      <div>
                        <p className="text-white font-semibold text-2xl text-right">1</p>
                        <p className="text-gray-200 text-xs whitespace-nowrap">Sub Lokasi Level 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lokasi  */}

              <div className="lg:flex mt-3 sm:mt-6 lg:space-x-10">

                <div className="basis-1/2 space-y-3 sm:space-y-6">
                  {/* AKun Bank  */}
                  <div className=" bg-white dark:bg-neutral-800 shadow-lg rounded p-6">
                    <div className="flex flex-wrap space-y-2 items-center justify-between mb-8">
                      <p className="font-bold text-lg text-neutral-700 dark:text-gray-200">Akun Bank</p>
                      <a href="#" className="bg-green-700 px-4 py-1.5 hover:bg-green-800 rounded text-white text-sm font-medium flex items-center justify-center">
                        <PlusIcon className="w-4 h-4 text-white mr-1" />
                        Tambah Akun Bank
                      </a>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="relative w-36 h-20 rounded-lg bg-gradient-to-r from-yellow-400 to-lime-600">
                        <p className="text-white font-bold text-lg absolute bottom-0 right-0 p-2">VISA</p>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                          <p className="font-bold text-sm text-neutral-700 dark:text-gray-200">Bank KB Bukopin</p>
                          <div className="flex space-x-2 justify-between items-center">
                            <a href="#" title='Edit'>
                              <PencilIcon className="w-4 h-4 text-green-700" />
                            </a>
                            <a href="#" title='Delete'>
                              <TrashIcon className="w-4 h-4 text-red-700" />
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">**** 0876 - Yusron Taufiq</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">IDR</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 mt-6">
                      <div className="relative w-36 h-20 rounded-lg bg-gradient-to-r from-sky-500 to-sky-300">
                        <p className="text-white font-bold text-lg absolute bottom-0 right-0 p-2">VISA</p>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                          <p className="font-bold text-sm text-neutral-700 dark:text-gray-200">Citibank, NA</p>
                          <div className="flex space-x-2 justify-between items-center">
                            <a href="#" title='Edit'>
                              <PencilIcon className="w-4 h-4 text-green-700" />
                            </a>
                            <a href="#" title='Delete'>
                              <TrashIcon className="w-4 h-4 text-red-700" />
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">**** 5525 - Si Tampan</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">USD</p>
                      </div>
                    </div>
                  </div>
                  {/* AKun Bank  */}

                  {/* Relasi  */}
                  <div className=" bg-white dark:bg-neutral-800 shadow-lg rounded p-6">
                    <div className="flex items-center justify-between mb-10">
                      <p className="font-bold text-lg text-gray-700 dark:text-gray-200">Relasi</p>
                      <a href="#" className="text-green-700 text-sm font-medium flex items-center justify-center">
                        Lihat Semua
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                      <div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">20</p>
                        <p className="text-sm text-neutral-700 dark:text-gray-400">Memiliki</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                      <div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">108</p>
                        <p className="text-sm text-neutral-700 dark:text-gray-400">Menggunakan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
                      <div>
                        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">67</p>
                        <p className="text-sm text-neutral-700 dark:text-gray-400">Meminjam</p>
                      </div>
                    </div>
                  </div>
                  {/* Relasi  */}
                </div>

                {/* Aktivitas  */}
                <div className="basis-1/2 bg-white dark:bg-neutral-800 shadow-lg rounded p-6 mt-3 sm:mt-6 lg:mt-0">
                  <p className="font-bold text-lg text-gray-700 dark:text-gray-200 mb-10">Aktivitas</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Hari ini, 06:00</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Kemarin, 17:32</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Kemarin, 17:32</p>
                  </div>
                </div>
                {/* Aktivitas  */}

              </div>
            </div>
            {/* Main  */}

          </div>
        </main >
      </div>
    </div >
  )
}
