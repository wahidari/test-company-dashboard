import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

export default function CreditCardInfo({bank, name, currency }) {
  return (
    <div className="w-full">
      <div className="flex space-x-3 items-center justify-between mb-4">
        <p className="font-bold text-sm text-neutral-700 dark:text-gray-200">{bank}</p>
        <div className="flex space-x-2 justify-between items-center">
          <a href="#" title='Edit'>
            <PencilIcon className="w-4 h-4 text-green-600 hover:text-green-500 transition-all" />
          </a>
          <a href="#" title='Delete'>
            <TrashIcon className="w-4 h-4 text-red-700 hover:text-red-600 transition-all" />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{name}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{currency}</p>
    </div>
  )
}