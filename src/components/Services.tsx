import { ServiceCard } from './ServiceCard'

const services = [
  {
    id: 1,
    title: 'Збільшення молочних залоз',
    image: '/services/breast-augmentation.jpg',
    link: 'https://your-website.com/breast-augmentation',
  },
  {
    id: 2,
    title: 'Ринопластика',
    image: '/services/rhinoplasty.jpg',
    link: 'https://your-website.com/rhinoplasty',
  },
  // Додайте інші послуги за потреби
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