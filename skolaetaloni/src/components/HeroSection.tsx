interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  children,
}: HeroSectionProps) {
  const bgStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}

  return (
    <section
      className="py-20 px-6 bg-cover bg-center text-center"
      style={{
        ...bgStyle,
        backgroundColor: '#f3f4f6',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">{title}</h1>
        {subtitle && <p className="text-xl text-gray-600 mb-8">{subtitle}</p>}
        {children && <div className="mb-8">{children}</div>}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  )
}
