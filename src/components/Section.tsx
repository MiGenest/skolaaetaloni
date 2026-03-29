interface SectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
