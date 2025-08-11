import { ServiceCard } from './ServiceCard'

export const services = [
  {
    id: 1,
    title: 'Підтяжка обличчя та шиї',
    image: '/images/faceliftFAQ2.jpg',
    link: 'https://www.plastic-p.com/services/facelift-section',
  },
  {
    id: 2,
    title: 'Блефаропластика',
    image: '/images/blepharoplastyPreparatio23.jpg',
    link: 'https://www.plastic-p.com/services/blepharoplasty',
  },
  {
    id: 3,
    title: 'Корекція вух',
    image: '/images/plastic-lift21.jpg',
    link: 'https://www.plastic-p.com/services/ottoplastic',
  },
  {
    id: 4,
    title: 'Корекція вух',
    image: '/images/plastic-lift21.jpg',
    link: 'https://www.plastic-p.com/services/ottoplastic',
  },
  // Другий ряд карточок
  {
    id: 5,
    title: 'Збільшення грудей',
    image: '/images/breast-augment.jpg',
    link: 'https://www.plastic-p.com/services/breast-surgery',
  },
  {
    id: 6,
    title: 'Заміна або видалення грудних імплантів',
    image: '/images/Replacement.jpg',
    link: 'https://www.plastic-p.com/services/implant-removal-replacement',
  },
  {
    id: 7,
    title: 'Підтяжка грудей, корекція соска та ареоли',
    image: '/images/breast34.bmp',
    link: 'https://www.plastic-p.com/services/mastopexy-with-nipple-correction',
  },
  {
    id: 8,
    title: 'Гінекомастія',
    image: '/images/ginecomastya.jpg',
    link: 'https://www.plastic-p.com/services/ginecomastiya',
  },
  // Третій ряд карточок
  {
    id: 9,
    title: 'Абдомінопластика',
    image: '/images/6.jpg',
    link: 'https://www.plastic-p.com/services/abdominoplasty',
  },
  {
    id: 10,
    title: 'Ліпосакція',
    image: '/images/liposecshen.jpg',
    link: 'https://www.plastic-p.com/services/liposuction',
  },
  {
    id: 11,
    title: 'Видалення шийного горба',
    image: '/images/liposecshen5.jpg',
    link: 'https://www.plastic-p.com/services/liposuction',
  },
  {
    id: 12,
    title: 'Варикозна хвороба',
    image: '/images/varicoz.jpg',
    link: 'https://www.plastic-p.com/services/varicose',
  },
  // Четвертий ряд карточок (оновлено)
  {
    id: 13,
    title: 'Доброякісні пухлини м`ягких тканей',
    image: '/images/Scintumoros.jpg',
    link: 'https://www.plastic-p.com/services/skintumors',
  },
  {
    id: 14,
    title: 'Карпальний синдром.',
    image: '/images/Carpalsindr.jpg',
    link: 'https://www.plastic-p.com/services/carpal-syndrome',
  },
  {
    id: 15,
    title: 'Грижі',
    image: '/images/gernio.jpg',
    link: 'https://www.plastic-p.com/services/gerniotomiya',
  },
  {
    id: 16,
    title: 'Проктологія',
    image: '/images/procto.jpg',
    link: 'https://www.plastic-p.com/services/proctology',
  },
]

export function Services() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Послуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  )
}