import Image from "next/image";
import { ArchiveIcon, ClipboardCheckIcon, CubeIcon, CurrencyDollarIcon, HomeIcon, OfficeBuildingIcon, ReceiptTaxIcon, SupportIcon, TemplateIcon, TicketIcon, UsersIcon } from "@heroicons/react/outline";
import SideNavItem from "./SideNavItem";
import ThemeToggle from "./ThemeToggle";

export default function SideNav() {
  return (
    <aside className="bg-white dark:bg-neutral-800 drop-shadow-lg py-6">
      <div className="relative sm:w-10 sm:h-8 p-4 mx-auto mb-8">
        <Image alt="bg" layout='fill' src="/logo.png" className="!px-2 !py-1 sm:!p-0" />
      </div>
      <ThemeToggle />
      <SideNavItem>
        <HomeIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <TicketIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <ClipboardCheckIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <ArchiveIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem className="bg-slate-100 dark:bg-neutral-900 border-l-4 border-l-green-600">
        <OfficeBuildingIcon className="-ml-1 h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <br />
      <SideNavItem>
        <UsersIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <TemplateIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <CubeIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <SupportIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <SideNavItem>
        <CurrencyDollarIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
      <br />
      <SideNavItem>
        <ReceiptTaxIcon className="h-5 w-6 text-gray-600 dark:text-gray-400" />
      </SideNavItem>
    </aside>
  )
}