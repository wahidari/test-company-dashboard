export default function AktivitasItem({ description, date }) {
  return (
    <div className="mb-4">
      <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">{description}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  )
}