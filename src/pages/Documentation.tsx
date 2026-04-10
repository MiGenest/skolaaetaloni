import { useEffect, useState } from "react"
import { schoolAsset } from "../config/assets"

type SchoolDocument = {
  id: string
  title: string
  url: string
  type: "pdf" | "spreadsheet"
  description: string
}

const previewUnavailableMessage = "Document preview not available"

const schoolDocuments: SchoolDocument[] = [
  {
    id: "school-structure",
    title: "სკოლის სტრუქტურა",
    url: schoolAsset(".%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9A%E1%83%98%E1%83%A1%20%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%A3%E1%83%A5%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%90.pdf"),
    type: "pdf",
    description: "სასკოლო სტრუქტურის მიმოხილვა",
  },
  {
    id: "action-report-2024-2025",
    title: "2024-2025 სასწავლო წლის სამოქმედო გეგმის ანგარიში",
    url: schoolAsset("2024-2025%20%E1%83%A1%E1%83%90%E1%83%A1%E1%83%AC.%20%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1%20%E1%83%A1%E1%83%90%E1%83%9B%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%94%E1%83%93%E1%83%9D%20%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%98%E1%83%A1%20%20%20%E1%83%90%E1%83%9C%E1%83%92%E1%83%90%E1%83%A0%E1%83%98%E1%83%A8%E1%83%98.pdf"),
    type: "pdf",
    description: "სასწავლო წლის შესრულებული ნაბიჯების ანგარიში",
  },
  {
    id: "book-selection",
    title: "წიგნების შერჩევა",
    url: schoolAsset("2026%202_22.1%20Selection%20of%20books%20_.pdf"),
    type: "pdf",
    description: "სასწავლო წიგნების შერჩევის დოკუმენტი",
  },
  {
    id: "student-mobility-status",
    title: "მოსწავლის ჩარიცხვის, საფეხურის დაძლევის და მობილობის სტატუსის შეჩერების მექანიზმი",
    url: schoolAsset("6.-%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%AC%E1%83%90%E1%83%95%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A9%E1%83%90%E1%83%A0%E1%83%98%E1%83%AA%E1%83%AE%E1%83%95%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%A4%E1%83%94%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90%E1%83%AB%E1%83%9A%E1%83%94%E1%83%95%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A9%E1%83%94%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%94%E1%83%A5%E1%83%90%E1%83%9C%E1%83%98%E1%83%96%E1%83%9B%E1%83%98.pdf"),
    type: "pdf",
    description: "ჩარიცხვისა და მობილობის წესის მექანიზმი",
  },
  {
    id: "budget-form-2025-2026",
    title: "ბიუჯეტის ფორმა (2025-2026)",
    url: schoolAsset("%E1%83%91%E1%83%98%E1%83%A3%E1%83%AF%E1%83%94%E1%83%A2%E1%83%98%E1%83%A1-%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%90-2025-2026.xlsx"),
    type: "spreadsheet",
    description: "ბიუჯეტის ფორმის Excel დოკუმენტი",
  },
  {
    id: "etaloni-regulation",
    title: "დებულება ეტალონი",
    url: schoolAsset("%E1%83%93%E1%83%94%E1%83%91%E1%83%A3%E1%83%9A%E1%83%94%E1%83%91%E1%83%90%20%E1%83%94%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98.pdf"),
    type: "pdf",
    description: "სკოლის დებულება და ძირითადი წესები",
  },
  {
    id: "legal-rights-protection",
    title: "კანონით უფლებების დაცვა",
    url: schoolAsset("%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98%E1%83%94%E1%83%A0%E1%83%98%20%E1%83%A3%E1%83%A4%E1%83%9A%E1%83%94%E1%83%91%E1%83%94%E1%83%91%E1%83%98%E1%83%A1%20%E1%83%93%E1%83%90%E1%83%AA%E1%83%95%E1%83%90.pdf"),
    type: "pdf",
    description: "უფლებრივი დაცვის დოკუმენტი",
  },
  {
    id: "student-adaptation-rule",
    title: "მოსწავლეთა ადაპტაციის წესი",
    url: schoolAsset("%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%AC%E1%83%90%E1%83%95%E1%83%9A%E1%83%94%E1%83%97%E1%83%90%20%E1%83%90%E1%83%93%E1%83%90%E1%83%9E%E1%83%A2%E1%83%90%E1%83%AA%E1%83%98%E1%83%98%E1%83%A1%20%E1%83%AC%E1%83%94%E1%83%A1%E1%83%98.pdf"),
    type: "pdf",
    description: "მოსწავლეთა ადაპტაციის წესები",
  },
  {
    id: "action-plan-2024-25",
    title: "სამოქმედო გეგმა 2024-25",
    url: schoolAsset("%E1%83%A1%E1%83%90%E1%83%9B%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%94%E1%83%93%E1%83%9D-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%902024-25.pdf"),
    type: "pdf",
    description: "2024-25 წლის სამოქმედო გეგმა",
  },
  {
    id: "action-plan-2025-26",
    title: "სამოქმედო გეგმა 2025-26",
    url: schoolAsset("%E1%83%A1%E1%83%90%E1%83%9B%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%94%E1%83%93%E1%83%9D-%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%902025-26%201.pdf"),
    type: "pdf",
    description: "2025-26 წლის სამოქმედო გეგმა",
  },
  {
    id: "school-curriculum-2025",
    title: "სასკოლო სასწავლო გეგმა (2025)",
    url: schoolAsset("%E1%83%A1%E1%83%90%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%20%E1%83%A1%E1%83%90%E1%83%A1%E1%83%AC%E1%83%90%E1%83%95%E1%83%9A%E1%83%9D%20%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90%20%E1%83%A8%E1%83%9E%E1%83%A1%20%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9A%E1%83%90%20%E1%83%94%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98%20-%202025.pdf"),
    type: "pdf",
    description: "2025 წლის სასკოლო სასწავლო გეგმა",
  },
  {
    id: "strategic-plan",
    title: "სტრატეგიული გეგმა",
    url: schoolAsset("%E1%83%A1%E1%83%A2%E1%83%A0%E1%83%90%E1%83%A2%E1%83%94%E1%83%92%E1%83%98%E1%83%A3%E1%83%9A%E1%83%98%20%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90%20.pdf"),
    type: "pdf",
    description: "სკოლის სტრატეგიული განვითარების გეგმა",
  },
  {
    id: "internal-regulations-appendix-2",
    title: "შინაგანაწესი (დანართი 2)",
    url: schoolAsset("%E1%83%A8%E1%83%98%E1%83%9C%E1%83%90%E1%83%92%E1%83%90%E1%83%9C%E1%83%90%E1%83%AC%E1%83%94%E1%83%A1%E1%83%98-%E1%83%93%E1%83%90%E1%83%9C%E1%83%90%E1%83%A0%E1%83%97%E1%83%982.pdf"),
    type: "pdf",
    description: "შინაგანაწესის დამატებითი დებულებები",
  },
  {
    id: "human-resources-policy",
    title: "ადამიანური რესურსების მართვის პოლიტიკა",
    url: schoolAsset("%E1%83%A8%E1%83%9E%E1%83%A1%20%E1%83%94%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98%20%E1%83%90%E1%83%93%E1%83%90%E1%83%9B%E1%83%98%E1%83%90%E1%83%9C%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A0%E1%83%94%E1%83%A1%E1%83%A3%E1%83%A0%E1%83%A1%E1%83%94%E1%83%91%E1%83%98%E1%83%A1%20%E1%83%9B%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%98%E1%83%A1%20%E1%83%9E%E1%83%9D%E1%83%9A%E1%83%98%E1%83%A2%E1%83%98%E1%83%99%E1%83%90%20%E1%83%93%E1%83%90%E1%83%9C%E1%83%90%E1%83%A0%E1%83%97%E1%83%983%2B.pdf"),
    type: "pdf",
    description: "ადამიანური რესურსების მართვის პოლიტიკა",
  },
]

