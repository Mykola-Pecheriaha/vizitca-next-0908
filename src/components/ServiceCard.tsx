import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  image: string
  link: string
}

export function ServiceCard({ title, image, link }: ServiceCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <Link 
          href={link}
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Дізнатися більше
        </Link>
      </div>
    </div>
  )
}