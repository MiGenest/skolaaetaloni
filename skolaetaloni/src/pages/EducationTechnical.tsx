export default function EducationTechnical() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Technical Department</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">Science, mathematics, and technology</p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-gray-700">
              The Technical department develops critical thinking and problem-solving skills through science and mathematics.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Informatics</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
