import { Link } from "react-router-dom"
import { useState } from "react"

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const menuItems = [
    {
      name: "სკოლის შესახებ",
      key: "about",
      links: [
        { name: "ისტორია", href: "/about/history" },
        { name: "მისია და ხედვა", href: "/about/mission" },
        { name: "ჰიმნი და გერბი", href: "/about/symbol" },
        { name: "ადმინისტრაცია", href: "/about/admin" },
      ],
    },
    {
      name: "სასწავლო პროცესი",
      key: "education",
      links: [
        { name: "კლასები", href: "/education/classes" },
        { name: "კათედრები", href: "/education/departments" },
      ],
    },
    {
      name: "დოკუმენტაცია",
      key: "docs",
      links: [
        { name: "სასწავლო წელი", href: "/documents/year" },
        { name: "ფორმები", href: "/documents/forms" },
      ],
    },
    {
      name: "რესურსები",
      key: "resources",
      links: [
        { name: "ბიბლიოთეკა", href: "/resources/library" },
        { name: "პროექტები", href: "/resources/projects" },
      ],
    },
  ]

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="w-full px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
          <span className="text-lg font-semibold text-gray-800">
            სკოლა ეტალონი
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-8 text-gray-700 text-sm font-medium">

          <Link to="/" className="hover:text-blue-600 transition">
            მთავარი
          </Link>

          {menuItems.map(({ name, key, links }) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setDropdownOpen(key)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                {name}
                <span className="text-xs">▾</span>
              </button>

              <div
                className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 transition-all duration-200 ${
                  dropdownOpen === key
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {links.map(link => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link to="/contact" className="hover:text-blue-600">
            კონტაქტი
          </Link>

        </nav>
      </div>
    </header>
  )
}