function InlineDocumentPreview({
  document,
  isOpen,
}: {
  document: SchoolDocument
  isOpen: boolean
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const previewUrl =
    document.type === "spreadsheet"
      ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(document.url)}`
      : `${document.url}#toolbar=0&navpanes=0&view=FitH`

  useEffect(() => {
    if (!isOpen) {
      setIsLoaded(false)
      setHasError(false)
      return
    }

    setIsLoaded(false)
    setHasError(false)
  }, [document.url, isOpen])

  useEffect(() => {
    if (!isOpen || isLoaded || hasError) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setHasError(true)
    }, document.type === "spreadsheet" ? 12000 : 9000)

    return () => window.clearTimeout(timeoutId)
  }, [document.type, hasError, isLoaded, isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="documentation-preview">
      {!hasError ? (
        <iframe
          key={previewUrl}
          src={previewUrl}
          title={document.title}
          className="documentation-preview__frame"
          loading="lazy"
          onLoad={() => {
            setIsLoaded(true)
            setHasError(false)
          }}
          onError={() => {
            setHasError(true)
          }}
        />
      ) : (
        <div className="documentation-preview__fallback">{previewUnavailableMessage}</div>
      )}

      {!isLoaded && !hasError ? (
        <div className="documentation-preview__status" aria-live="polite">
          დოკუმენტი იტვირთება...
        </div>
      ) : null}
    </div>
  )
}

