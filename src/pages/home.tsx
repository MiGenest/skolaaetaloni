import { useEffect, useEffectEvent, useState } from "react"
import { news } from "../data/mockData"

const heroImages = [
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98/kids.jpg",
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98/teachers1.jpg",
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%A0%E1%83%93%E1%83%98/teachers2.jpg",
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%94%E1%83%93%E1%83%98/teachers3.jpg",
  "https://pub-04f9b39b7aaa44769336ac3075a4bdfd.r2.dev/sket/%E1%83%90%E1%83%A1%E1%83%90%E1%83%A2%E1%83%95%E1%83%98%E1%83%A0%E1%83%97%E1%83%98%20%E1%83%95%E1%83%94%E1%83%91%20%E1%83%92%E1%83%95%E1%83%93%E1%83%98/teachers4.jpg",
]

const highlights = [
  {
    icon: "📚",
    title: "მაღალი სტანდარტი",
    description: "აკადემიური მიღწევებით ხარისხის განათლების მყარი საფუძველი იქმნება.",
  },
  {
    icon: "👨‍🏫",
    title: "ექსპერტი პედაგოგები",
    description: "გამოცდილებული და კვალიფიცირებული გუნდი მოსწავლეს ყოველდღიურად გვერდით უდგას.",
  },
  {
    icon: "🌟",
    title: "სრული განვითარება",
    description: "აკადემიური და პირადი უნარები თანაბრად ვითარდება მზრუნველ გარემოში.",
  },
]

const values = [
  {
    title: "თანამშრომლობა",
    description: "ერთად მუშაობით უფრო ძლიერი შედეგები და უფრო ჯანსაღი გარემო იქმნება.",
  },
  {
    title: "გუნდურობა",
    description: "ერთი ჯანი უფრო ძლიერია, ვიდრე ერთი ხელი და ეს ჩვენი ყოველდღიური პრაქტიკაა.",
  },
  {
    title: "პასუხისმგებლობა",
    description: "საკუთარ მოქმედებებსა და გადაწყვეტილებებზე ზრუნვა სკოლის კულტურას აყალიბებს.",
  },
  {
    title: "თანაბარი ხელმისაწვდომობა",
    description: "ყველა მოსწავლეს უნდა ჰქონდეს განვითარების თანაბარი შესაძლებლობა.",
  },
]

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)

  const rotateHeroSlide = useEffectEvent(() => {
    setActiveHeroSlide((current) => (current + 1) % heroImages.length)
  })

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      rotateHeroSlide()
    }, 3800)

    return () => window.clearInterval(intervalId)
  }, [rotateHeroSlide])

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`home-hero__slide${index === activeHeroSlide ? " is-active" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="home-hero__overlay" />
        </div>
        <div className="home-hero__glow home-hero__glow--orange" />
        <div className="home-hero__glow home-hero__glow--green" />
        <div className="home-shell home-hero__content">
          <div className="home-hero__badge">თანამედროვე განათლება • სითბო • განვითარება</div>
          <h1 className="home-hero__title">სკოლა ეტალონი</h1>
          <p className="home-hero__subtitle">
            რეგიონის წამყვანი სკოლა, სადაც გამოცდილება, მზრუნველობა და განვითარების კულტურა ერთმანეთს ბუნებრივად ერწყმის.
          </p>
          <button className="home-hero__button">დაიწყე ისწავლე →</button>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-shell">
          <div className="home-copy">
            <span className="home-eyebrow">ჩვენ შესახებ</span>
            <h2 className="home-section__title">სითბოთი აშენებული საგანმანათლებლო გარემო</h2>
            <p className="home-section__text">
              სკოლა ეტალონი დაფუძნდა 2015 წელს, როგორც თანამედროვე სტანდარტების შესაბამისი საგანმანათლებლო დაწესებულება. ჩვენი მიზანია მოსწავლეების მრავალმხრივი განვითარება აკადემიური ცოდნის, პრაქტიკული უნარებისა და პიროვნული ზრდის მეშვეობით.
            </p>
            <p className="home-section__text">
              სკოლა რეგიონში გამოირჩევა მზრუნველ გარემოთი, მაღალი აკადემიური მოლოდინებითა და ინდივიდუალურ განვითარებაზე ორიენტირებული სწავლებით, რომელიც თითოეული მოსწავლის პოტენციალს თანმიმდევრულად აძლიერებს.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-shell">
          <div className="home-heading-group">
            <span className="home-eyebrow">სიახლეები</span>
            <h2 className="home-section__title">ბოლო სიახლეები</h2>
            <div className="home-heading-group__line" />
          </div>

          <div className="home-grid home-grid--three">
            {news.map((item) => (
              <article key={item.id} className="home-news-card">
                <div className="home-news-card__accent" />
                <div className="home-news-card__body">
                  <h3 className="home-news-card__title">{item.title}</h3>
                  <p className="home-news-card__text">{item.description}</p>
                  <a href="#" className="home-news-card__link">
                    წაიკითხე მეტი →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--band">
        <div className="home-shell">
          <div className="home-heading-group home-heading-group--light">
            <span className="home-eyebrow home-eyebrow--light">რატომ ჩვენ</span>
            <h2 className="home-section__title home-section__title--light">რატომ აირჩიოს სკოლა ეტალონი</h2>
          </div>

          <div className="home-grid home-grid--three">
            {highlights.map((item, index) => (
              <article key={item.title} className={`home-highlight-card home-highlight-card--${index % 3}`}>
                <div className="home-highlight-card__icon">{item.icon}</div>
                <h3 className="home-highlight-card__title">{item.title}</h3>
                <p className="home-highlight-card__text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-shell">
          <div className="home-heading-group">
            <span className="home-eyebrow">მისია და ხედვა</span>
            <h2 className="home-section__title">სკოლის ღირებულებები მოქმედებაში</h2>
          </div>

          <div className="home-grid home-grid--two">
            <article className="home-focus-card home-focus-card--green">
              <span className="home-focus-card__icon">🎯</span>
              <h3 className="home-focus-card__title">მისია</h3>
              <p className="home-focus-card__text">
                მრავალფეროვანი ფორმალური და არაფორმალური აქტივობებით, ვიზრუნოთ სწავლა-სწავლების ხარისხის მუდმივ განვითარებაზე და თანამედროვე სტანდარტების შესაბამისი განათლების დანერგვაზე.
              </p>
            </article>

            <article className="home-focus-card home-focus-card--orange">
              <span className="home-focus-card__icon">👁️</span>
              <h3 className="home-focus-card__title">ხედვა</h3>
              <p className="home-focus-card__text">
                რეგიონის წამყვანი სკოლა, რომელიც მოსწავლეებს ძლიერ აკადემიურ განათლებასთან ერთად ყოვლისმხრივ განვითარების რეალურ შესაძლებლობებს სთავაზობს.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="home-shell">
          <div className="home-heading-group">
            <span className="home-eyebrow">ღირებულებები</span>
            <h2 className="home-section__title">ჩვენი ღირებულებები</h2>
          </div>

          <div className="home-grid home-grid--four">
            {values.map((item, index) => (
              <article
                key={item.title}
                className={`home-value-card home-value-card--${index % 2 === 0 ? "green" : "orange"}`}
              >
                <h3 className="home-value-card__title">{item.title}</h3>
                <p className="home-value-card__text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
