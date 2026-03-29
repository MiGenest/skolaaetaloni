export default function EducationLanguages() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Foreign Languages Department</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">International language programs</p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-gray-700">
              The Languages department prepares students for international communication and cultural understanding.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Languages Offered</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>English</li>
              <li>Russian</li>
              <li>French</li>
              <li>German</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
