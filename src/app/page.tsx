
import { Profile } from '@/components/Profile'
import { Services } from '@/components/Services'
import { Contacts } from '@/components/Contacts'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Profile />
      <Services />
      <Contacts />
    </div>
  )
}
