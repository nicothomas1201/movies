interface Props {
  path: string
  alt: string
}

export function MovieLogo({ path, alt }: Props) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-full w-9 h-9 ${
        path === '' ? 'bg-foreground' : ''
      }`}
    >
      {path !== '' ? (
        <img src={path} alt={alt} className="object-cover align-middle" />
      ) : null}
    </div>
  )
}
