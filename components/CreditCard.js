export default function CreditCard({ name, className }) {
  return (
    <div className={`relative w-36 h-20 rounded-lg ${className}`}>
      <p className="text-white font-bold text-lg absolute bottom-0 right-0 p-2">{name}</p>
    </div>
  )
}