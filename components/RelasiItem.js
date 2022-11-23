import { ShareIcon } from "@heroicons/react/outline";

export default function AktivitasItem({ total, description }) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <ShareIcon className="w-7 h-7 text-gray-700 dark:text-gray-200" />
      <div>
        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">{total}</p>
        <p className="text-sm text-neutral-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}