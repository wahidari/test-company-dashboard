export default function LokasiItem({ icon, total, description, className }) {
  return (
    <div className={`bg-green-600 p-6 rounded ${className}`}>
      <div className="flex space-x-2 items-center justify-between">
        {icon}
        <div>
          <p className="text-white font-semibold text-2xl text-right mb-1">{total}</p>
          <p className="text-neutral-200 text-xs whitespace-nowrap">{description}</p>
        </div>
      </div>
    </div>
  )
}