import { Link } from "react-router-dom"
import { schoolContact, schoolPersonnel } from "../data/siteInfo"

const generalInformationParagraphs = [
  "„სკოლა ეტალონი“ არის ავტორიზებული ზოგადსაგანმანათლებლო დაწესებულება, რომელიც ფუნქციონირებს 2015 წლის 9 ნოემბრიდან. სკოლა უზრუნველყოფს სწავლების სამივე საფეხურს და ხელს უწყობს მოსწავლეთა შესაძლებლობების გამოვლენას როგორც საგაკვეთილო, ასევე არასაგაკვეთილო პროცესში.",
  "არდადეგების პერიოდში მოსწავლეებს სთავაზობს ზამთრისა და საზაფხულო სკოლებს მრავალფეროვანი პროექტებით. ასევე, სასწავლო დღეებში უზრუნველყოფილია მოსწავლეთა ტრანსპორტირება.",
]

const academicProgramsParagraphs = [
  "სკოლა ახორციელებს ზოგადსაგანმანათლებლო პროგრამას I–XII კლასებისათვის. სასწავლო პროცესი გამოირჩევა მრავალფეროვანი შინაარსითა და ინოვაციური მიდგომებით. პროგრამა მოიცავს როგორც სახელმწიფო სტანდარტებით განსაზღვრულ საგნებს, ასევე დამატებით აქტივობებს — სპორტულ, შემოქმედებით და კრეატიულ მიმართულებებს.",
  "სკოლის მიზანია განათლების მიწოდება, რომელიც ავითარებს მოსწავლეთა აკადემიურ, სოციალურ და პრაქტიკულ უნარებს.",
]

const moreAboutLinks = [
  {
    href: "/about/history",
    title: "ისტორია",
    description: "სკოლის დაარსება და განვითარების გზა",
  },
  {
    href: "/about/mission",
    title: "მისია და ხედვა",
    description: "სკოლის ღირებულებები და სტრატეგიული მიმართულება",
  },
  {
    href: "/about/anthem",
    title: "ჰიმნი და გერბი",
    description: "სკოლის სიმბოლოები და მათი მნიშვნელობა",
  },
  {
    href: "/about/staff",
    title: "ადმინისტრაცია",
    description: "ადმინისტრაციული გუნდი და მათი საქმიანობა",
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="home-shell about-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">სკოლის შესახებ</span>
          <h1 className="about-hero__title">ზოგადი ინფორმაცია</h1>
          <p className="about-hero__subtitle">
            სკოლა ეტალონი ქმნის აკადემიურად ძლიერ, მზრუნველ და განვითარებაზე ორიენტირებულ გარემოს, სადაც
            მოსწავლეთა შესაძლებლობები მრავალფეროვან საქმიანობაში იკვეთება.
          </p>
        </div>
      </section>

      <section className="home-section about-section">
        <div className="home-shell about-layout">
          <article className="about-card about-card--copy" aria-labelledby="general-information-heading">
            <div className="about-card__header">
              <span className="about-card__eyebrow">სკოლის შესახებ</span>
              <h2 id="general-information-heading" className="about-card__title">
                ზოგადი ინფორმაცია
              </h2>
            </div>

            <div className="about-card__copy">
              {generalInformationParagraphs.map((paragraph) => (
                <p key={paragraph} className="about-card__text">
                  {paragraph}
                </p>
              ))}
            </div>

            <section className="about-subsection" aria-labelledby="academic-programs-heading">
              <h3 id="academic-programs-heading" className="about-subsection__title">
                აკადემიური პროგრამები
              </h3>
              <div className="about-card__copy">
                {academicProgramsParagraphs.map((paragraph) => (
                  <p key={paragraph} className="about-card__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="about-subsection" aria-labelledby="personnel-heading">
              <h3 id="personnel-heading" className="about-subsection__title">
                პერსონალი
              </h3>
              <ul className="about-people-list">
                {schoolPersonnel.map((person) => (
                  <li key={person.position} className="about-people-list__item">
                    <span className="about-people-list__role">{person.position}:</span>
                    <span className="about-people-list__name">{person.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <article className="about-card about-card--contact" id="contact" aria-labelledby="contact-heading">
            <div className="about-card__header">
              <span className="about-card__eyebrow">კონტაქტი</span>
              <h2 id="contact-heading" className="about-card__title">
                დაგვიკავშირდით
              </h2>
            </div>

            <ul className="about-contact-list">
              <li className="about-contact-list__item">
                <span className="about-contact-list__label">მისამართი</span>
                <span>{schoolContact.address}</span>
              </li>
              <li className="about-contact-list__item">
                <span className="about-contact-list__label">ტელეფონი</span>
                <span>{schoolContact.phones.join("; ")}</span>
              </li>
              <li className="about-contact-list__item">
                <span className="about-contact-list__label">ელ-ფოსტა</span>
                <a href={`mailto:${schoolContact.email}`} className="about-contact-list__link">
                  {schoolContact.email}
                </a>
              </li>
              <li className="about-contact-list__item">
                <span className="about-contact-list__label">სოციალური ქსელი</span>
                <a
                  href={schoolContact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-contact-list__link"
                >
                  Facebook
                </a>
              </li>
              <li className="about-contact-list__item">
                <span className="about-contact-list__label">კატეგორია</span>
                <span>{schoolContact.category}</span>
              </li>
            </ul>
          </article>

          <section className="about-links-section" aria-labelledby="more-about-heading">
            <div className="about-card__header">
              <span className="about-card__eyebrow">მეტი ინფორმაცია</span>
              <h2 id="more-about-heading" className="about-card__title">
                სკოლის უფრო მეტი შესახებ
              </h2>
            </div>

            <div className="about-links-grid">
              {moreAboutLinks.map((item) => (
                <Link key={item.href} to={item.href} className="about-links-card">
                  <h3 className="about-links-card__title">{item.title}</h3>
                  <p className="about-links-card__text">{item.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
