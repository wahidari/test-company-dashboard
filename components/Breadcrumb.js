import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Breadcrumb() {
  return (
    <ol className="flex items-center flex-wrap sm:space-x-1 last:pr-4">
      <li>
        <div className="flex items-center">
          <Link href="#">
            <a className="mr-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-200">Perusahaan</a>
          </Link>
          <ChevronRightIcon className="text-neutral-600 dark:text-neutral-400 w-4 h-4" />
        </div>
      </li>
      <li>
        <div className="flex items-center">
          <Link href="#">
            <a className="sm:ml-1 text-sm font-semibold text-gray-800 dark:text-gray-200 transition-all duration-200">Mitramas Infosys Global</a>
          </Link>
        </div>
      </li>
    </ol>
  )
}