export default function SideNavItem({ href = "#", children, className }) {
  return (
    <a href={href} aria-label="Menu" className={`flex items-center justify-center p-2.5 sm:p-4 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all duration-200 ${className}`}>
      {children}
    </a>
  )
}