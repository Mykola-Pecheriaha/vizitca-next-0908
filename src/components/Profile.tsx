import Image from 'next/image'
import Link from 'next/link'

export function Profile() {
  return (
    <section className="mb-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">Печеряга Микола Миколайович</h1>
        <div
          className="bg-sky-200 backdrop-blur-sm rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start"
        >
          {/* Фото */}
          <div className="flex-shrink-0 w-80 h-96 relative rounded-lg overflow-hidden shadow">
            <Image
              src="/images/about-bord1.jpg"
              alt="Фото лікаря"
              fill
              className="object-cover"
              priority
              sizes="320px"
            />
          </div>
          {/* Дані */}
          <div className="flex-1 min-w-56 space-y-2">
            <div className="text-blue-700 font-medium text-lg">Хірург загальної, пластичної та малоінвазивної хірургії</div>
            <div className="text-gray-700">Стаж роботи: <span className="font-semibold">30 років</span></div>
            <div className="text-red-600 font-semibold">Вища категорія</div>
            <div className="mt-2">
              <span className="font-semibold">Напрямки хірургії:</span>
              <ul className="list-disc list-inside ml-4 text-gray-800">
                <li>Загальна хірургія</li>
                <li>Пластична хірургія</li>
                <li>Естетична хірургія</li>
                <li>Лапароскопічна хірургія</li>
                <li>Флебологія</li>
                <li>Проктологія</li>
              </ul>
              <div className="text-gray-500 italic text-sm mt-2">Регулярно проходить стажування за кордоном</div>
            </div>
          </div>
          {/* Контакти */}
          <div className="flex-1 min-w-56 space-y-2 ">
            {/* Адреса */}
            <div>
              <span className="font-semibold">Адреса клініки:</span>
              <div className="text-gray-800">
                м.Чернівці, вул.Героїв Майдану 226, ЦМКЛ, 4 поверх<br/>
                (вхід з вулиці Рівенська)
                {" "}
                <a href="https://maps.google.com/?q=м.Чернівці,+вул.Героїв+Майдану+226" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">на карті</a>
              </div>
            </div>
            {/* Телефони */}
            <div>
              <span className="font-semibold">Телефони:</span>
              <div className="flex flex-col gap-1 mt-1">
                <a href="tel:+380673287322" className="text-blue-600 hover:underline flex items-center gap-2">
                  +380 (67) 328-73-22
                </a>
                <a href="tel:+380507575411" className="text-blue-600 hover:underline flex items-center gap-2">
                  +380 (50) 757-54-11
                </a>
              </div>
            </div>
            {/* Email */}
            <div>
              <span className="font-semibold">Email:</span>
              <div className="flex flex-col gap-1 mt-1">
                <a href="mailto:Pecheryag@gmail.com" className="text-blue-600 hover:underline flex items-center gap-2">
                  Pecheryag@gmail.com
                </a>
                <a href="mailto:mykolap25@gmail.com" className="text-blue-600 hover:underline flex items-center gap-2">
                  mykolap25@gmail.com
                </a>
              </div>
            </div>
            {/* Сайт */}
            <div>
              <span className="font-semibold">Сайт:</span>
              <div className="flex flex-col gap-1 mt-1">
                <a href="https://www.plastic-p.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                  www.plastic-p.com
                </a>
              </div>
            </div>
            <div>
              <span className="font-semibold">Соціальні мережі:</span>
              <div className="flex gap-3 mt-1">
                <a href="https://www.facebook.com/mikola.peceraga" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" title="Facebook" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="https://t.me/pecheryag" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" title="Telegram" aria-label="Telegram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm5.707 8.293l-1.414 8.485c-.104.624-.441.775-.892.482l-2.475-1.826-1.194 1.151c-.132.132-.242.242-.495.242l.177-2.507 4.566-4.13c.199-.177-.043-.276-.309-.099l-5.654 3.561-2.434-.761c-.529-.165-.539-.529.11-.779l9.51-3.672c.444-.165.832.099.691.779z"/></svg>
                </a>
                <a href="https://instagram.com/pecheryag" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" title="Instagram" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">in</text></svg>
                </a>
              </div>
            </div>
            <div>
              <span className="font-semibold">Адреса:</span>
              <div className="text-gray-800">м.Чернівці, вул.Героїв Майдану 226, ЦМКЛ, 4 поверх<br/>(вхід з вулиці Рівенська)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}