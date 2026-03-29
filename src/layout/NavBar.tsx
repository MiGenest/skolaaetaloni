import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

type MenuItem = { label: string; href: string }
type MenuGroup = { label: string; items: MenuItem[] }

const menu: MenuGroup[] = [
  {
    label: "სკოლის შესახებ",
    items: [
      { label: "ზოგადი ინფორმაცია", href: "/about" },
      { label: "ისტორია", href: "/about/history" },
      { label: "მისია და ხედვა", href: "/about/mission" },
      { label: "ჰიმნი და გერბი", href: "/about/anthem" },
      { label: "ადმინისტრაცია", href: "/about/staff" },
    ],
  },
  {
    label: "სასწავლო პროცესი",
    items: [
      { label: "მიმოხილვა", href: "/education" },
      { label: "ქართული ენა", href: "/education/georgian" },
      { label: "მეცნიერება", href: "/education/technical" },
      { label: "უცხო ენები", href: "/education/languages" },
    ],
  },
  {
    label: "დოკუმენტაცია",
    items: [{ label: "ყველა დოკუმენტი", href: "/documents" }],
  },
  {
    label: "რესურსები",
    items: [{ label: "სასწავლო რესურსები", href: "/resources" }],
  },
]

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function getDropdownAlignment(index: number, total: number) {
  if (index === 0) return "site-nav__dropdown-shell--start"
  if (index === total - 1) return "site-nav__dropdown-shell--end"
  return "site-nav__dropdown-shell--center"
}

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null)
  const closeTimerRef = useRef<number | null>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const location = useLocation()

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const closeMenus = () => {
    clearCloseTimer()
    setOpenGroup(null)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setOpenGroup(null), 140)
  }

  const openMenu = (label: string) => {
    clearCloseTimer()
    setOpenGroup(label)
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const node = headerRef.current
    if (!node) return

    const updateHeight = () => setHeaderHeight(node.getBoundingClientRect().height)
    updateHeight()

    if (typeof ResizeObserver === "undefined") return

    const observer = new ResizeObserver(() => updateHeight())
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return
      if (headerRef.current?.contains(event.target)) return
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
      setOpenGroup(null)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (closeTimerRef.current) {
          window.clearTimeout(closeTimerRef.current)
          closeTimerRef.current = null
        }
        setOpenGroup(null)
      }
    }

    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenGroup(null)
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}
        aria-label="Main Navigation"
      >
        <div className="site-header__inner">
          <div className="site-header__row">
            <Link to="/" className="site-brand" aria-label="Go to home" onClick={closeMenus}>
              <span className="site-brand__mark" aria-hidden="true">
                <img
                  src="https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98/image-removebg-preview.png"
                  alt=""
                  className="site-brand__mark-image"
                />
              </span>
              <span className="site-brand__name">სკოლა ეტალონი</span>
            </Link>

            <nav className="site-nav" aria-label="Primary">
              <ul className="site-nav__list">
                <li className="site-nav__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `site-nav__link${isActive ? " is-active" : ""}`
                    }
                    onClick={closeMenus}
                  >
                    მთავარი
                  </NavLink>
                </li>

                {menu.map((group, index) => {
                  const open = openGroup === group.label
                  const isActive = group.items.some((item) => item.href === location.pathname)

                  return (
                    <li
                      key={group.label}
                      className={`site-nav__item site-nav__item--has-dropdown${open ? " is-open" : ""}`}
                      onMouseEnter={() => openMenu(group.label)}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        className={`site-nav__button${open ? " is-open" : ""}${isActive ? " is-active" : ""}`}
                        aria-haspopup="menu"
                        aria-expanded={open}
                        onClick={() =>
                          setOpenGroup((current) => (current === group.label ? null : group.label))
                        }
                      >
                        <span>{group.label}</span>
                        <IconChevronDown
                          className={`site-nav__chevron${open ? " is-open" : ""}`}
                        />
                      </button>

                      <div
                        className={`site-nav__dropdown-shell ${getDropdownAlignment(index, menu.length)}${open ? " is-open" : ""}`}
                      >
                        <div className="site-nav__dropdown" role="menu" aria-hidden={!open}>
                          {group.items.map((item) => (
                            <NavLink
                              key={item.href}
                              to={item.href}
                              className={({ isActive: itemActive }) =>
                                `site-nav__dropdown-link${itemActive ? " is-active" : ""}`
                              }
                              role="menuitem"
                              onClick={closeMenus}
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </li>
                  )
                })}

                <li className="site-nav__item">
                  <NavLink
                    to="/portal"
                    className={({ isActive }) =>
                      `site-nav__link${isActive ? " is-active" : ""}`
                    }
                    onClick={closeMenus}
                  >
                    პორტალი
                  </NavLink>
                </li>
              </ul>
            </nav>

            <Link to="/portal" className="site-header__cta" onClick={closeMenus}>
              დაგვიკავშირდით
            </Link>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        className="site-header__spacer"
        style={headerHeight ? { height: `${headerHeight}px` } : undefined}
      />
    </>
  )
}
