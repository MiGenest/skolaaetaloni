import type { ReactNode } from 'react'

interface DepartmentCardProps {
  title: string
  description: string
  icon?: string
  link?: string
  children?: ReactNode
}

export default function DepartmentCard({ title, description, icon, link, children }: DepartmentCardProps) {
  const content = (
    <div className="h-full">
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )

  return link ? (
    <a href={link} className="p-6 border rounded-lg hover:shadow-lg transition-shadow block">
      {content}
    </a>
  ) : (
    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      {content}
    </div>
  )
}
