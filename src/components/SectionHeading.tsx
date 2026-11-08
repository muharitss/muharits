interface SectionHeadingProps {
  heading: string
  description?: string
  className?: string
}

export function SectionHeading({
  heading,
  description,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 mb-8 sm:mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#171717]">
        {heading}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#737373] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
