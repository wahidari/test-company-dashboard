export default function ProfilLabel({ text, className }) {
  return <p className={`text-sm text-neutral-700 dark:text-gray-300 ${className}`}>{text}</p>
}

ProfilLabel.value = ({ text }) => {
  return <p className="text-neutral-800 dark:text-gray-100">{text}</p>
}