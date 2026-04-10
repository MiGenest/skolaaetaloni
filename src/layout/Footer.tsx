import { Link } from "react-router-dom"
import { schoolContact } from "../data/siteInfo"

const logoUrl =
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98/image-removebg-preview.png"

const quickLinks = [
  { label: "მთავარი", href: "/" },
  { label: "სკოლის შესახებ", href: "/about" },
  { label: "სასწავლო პროცესი", href: "/education" },
  { label: "დოკუმენტაცია", href: "/documents" },
]

const academics = [
  { label: "ქართული ენა", href: "/education/georgian" },
  { label: "მეცნიერება", href: "/education/technical" },
  { label: "უცხო ენები", href: "/education/languages" },
  { label: "რესურსები", href: "/resources" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__column">
            <div className="site-footer__brand">
              <span className="site-footer__brand-mark" aria-hidden="true">
                <img src={logoUrl} alt="" className="site-footer__brand-image" />
              </span>
              <div>
                <h3 className="site-footer__brand-name">სკოლა ეტალონი</h3>
                <p className="site-footer__brand-copy">
                  რეგიონის წამყვანი სკოლა, რომელიც მოსწავლეების ყოვლისმხრივ განვითარებაზე ზრუნავს.
                </p>
              </div>
            </div>

            <div className="site-footer__meta">
              <p>📍 {schoolContact.addressWithPostalCode}</p>
              <p>
                📧{" "}
                <a href={`mailto:${schoolContact.email}`} className="site-footer__link">
                  {schoolContact.email}
                </a>
              </p>
              {schoolContact.phones.map((phone) => (
                <p key={phone}>📞 {phone}</p>
              ))}
            </div>
          </div>

          <div className="site-footer__column">
            <h3 className="site-footer__heading">სწრაფი ბმულები</h3>
            <ul className="site-footer__list">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h3 className="site-footer__heading">აკადემიური მიმართულებები</h3>
            <ul className="site-footer__list">
              {academics.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h3 className="site-footer__heading">დაგვიკავშირდით</h3>
            <div className="site-footer__socials">
              <a
                href={schoolContact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social"
                aria-label="Facebook"
              >
                Fb
              </a>
            </div>
            <ul className="site-footer__contact-list">
              <li>
                <span>მისამართი:</span> {schoolContact.addressWithPostalCode}
              </li>
              <li>
                <span>ელ-ფოსტა:</span>{" "}
                <a href={`mailto:${schoolContact.email}`} className="site-footer__link">
                  {schoolContact.email}
                </a>
              </li>
              {schoolContact.phones.map((phone) => (
                <li key={phone}>
                  <span>ტელეფონი:</span> {phone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__bottom">
          <p>
            &copy; {currentYear} <span>სკოლა ეტალონი</span>. ყველა უფლება დაცულია.
          </p>
          <p>მხარდაჭერა: {schoolContact.email}</p>
          <p>საგანმანათლებლო სივრცე, სადაც მზრუნველობა და პროგრესი ერთად ვითარდება.</p>
        </div>
      </div>
    </footer>
  )
}
