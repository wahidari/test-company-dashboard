export default function SectionTitle({ className, text }) {
  return <p className={`font-bold text-lg text-neutral-700 dark:text-gray-200 ${className}`}>{text}</p>
}