export default function Documentation() {
  const [openDocumentId, setOpenDocumentId] = useState<string | null>(null)

  return (
    <div className="documentation-page">
      <section className="documentation-hero">
        <div className="home-shell documentation-hero__inner">
          <span className="home-eyebrow home-eyebrow--light">დოკუმენტები • პოლიტიკა • გეგმები</span>
          <h1 className="documentation-hero__title">დოკუმენტაცია</h1>
          <p className="documentation-hero__subtitle">
            ყველა ძირითადი სასკოლო დოკუმენტი ხელმისაწვდომია ამავე გვერდზე inline preview ფორმატში, ისე რომ
            გახსნა და ნახვა შესაძლებელი იყოს დამატებითი გადმოწერის გარეშე.
          </p>
        </div>
      </section>

      <section className="home-section documentation-section">
        <div className="documentation-shell documentation-layout">
          <section className="documentation-intro-card">
            <p className="documentation-intro-card__text">
              ჩამონათვალში პირველ ეტაპზე მხოლოდ დოკუმენტების სათაურებია ნაჩვენები. სასურველი ფაილის გახსნისას
              გამოჩნდება დიდი, სრული სიგანის preview არეალი, რომელიც კომფორტულ კითხვას უზრუნველყოფს როგორც
              დესკტოპზე, ისე მობილურზე.
            </p>
          </section>

          <section className="documentation-list" aria-label="სასკოლო დოკუმენტების სია">
            {schoolDocuments.map((document, index) => {
              const isOpen = openDocumentId === document.id

              return (
                <article key={document.id} className={`documentation-card${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="documentation-card__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`document-panel-${document.id}`}
                    onClick={() => {
                      setOpenDocumentId((currentOpenId) => (currentOpenId === document.id ? null : document.id))
                    }}
                  >
                    <span
                      className={`documentation-card__filetype documentation-card__filetype--${document.type}`}
                    >
                      {document.type === "spreadsheet" ? "XLSX" : "PDF"}
                    </span>

                    <span className="documentation-card__heading">
                      <span className="documentation-card__title">
                        {index + 1}. {document.title}
                      </span>
                    </span>

                    <span className="documentation-card__chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>

                  {isOpen ? (
                    <div id={`document-panel-${document.id}`} className="documentation-card__body">
                      <p className="documentation-card__meta">
                        {document.type === "spreadsheet" ? "XLSX inline preview" : "PDF inline preview"} •{" "}
                        {document.description}
                      </p>
                      <InlineDocumentPreview document={document} isOpen={isOpen} />
                    </div>
                  ) : null}
                </article>
              )
            })}
          </section>
        </div>
      </section>
    </div>
  )
}
