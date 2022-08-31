import Head from 'next/head'
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { ArchiveIcon, BellIcon, ChevronRightIcon, ClipboardCheckIcon, CogIcon, CubeIcon, CurrencyDollarIcon, GlobeAltIcon, HomeIcon, LibraryIcon, MailIcon, OfficeBuildingIcon, PencilIcon, PhoneIcon, PlusIcon, ReceiptTaxIcon, SearchIcon, ShareIcon, SupportIcon, TemplateIcon, TicketIcon, TrashIcon, UsersIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className="flex bg-slate-100 dark:bg-neutral-900 min-h-screen min-w-full"> */}
      <div className="flex bg-slate-100 min-h-screen min-w-full">
        {/* Sidemenu  */}
        <div className="bg-white drop-shadow-lg py-6">
          <div className="relative w-10 h-8 mx-2 mb-10">
            <Image alt="bg" layout='fill' src="/logo.png" className="" />
          </div>
          <div>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <HomeIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <TicketIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <ClipboardCheckIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <ArchiveIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 bg-slate-100 border-l-4 border-l-green-600 transition-all duration-200">
              <OfficeBuildingIcon className="h-5 w-6 text-gray-600" />
            </a>
            <br/>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <UsersIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <TemplateIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <CubeIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <SupportIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <CurrencyDollarIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
            <br />
            <a href="#" className="flex items-center justify-center p-4 hover:bg-slate-100 transition-all duration-200">
              <ReceiptTaxIcon className="pl-1 h-5 w-6 text-gray-600" />
            </a>
          </div>
        </div>
        {/* Sidemenu  */}

        <main className="w-full">
          {/* Topnav  */}
          <nav className="flex items-center justify-between p-6">
            {/* Breadcrumb */}
            <ol className="flex items-center flex-wrap sm:space-x-1 last:pr-4">
              <li>
                <div className="flex items-center">
                  <Link href="#">
                    <a className="mr-1 text-sm text-gray-400 hover:text-gray-900 transition-all">Perusahaan</a>
                  </Link>
                  <ChevronRightIcon className="text-gray-500 w-4 h-4" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Link href="#">
                    <a className="sm:ml-1 text-sm font-semibold text-gray-900 transition-all whitespace-nowrap">Mitramas Infosys Global</a>
                  </Link>
                </div>
              </li>
            </ol>
            {/* Breadcrumb */}
            <div className="flex items-center">
              <a href="#">
                <SearchIcon className="text-gray-500 w-5 h-5 mx-1 sm:mx-2" />
              </a>
              <a href="#">
                <BellIcon className="text-gray-500 w-5 h-5 mr-1 lg:mr-6 " />
              </a>
              <div className="relative w-8 h-8">
                <Image alt="avatar" layout='fill' src="/avatar.jpg" className="rounded-full" />
              </div>
              <p className="font-semibold text-sm ml-1 sm:ml-2 whitespace-nowrap">John Doe</p>
            </div>
          </nav>
          {/* Topnav  */}

          <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 px-6 pb-8">
            {/* Sidebar  */}
            <div className="md:basis-1/4 bg-white shadow-lg rounded pb-8">
              <div className="relative w-full h-28">
                <Image alt="bg" layout='fill' src="/building.jpg" className="object-cover object-center rounded" />
              </div>
              <div className="relative w-28 h-28 bg-white -mt-16 mx-auto rounded-full shadow-lg p-4">
                <Image alt="bg" layout='fill' src="/mitramas.jpg" className="object-cover object-center rounded-full p-4" />
              </div>
              <div className="px-4 my-6">
                <p className="font-bold text-lg text-center">Mitramas Infosys Global</p>
                <p className="text-center mb-4">Layanan IT</p>
                <a href="#" className="text-green-700 text-sm font-medium flex items-center justify-center">
                  <PencilIcon className="w-4 h-4 text-green-700 mr-2" />
                  Sunting profil
                </a>
              </div>
              <div className="px-6">
                <p className="text-sm mb-2">Status Perusahaan</p>
                <div className="flex items-center justify-between">
                  <p className="text-green-700 font-medium">Aktif</p>
                  {/* <div onClick={() => setDarkMode(!darkMode)} className="transition-all cursor-pointer w-10 h-6 dark:bg-green-700 bg-neutral-200 rounded-full relative">
                    <div className="h-4 w-4 bg-white rounded-full absolute top-1 transition-all dark:left-5 left-1"></div>
                  </div> */}
                  <div className="transition-all cursor-pointer w-10 h-6 bg-green-700 rounded-full relative">
                    <div className="h-4 w-4 bg-white rounded-full absolute top-1 transition-all left-5"></div>
                  </div>
                </div>
                <p className="text-sm mt-3 mb-2">Singkatan</p>
                <p>MIG</p>
                <p className="text-sm mt-3 mb-2">Alamat</p>
                <p>Jl. Tebet Raya No 42, Jakarta Selatan</p>
                <p className="text-sm mt-3 mb-2">Penanggung Jawab (PIC)</p>
                <p>John Doe</p>
                <p className="text-sm mt-3 mb-2">Tanggal PKP</p>
                <p>03 Maret 2021</p>
                <p className="text-sm mt-3 mb-2">Email</p>
                <div className="flex items-center">
                  <MailIcon className="w-4 h-4 text-green-700 mr-1" />
                  <a href="#" className="text-green-700 underline font-medium flex items-center justify-center">
                    mig@mitrasolusi.group
                  </a>
                </div>
                <p className="text-sm mt-3 mb-2">No. Telp</p>
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 text-green-700 mr-1" />
                  <a href="#" className="text-green-700 font-medium flex items-center justify-center">
                    021-5678-1234
                  </a>
                </div>
                <p className="text-sm mt-3 mb-2">Situs Web</p>
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
              <div className="bg-white shadow-lg rounded p-6">
                <div className="flex items-center justify-between">
                  <p className="font-bold">Lokasi</p>
                  <a href="#" className="text-green-700 font-medium flex items-center justify-center">
                    Lihat Semua
                  </a>
                </div>
                <div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
                  <div className="md:basis-1/3 bg-green-700 p-6 rounded">
                    <div className="flex space-x-2 items-center justify-between">
                      <OfficeBuildingIcon className="w-12 h-12 text-white" />
                      <div>
                        <p className="text-white font-semibold text-2xl text-right">20</p>
                        <p className="text-gray-200 text-xs">Induk</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:basis-1/3 bg-green-600 p-6 rounded">
                    <div className="flex space-x-2 items-center justify-between">
                      <CogIcon className="w-12 h-12 text-white" />
                      <div>
                        <p className="text-white font-semibold text-2xl text-right">3</p>
                        <p className="text-gray-200 text-xs whitespace-nowrap">Sub Lokasi Level 1</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:basis-1/3 bg-green-500 p-6 rounded">
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

              <div className="lg:flex mt-6 lg:space-x-10">

                <div className="basis-1/2 space-y-6">
                  {/* AKun Bank  */}
                  <div className=" bg-white shadow-lg rounded p-6">
                    <div className="flex flex-wrap space-y-2 items-center justify-between mb-6">
                      <p className="font-bold">Akun Bank</p>
                      <a href="#" className="bg-green-700 px-4 py-1.5 hover:bg-green-800 rounded text-white text-sm font-medium flex items-center justify-center">
                        <PlusIcon className="w-4 h-4 text-white mr-1" />
                        Tambah Akun Bank
                      </a>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="relative w-36 h-20 rounded-lg bg-gradient-to-r from-yellow-300 to-lime-600">
                        <p className="text-white font-bold text-xl absolute bottom-0 right-0 p-2">VISA</p>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                          <p className="font-bold text-sm">Bank KB Bukopin</p>
                          <div className="flex space-x-2 justify-between items-center">
                            <a href="#" title='Edit'>
                              <PencilIcon className="w-5 h-5 text-green-700" />
                            </a>
                            <a href="#" title='Delete'>
                              <TrashIcon className="w-5 h-5 text-red-700" />
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">**** 0876 - Yusron Taufiq</p>
                        <p className="text-sm text-gray-500">IDR</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 mt-6">
                      <div className="relative w-36 h-20 rounded-lg bg-gradient-to-r from-sky-500 to-sky-300">
                        <p className="text-white font-bold text-xl absolute bottom-0 right-0 p-2">VISA</p>
                      </div>
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-4">
                          <p className="font-bold text-sm">Citibank, NA</p>
                          <div className="flex space-x-2 justify-between items-center">
                            <a href="#" title='Edit'>
                              <PencilIcon className="w-5 h-5 text-green-700" />
                            </a>
                            <a href="#" title='Delete'>
                              <TrashIcon className="w-5 h-5 text-red-700" />
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">**** 5525 - Si Tampan</p>
                        <p className="text-sm text-gray-500">USD</p>
                      </div>
                    </div>
                  </div>
                  {/* AKun Bank  */}

                  {/* Relasi  */}
                  <div className=" bg-white shadow-lg rounded p-6">
                    <div className="flex items-center justify-between mb-7">
                      <p className="font-bold">Relasi</p>
                      <a href="#" className="text-green-700 text-sm font-medium flex items-center justify-center">
                        Lihat Semua
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700" />
                      <div>
                        <p className="font-bold text-xl text-gray-700">20</p>
                        <p className="text-sm">Memiliki</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700" />
                      <div>
                        <p className="font-bold text-xl text-gray-700">108</p>
                        <p className="text-sm">Menggunakan</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <ShareIcon className="w-7 h-7 text-gray-700" />
                      <div>
                        <p className="font-bold text-xl text-gray-700">67</p>
                        <p className="text-sm">Meminjam</p>
                      </div>
                    </div>
                  </div>
                  {/* Relasi  */}
                </div>

                {/* Aktivitas  */}
                <div className="basis-1/2 bg-white shadow-lg rounded p-6 mt-6 lg:mt-0">
                  <p className="font-bold mb-7">Aktivitas</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-900 mb-2">Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa</p>
                    <p className="text-xs text-gray-400">Hari ini, 06:00</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-900 mb-2">Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet</p>
                    <p className="text-xs text-gray-400">Kemarin, 17:32</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-900 mb-2">Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi</p>
                    <p className="text-xs text-gray-400">Kemarin, 17:32</p>
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
