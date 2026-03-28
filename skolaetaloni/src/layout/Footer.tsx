export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-gray-200 py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 font-bold text-sm">ე</div>
              <h3 className="text-white font-bold text-lg">სკოლა ეტალონი</h3>
            </div>
            <p className="text-sm mb-4 text-green-100">რეგიონის წამყვანი სკოლა, რომელიც მოსწავლეების ყოვლისმხრივ განვითარებაზე ზრუნს</p>
            <div className="space-y-2 text-sm">
              <p><span className="text-yellow-400">📍</span> ბოროვი, თბილისი</p>
              <p><span className="text-yellow-400">📧</span> etalon2015@gmail.com</p>
              <p><span className="text-yellow-400">📞</span> +995 595 12 34 56</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg border-b-2 border-yellow-500 pb-2">სწრაფი ბმულები</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-yellow-400 transition duration-300">→ მთავარი</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition duration-300">→ სკოლის შესახებ</a></li>
              <li><a href="/education" className="hover:text-yellow-400 transition duration-300">→ სასწავლო პროცესი</a></li>
              <li><a href="/documents" className="hover:text-yellow-400 transition duration-300">→ დოკუმენტაცია</a></li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg border-b-2 border-yellow-500 pb-2">აკადემიური უბნები</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/education/georgian" className="hover:text-yellow-400 transition duration-300">→ ქართული ენა</a></li>
              <li><a href="/education/technical" className="hover:text-yellow-400 transition duration-300">→ მიღ მეცნიერება</a></li>
              <li><a href="/education/languages" className="hover:text-yellow-400 transition duration-300">→ უცხო ენები</a></li>
              <li><a href="/resources" className="hover:text-yellow-400 transition duration-300">→ რესურსები</a></li>
            </ul>
          </div>

          {/* Social & About */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg border-b-2 border-yellow-500 pb-2">დაგვიკავშირდით</h3>
            <div className="flex gap-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 hover:bg-yellow-400 transition duration-300 font-bold">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 hover:bg-yellow-400 transition duration-300">📷</a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 hover:bg-yellow-400 transition duration-300">💬</a>
            </div>
            <p className="text-sm text-green-100">გამოწერე ჩვენი სოციალური მედია არხები ახალი სიახლეებისა და ღონისძიებების გამო</p>
          </div>

        </div>

        {/* Middle Section - Divider */}
        <div className="border-t border-green-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-green-200">
          <p>&copy; {currentYear} <span className="font-bold text-yellow-400">სკოლა ეტალონი</span>. ყველა უფლება დაცულია.</p>
          <p className="mt-2 text-green-300">დიზაინი: პროფესიონალური ვებ სტუდია | მხარდაჭერა: etalon2015@gmail.com</p>
          <p className="mt-3 text-xs text-green-700">საპირველი განათლების დაწესებულება • რეგ. №XXXX • საიდენტიფიკაციო კოდი: XXXX</p>
        </div>
      </div>
    </footer>
  )
}
