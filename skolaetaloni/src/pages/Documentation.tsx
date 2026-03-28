import DocumentCard from "../components/DocumentCard"
import { documents } from "../data/mockData"

export default function Documentation() {
  const handleDownload = (url: string) => {
    console.log("Downloading:", url)
    // In production, this would trigger actual download
  }

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">დოკუმენტაცია</h1>
          <p className="text-xl text-purple-50">აკადემიური დოკუმენტები, ფორმები და პოლიტიკა</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto w-full px-6 py-12">
        
        {/* DESCRIPTION */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            ქვემოთ მოთავსებულია ყველა აუცილებელი სასკოლო დოკუმენტი, მათ შორის აკადემიური კალენდარი, მოსწავლეთა წესდებელი, მშობლების ინფორმაცია და აკადემიური სტანდარტები. თითოეული დოკუმენტი PDF ფორმატში ხელმისაწვდომია.
          </p>
        </section>

        {/* DOCUMENTS GRID */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">სხვადსხვა დოკუმენტი</h2>
          <div className="space-y-4">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                description={doc.description}
                fileSize={doc.fileSize}
                onDownload={() => handleDownload(doc.url)}
              />
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">დოკუმენტის კატეგორიები</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">📋 აკადემიური</h3>
              <p className="text-gray-700">განრიგი, სტანდარტები და აკადემიური პოლიტიკა</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-green-600">👥 მოსწავლე</h3>
              <p className="text-gray-700">მოსწავლეთა წესდებელი და უფლებები</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-orange-600">👨‍👩‍👧 მშობელი</h3>
              <p className="text-gray-700">მშობლების ინფორმაცია და კომუნიკაცია</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
