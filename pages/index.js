import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image';
// import { GlobalContext } from "@utils/GlobalContext";
import { CogIcon, GlobeAltIcon, LibraryIcon, MailIcon, OfficeBuildingIcon, PencilIcon, PhoneIcon, PlusIcon } from "@heroicons/react/outline";
import AktivitasItem from '@components/AktivitasItem';
import RelasiItem from '@components/RelasiItem';
import SectionTitle from '@components/SectionTitle';
import LokasiItem from '@components/LokasiItem';
import CreditCard from '@components/CreditCard';
import CreditCardInfo from '@components/CreditCardInfo';
import TopNav from '@components/TopNav';
import SideNav from '@components/SideNav';
import ProfilLabel from '@components/ProfilLabel';

export default function Home() {
  // const { darkMode, setDarkMode } = useContext(GlobalContext);
  const [active, setActive] = useState(true)

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex bg-slate-100 dark:bg-neutral-900 min-h-screen min-w-full">

        <SideNav />

        <main className="w-full">

          <TopNav />

          <div className="md:flex space-y-3 sm:space-y-0 md:space-x-6 px-3 sm:px-6 pb-6">
            {/* Left Side */}
            <div className="md:basis-1/4 bg-white dark:bg-neutral-800 shadow-lg rounded pb-8">
              <div className="relative w-full h-28">
                <Image alt="bg" layout='fill' src="/building.jpg" className="object-cover object-center rounded" />
              </div>
              <div className="relative w-28 h-28 bg-white -mt-16 mx-auto rounded-full shadow-lg p-4">
                <Image alt="bg" layout='fill' src="/mitramas.jpg" className="object-cover object-center rounded-full p-4" />
              </div>
              <div className="px-4 my-6">
                <SectionTitle text="Mitramas Infosys Global" className="text-center" />
                <p className="text-center text-sm mb-4 text-neutral-700 dark:text-gray-300">Layanan IT</p>
                <a href="#" className="text-green-600 text-sm font-medium flex items-center justify-center hover:text-green-500 transition-all">
                  <PencilIcon className="w-4 h-4 mr-2" />
                  Sunting profil
                </a>
              </div>
              <div className="px-6">
                <ProfilLabel text="Status Perusahaan" className="mt-3.5 mb-1.5" />
                <div className="flex items-center justify-between">
                  <p className="text-green-600 font-medium">{active ? "Aktif" : "Nonaktif"}</p>
                  <div onClick={() => setActive(!active)} className={`transition-all cursor-pointer w-10 h-6 ${active ? "bg-green-600" : "bg-neutral-200 dark:bg-neutral-900"} rounded-full relative`}>
                    <div className={`h-4 w-4 bg-white rounded-full absolute top-1 transition-all ${active ? "left-5" : "left-1"}`}></div>
                  </div>
                </div>
                <ProfilLabel text="Singkatan" className="mt-3.5 mb-1.5" />
                <ProfilLabel.value text="MIG" />
                <ProfilLabel text="Alamat" className="mt-3.5 mb-1.5" />
                <ProfilLabel.value text="Jl. Tebet Raya No 42, Jakarta Selatan" />
                <ProfilLabel text="Penanggung Jawab (PIC)" className="mt-3.5 mb-1.5" />
                <ProfilLabel.value text="John Doe" />
                <ProfilLabel text="Tanggal PKP" className="mt-3.5 mb-1.5" />
                <ProfilLabel.value text="03 Maret 2021" />
                <ProfilLabel text="Email" className="mt-3.5 mb-1.5" />
                <div className="flex items-center text-green-600 hover:text-green-500 transition-all">
                  <MailIcon className="w-4 h-4 mr-1" />
                  <a href="#" className="underline font-medium flex items-center justify-center">
                    mig@mitrasolusi.group
                  </a>
                </div>
                <ProfilLabel text="No. Telp" className="mt-3.5 mb-1.5" />
                <div className="flex items-center text-green-600 hover:text-green-500 transition-all">
                  <PhoneIcon className="w-4 h-4 mr-1" />
                  <a href="#" className="font-medium flex items-center justify-center">
                    021-5678-1234
                  </a>
                </div>
                <ProfilLabel text="Situs Web" className="mt-3.5 mb-1.5" />
                <div className="flex items-center text-green-600 hover:text-green-500 transition-all">
                  <GlobeAltIcon className="w-4 h-4 mr-1" />
                  <a href="#" className="underline font-medium flex items-center justify-center">
                    mitramas.com
                  </a>
                </div>
              </div>
            </div>
            {/* Left Side */}

            {/* Main / Right Side  */}
            <div className="md:basis-3/4">
              {/* Lokasi  */}
              <div className="bg-white mt-3 sm:mt-6 md:mt-0 dark:bg-neutral-800 shadow-lg rounded p-6">
                <div className="flex items-center justify-between">
                  <SectionTitle text="Lokasi" />
                  <a href="#" className="text-green-600 hover:text-green-500 transition-all font-medium flex items-center justify-center">
                    Lihat Semua
                  </a>
                </div>
                <div className="lg:flex space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
                  <LokasiItem total="20" description="Induk"
                    icon={<OfficeBuildingIcon className="w-12 h-12 text-white" />}
                    className="md:basis-1/3" />
                  <LokasiItem total="3" description="Sub Lokasi Level 1"
                    icon={<CogIcon className="w-12 h-12 text-white" />}
                    className="md:basis-1/3 opacity-95" />
                  <LokasiItem total="1" description="Sub Lokasi Level 2"
                    icon={<LibraryIcon className="w-12 h-12 text-white" />}
                    className="md:basis-1/3 opacity-90" />
                </div>
              </div>
              {/* Lokasi  */}

              <div className="lg:flex mt-3 sm:mt-6 lg:space-x-6">
                <div className="basis-1/2 space-y-3 sm:space-y-6">
                  {/* Akun Bank  */}
                  <div className=" bg-white dark:bg-neutral-800 shadow-lg rounded p-6">
                    <div className="flex flex-wrap gap-3 items-center justify-between mb-8">
                      <SectionTitle text="Akun Bank" />
                      <a href="#" className="bg-green-600 pr-4 pl-3 py-1.5 hover:bg-green-500 transition-all rounded text-white text-sm font-medium flex items-center justify-center">
                        <PlusIcon className="w-4 h-4 mr-1" />
                        Tambah Akun Bank
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-6">
                      <CreditCard name="VISA" className="bg-gradient-to-r from-yellow-400 to-lime-600" />
                      <CreditCardInfo bank="Bank KB Bukopin" name="**** 0876 - Yusron Taufiq" currency="IDR" />
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-6 mt-6">
                      <CreditCard name="VISA" className="bg-gradient-to-r from-sky-500 to-sky-300" />
                      <CreditCardInfo bank="Citibank, NA" name="**** 5525 - Si Tampan" currency="USD" />
                    </div>
                  </div>
                  {/* Akun Bank  */}

                  {/* Relasi  */}
                  <div className=" bg-white dark:bg-neutral-800 shadow-lg rounded p-6">
                    <div className="flex items-center justify-between mb-10">
                      <SectionTitle text="Relasi" />
                      <a href="#" className="text-green-600 hover:text-green-500 transition-all text-sm font-medium flex items-center justify-center">
                        Lihat Semua
                      </a>
                    </div>
                    <RelasiItem total="20" description="Memiliki" />
                    <RelasiItem total="108" description="Menggunakan" />
                    <RelasiItem total="67" description="Meminjam" />
                  </div>
                  {/* Relasi  */}
                </div>

                {/* Aktivitas  */}
                <div className="basis-1/2 bg-white dark:bg-neutral-800 shadow-lg rounded p-6 mt-3 sm:mt-6 lg:mt-0">
                  <SectionTitle text="Aktivitas" className="mb-10" />
                  <AktivitasItem
                    description="Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa"
                    date="Hari ini, 06:00" />
                  <AktivitasItem
                    description="Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet"
                    date="Kemarin, 17:32" />
                  <AktivitasItem
                    description="Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi"
                    date="Kemarin, 17:32" />
                </div>
                {/* Aktivitas  */}
              </div>

            </div>
            {/* Main / Right Side  */}

          </div>
        </main >
      </div>
    </div >
  )
}
