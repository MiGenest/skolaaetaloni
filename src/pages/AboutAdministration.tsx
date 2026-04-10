import { schoolAsset } from "../config/assets"

const administrationGoals = [
  "სასწავლო პროცესის ხარისხის მუდმივი გაუმჯობესება",
  "თანამედროვე საგანმანათლებლო მიდგომების დანერგვა",
  "მოსწავლეზე ორიენტირებული გარემოს შექმნა",
]

const administrationGalleryImages = [
  {
    src: schoolAsset("teachers1.jpg"),
    alt: "სკოლის ადმინისტრაციის გუნდი",
  },
  {
    src: schoolAsset("teachers2.jpg"),
    alt: "ადმინისტრაციისა და პედაგოგების თანამშრომლობა",
  },
  {
    src: schoolAsset("teachers3.jpg"),
    alt: "სასკოლო გარემოში სამუშაო შეხვედრა",
  },
  {
    src: schoolAsset("teachers4.jpg"),
    alt: "სკოლის პროფესიული გუნდის პორტრეტი",
  },
]

export default function AboutAdministration() {
  return (
    <div className="administration-page">
      <section className="administration-hero">
        <div className="home-shell administration-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">სკოლის გუნდი • მართვა • განვითარება</span>
          <h1 className="administration-hero__title">ადმინისტრაცია</h1>
          <p className="administration-hero__subtitle">
            ადმინისტრაციული გუნდი ქმნის იმ სტაბილურ საფუძველს, რომელზეც სკოლის ყოველდღიური საქმიანობა,
            სასწავლო პროცესის ორგანიზება და გრძელვადიანი განვითარება შენდება.
          </p>
        </div>
      </section>

      <section className="home-section administration-section">
        <div className="home-shell administration-layout">
          <section className="administration-card administration-card--copy" aria-labelledby="administration-copy-heading">
            <div className="administration-card__header">
              <span className="administration-card__eyebrow">სკოლის მმართველი ბირთვი</span>
              <h2 id="administration-copy-heading" className="administration-card__title">
                ადმინისტრაციის როლი
              </h2>
            </div>

            <div className="administration-card__copy">
              <p className="administration-card__text">
                სკოლის ადმინისტრაცია წარმოადგენს ორგანიზაციულ ბირთვს, რომელიც უზრუნველყოფს სასწავლო პროცესის
                ეფექტურ დაგეგმვას, მართვასა და განვითარებას.
              </p>
              <p className="administration-card__text">
                ადმინისტრაციული გუნდი აქტიურად თანამშრომლობს პედაგოგებთან, მოსწავლეებთან და მშობლებთან, რათა
                შექმნას სტაბილური, უსაფრთხო და შედეგზე ორიენტირებული საგანმანათლებლო გარემო.
              </p>
            </div>

            <div className="administration-goals-block">
              <h3 className="administration-goals-block__title">ადმინისტრაციის მთავარი მიზანია</h3>
              <ul className="administration-goals-list">
                {administrationGoals.map((goal) => (
                  <li key={goal} className="administration-goals-list__item">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="administration-card__copy">
              <p className="administration-card__text">
                გუნდი გამოირჩევა პროფესიონალიზმით, პასუხისმგებლობის მაღალი დონით და მუდმივი განვითარებისკენ
                სწრაფვით.
              </p>
              <p className="administration-card__text">
                მათი საქმიანობა ხელს უწყობს სკოლის სტაბილურ ზრდასა და წარმატებას.
              </p>
            </div>
          </section>

          <section className="administration-card administration-card--gallery" aria-labelledby="administration-gallery-heading">
            <div className="administration-card__header">
              <span className="administration-card__eyebrow">ფოტოგალერეა</span>
              <h2 id="administration-gallery-heading" className="administration-card__title">
                ადმინისტრაციის გალერეა
              </h2>
            </div>

            <div className="administration-gallery">
              {administrationGalleryImages.map((image) => (
                <figure key={image.src} className="administration-gallery__item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="administration-gallery__image"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
