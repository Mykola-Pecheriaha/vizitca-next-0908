import Link from 'next/link'

const WORK_HOURS = [
  { day: 'понеділок', open: '09:00', close: '17:00' },
  { day: 'вівторок', open: '09:00', close: '17:00' },
  { day: 'середа', open: '09:00', close: '17:00' },
  { day: 'четвер', open: '09:00', close: '17:00' },
  { day: 'пʼятниця', open: '09:00', close: '17:00' },
  { day: 'субота', open: null, close: null },
  { day: 'неділя', open: null, close: null },
];

function getTodayStatus() {
  const now = new Date();
  // В JS тиждень починається з неділі (0)
  // 0 - неділя, 1 - понеділок, ... 6 - субота
  let dayIdx = now.getDay();
  // Перетворюємо: 0 (неділя) -> 6, 1 (понеділок) -> 0, ... 6 (субота) -> 5
  dayIdx = dayIdx === 0 ? 6 : dayIdx - 1;
  const today = WORK_HOURS[dayIdx];
  if (!today.open) return { status: 'Зачинено', color: 'text-red-600' };
  const current = now.getHours() + now.getMinutes() / 60;
  const open = Number(today.open.split(':')[0]) + Number(today.open.split(':')[1]) / 60;
  const close = Number(today.close.split(':')[0]) + Number(today.close.split(':')[1]) / 60;
  if (current >= open && current < close) return { status: 'Відкрито', color: 'text-green-600' };
  return { status: 'Зачинено', color: 'text-red-600' };
}

export function Contacts() {
  const todayStatus = getTodayStatus();
  return (
    <section className="my-12 bg-sky-200 backdrop-blur-sm p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-center">Контакти</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Ліва колонка: контакти */}
        <div className="flex-1 space-y-4 min-w-[220px]">
          {/* Адреса */}
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <div className="text-gray-700 font-semibold">Адреса клініки:</div>
              <div className="text-gray-800">
                м.Чернівці, вул.Героїв Майдану 226, ЦМКЛ, 4 поверх<br/>
                (вхід з вулиці Рівенська)
                {" "}
                <a href="https://maps.google.com/?q=м.Чернівці,+вул.Героїв+Майдану+226" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">на карті</a>
              </div>
            </div>
          </div>
          {/* Телефони */}
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="flex flex-col">
              <a href="tel:+380673287322" className="text-blue-600 hover:underline">+380 (67) 328-73-22</a>
              <a href="tel:+380507575411" className="text-blue-600 hover:underline">+380 (50) 757-54-11</a>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="flex flex-col">
              <a href="mailto:Pecheryag@gmail.com" className="text-blue-600 hover:underline">Pecheryag@gmail.com</a>
              <a href="mailto:pecheryag1968@gmail.com" className="text-blue-600 hover:underline">pecheryag1968@gmail.com</a>
            </div>
          </div>
          {/* Сайт */}
          <div className="flex items-center gap-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <a href="https://www.plastic-p.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.plastic-p.com
            </a>
          </div>
        </div>
        {/* Центр: години роботи */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center justify-center">
          <div className="bg-white/80 rounded-lg p-6 shadow text-center w-full max-w-xs">
            <div className="text-lg font-semibold mb-2">Години роботи</div>
            <div className={`${todayStatus.color} font-bold mb-2`}>{todayStatus.status}</div>
            <table className="w-full text-sm">
              <tbody>
                {WORK_HOURS.map((row, idx) => (
                  <tr key={row.day}>
                    <td className="text-left">{row.day}</td>
                    <td className={
                      'text-right ' +
                      (row.open ? '' : 'text-red-600') +
                      (idx === (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1) ? ' font-bold underline' : '')
                    }>
                      {row.open ? `${row.open}–${row.close}` : 'Зачинено'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Права колонка: карта */}
        <div className="flex-1 min-w-[300px] max-w-xl h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Карта розташування клініки"
            src="https://www.google.com/maps?q=м.Чернівці,+вул.Героїв+Майдану+226&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}