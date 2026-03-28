import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-800 shadow-lg px-8 py-5 flex justify-between items-center border-b-4 border-yellow-500">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-green-800 font-bold text-lg shadow-md">ე</div>
        <div>
          <h1 className="font-bold text-xl text-white">სკოლა ეტალონი</h1>
          <p className="text-xs text-green-100">რეგიონის წამყვანი სკოლა</p>
        </div>
      </Link>

      {/* MENU */}
      <ul className="flex gap-8 text-white items-center font-medium">

        <li>
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300">
            მთავარი
          </Link>
        </li>

        {/* სკოლა DROPDOWN */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent group-hover:border-yellow-300 pb-1">სკოლა</span>

          <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-3 p-3 space-y-1 min-w-[220px] z-50 border-t-4 border-yellow-500">
            <li>
              <Link to="/about/history" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-all duration-200">📖 ისტორია</Link>
            </li>
            <li>
              <Link to="/about/mission" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-all duration-200">🎯 მისია / ხედვა</Link>
            </li>
            <li>
              <Link to="/about/anthem" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-all duration-200">🎵 ჰიმნი / გერბი</Link>
            </li>
            <li>
              <Link to="/about/staff" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded transition-all duration-200">👥 ადმინისტრაცია</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/administration" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300">
            პედაგოგი
          </Link>
        </li>

        <li>
          <Link to="/education" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300">
            სასწავლო პროცესი
          </Link>
        </li>

        <li>
          <Link to="/documents" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300">
            დოკუმენტაცია
          </Link>
        </li>

        <li>
          <Link to="/resources" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300">
            რესურსები
          </Link>
        </li>

      </ul>
    </nav>
  )
}