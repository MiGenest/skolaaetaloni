import { schoolLogoUrl } from "../config/assets"

const anthemParagraphs = [
  "სკოლის ჰიმნი წარმოადგენს ერთ-ერთ მნიშვნელოვან სიმბოლოს, რომელიც ასახავს სასწავლებლის სულს, ღირებულებებსა და ერთიანობას.",
  "ის აერთიანებს მოსწავლეებს, პედაგოგებსა და მთლიანად სკოლის საზოგადოებას საერთო იდეების, მიზნებისა და მომავლისკენ სწრაფვის გარშემო.",
  "ჰიმნის ტექსტში გამოხატულია ცოდნისადმი სწრაფვა, შრომისმოყვარეობა, პატივისცემა და განვითარების სურვილი.",
  "მისი შესრულება მნიშვნელოვან როლს ასრულებს სკოლის ტრადიციების შენარჩუნებასა და გაძლიერებაში, განსაკუთრებით სხვადასხვა ღონისძიებებისა და საზეიმო დღეების დროს.",
  "ჰიმნი ხელს უწყობს მოსწავლეებში ერთიანობის, პასუხისმგებლობისა და საკუთარი სკოლისადმი სიამაყის განცდის ჩამოყალიბებას.",
]

const emblemParagraphs = [
  "სკოლის გერბი წარმოადგენს მის იდენტობასა და ღირებულებების ვიზუალურ გამოხატულებას.",
  "გერბზე გამოყენებული ელემენტები სიმბოლურად ასახავს განათლებას, განვითარებას, მიზანდასახულობასა და წარმატებისკენ სწრაფვას.",
  "ფორმა და ფერები შერჩეულია ისე, რომ გამოხატავდეს სტაბილურობას, სანდოობასა და პროგრესს.",
  "გერბი არა მხოლოდ ვიზუალური ნიშანია, არამედ წარმოადგენს სკოლის ისტორიის, კულტურისა და მისწრაფებების ერთიან სიმბოლოს.",
  "ის აქტიურად გამოიყენება როგორც სასკოლო დოკუმენტაციაში, ასევე სხვადასხვა ოფიციალურ და არაოფიციალურ ღონისძიებებში.",
]

export default function AboutAnthemSymbol() {
  return (
    <div className="anthem-page">
      <section className="anthem-hero">
        <div className="home-shell anthem-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">ჰიმნი • გერბი</span>
          <h1 className="anthem-hero__title">სკოლის სიმბოლოები</h1>
          <p className="anthem-hero__subtitle">
            ჰიმნი და გერბი აერთიანებს სკოლის ისტორიას, კულტურას და იმ ღირებულებებს, რომლებიც ყოველდღიურ
            საგანმანათლებლო გარემოს მნიშვნელობას სძენს.
          </p>
        </div>
      </section>

      <section className="home-section anthem-section">
        <div className="home-shell anthem-layout">
          <section className="anthem-card anthem-card--anthem" aria-labelledby="anthem-heading">
            <div className="anthem-card__header">
              <span className="anthem-card__eyebrow">სკოლის ჰიმნი</span>
              <h2 id="anthem-heading" className="anthem-card__title">
                ჰიმნი
              </h2>
            </div>

            <div className="anthem-card__copy">
              {anthemParagraphs.map((paragraph) => (
                <p key={paragraph} className="anthem-card__text">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="anthem-card anthem-card--emblem" aria-labelledby="emblem-heading">
            <div className="anthem-card__header">
              <span className="anthem-card__eyebrow">სკოლის გერბი</span>
              <h2 id="emblem-heading" className="anthem-card__title">
                გერბი
              </h2>
            </div>

            <div className="anthem-emblem">
              <figure className="anthem-emblem__figure">
                <img
                  src={schoolLogoUrl}
                  alt="შპს სკოლა ეტალონის გერბი"
                  className="anthem-emblem__image"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="anthem-card__copy">
                {emblemParagraphs.map((paragraph) => (
                  <p key={paragraph} className="anthem-card__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
