type ImageProps = {
  id: string
  alt: string
  className?: string
}

export function Image({ id, alt, className = '' }: ImageProps) {
  return (
    <img
      className={className}
      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`}
      alt={alt}
      loading="lazy"
    />
  )
}