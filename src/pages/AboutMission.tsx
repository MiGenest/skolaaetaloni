const missionParagraphs = [
  "სკოლის მისიაა მრავალფეროვანი ფორმალური და არაფორმალური აქტივობების საშუალებით უზრუნველყოს სწავლა-სწავლების ხარისხის უწყვეტი განვითარება და თანამედროვე საგანმანათლებლო სტანდარტების დანერგვა.",
  "სკოლა ქმნის უსაფრთხო და მხარდაჭერაზე ორიენტირებულ გარემოს, სადაც აკადემიურ ცოდნასთან ერთად განსაკუთრებული ყურადღება ეთმობა თითოეული მოსწავლის უნარებისა და შესაძლებლობების აღმოჩენასა და განვითარებას.",
]

const values = [
  { icon: "🤝", label: "თანამშრომლობა" },
  { icon: "🧩", label: "გუნდურობა" },
  { icon: "🛡️", label: "პასუხისმგებლობის გააზრება" },
  { icon: "⚖️", label: "თანაბარი ხელმისაწვდომობა" },
]

export default function AboutMission() {
  return (
    <div className="mission-page">
      <section className="mission-hero">
        <div className="home-shell mission-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">მისია • ხედვა • ღირებულებები</span>
          <h1 className="mission-hero__title">შპს „სკოლა ეტალონი“</h1>
          <p className="mission-hero__subtitle">
            სკოლის განვითარების ღირებულებითი ჩარჩო, რომელიც აერთიანებს აკადემიურ ხარისხს, მზრუნველ გარემოსა და
            თანასწორ შესაძლებლობებს.
          </p>
        </div>
      </section>

      <section className="home-section mission-section">
        <div className="home-shell mission-layout">
          <p className="mission-section__intro">
            თითოეული მიმართულება ემსახურება მოსწავლის სრულფასოვან განვითარებას და ქმნის საფუძველს ძლიერი,
            პასუხისმგებლიანი და თავისუფლად მოაზროვნე თაობის აღსაზრდელად.
          </p>

          <div className="mission-grid">
            <section className="mission-card mission-card--mission" aria-labelledby="mission-heading">
              <h2 id="mission-heading" className="mission-card__title">
                მისია
              </h2>
              <div className="mission-card__copy">
                {missionParagraphs.map((paragraph) => (
                  <p key={paragraph} className="mission-card__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mission-card mission-card--vision" aria-labelledby="vision-heading">
              <h2 id="vision-heading" className="mission-card__title">
                ხედვა
              </h2>
              <p className="mission-card__text">
                სკოლის ხედვაა უახლოესი შვიდი წლის განმავლობაში ჩამოყალიბდეს რეგიონში წამყვან და მზარდ
                საგანმანათლებლო ცენტრად, რომელიც მოსწავლეებს მისცემს შესაძლებლობას გახდნენ თავისუფლად მოაზროვნე,
                პასუხისმგებლიანი და კონკურენტუნარიანი მოქალაქეები.
              </p>
            </section>

            <section className="mission-card mission-card--values" aria-labelledby="values-heading">
              <h2 id="values-heading" className="mission-card__title">
                ღირებულებები
              </h2>
              <ul className="mission-values-list">
                {values.map((value) => (
                  <li key={value.label} className="mission-values-list__item">
                    <span className="mission-values-list__icon" aria-hidden="true">
                      {value.icon}
                    </span>
                    <span className="mission-values-list__label">{value.label}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
