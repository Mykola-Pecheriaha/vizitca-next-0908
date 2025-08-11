

import { Profile } from '@/components/Profile'
import { Contacts } from '@/components/Contacts'
import { services } from '@/components/Services'
import { ServiceCard } from '@/components/ServiceCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Верхній розділ: про доктора */}
      <Profile />
      {/* Середній розділ: перелік карточок */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Послуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
      {/* Нижній розділ: контакти */}
      <Contacts />
    </div>
  )
}
