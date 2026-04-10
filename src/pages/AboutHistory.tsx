const historyParagraphs = [
  "სკოლა „ეტალონი“ დაარსდა 2015 წელს, შპს ფორმატში შესაბამისი რეგისტრაციით. 2015 წლის 9 ნოემბერს საქართველოს განათლების ხარისხის განვითარების ეროვნული ცენტრის საბჭომ სკოლას ოფიციალურად მიანიჭა ავტორიზაცია, რაც ადასტურებს, რომ სასწავლო დაწესებულება სრულად აკმაყოფილებს სახელმწიფო სტანდარტებს.",
  "დაარსების დღიდან სკოლა აქტიურად ვითარდება როგორც საგანმანათლებლო, ასევე საზოგადოებრივ-კულტურული მიმართულებით. ტრადიციულად ტარდება სხვადასხვა ღონისძიებები, მათ შორის საახალწლო პროგრამები, ინტელექტუალური და სპორტული აქტივობები, როგორიცაა ჭადრაკის ტურნირები, რაც ხელს უწყობს მოსწავლეთა მრავალმხრივ განვითარებას.",
]

export default function AboutHistory() {
  return (
    <div className="history-page">
      <section className="history-hero">
        <div className="home-shell history-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">სკოლის შესახებ • ისტორია</span>
          <h1 className="history-hero__title">ისტორია</h1>
          <p className="history-hero__subtitle">
            სკოლის განვითარების გზა ასახავს ხარისხიან განათლებაზე, სტაბილურ ზრდასა და მრავალმხრივ სასკოლო
            ცხოვრებაზე ორიენტირებულ ხედვას.
          </p>
        </div>
      </section>

      <section className="home-section history-section">
        <div className="home-shell history-layout">
          <article className="history-card" aria-labelledby="history-heading">
            <div className="history-card__header">
              <span className="history-card__eyebrow">სკოლის განვითარების გზა</span>
              <h2 id="history-heading" className="history-card__title">
                ისტორია
              </h2>
            </div>

            <div className="history-card__copy">
              {historyParagraphs.map((paragraph) => (
                <p key={paragraph} className="history-card__text">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
