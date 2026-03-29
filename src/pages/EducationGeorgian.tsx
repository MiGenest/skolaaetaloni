export default function EducationGeorgian() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Georgian Department</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">Native language and literature instruction</p>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Program Overview</h2>
            <p className="text-gray-700">
              The Georgian department focuses on language development, literature analysis, and cultural studies.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Grammar and syntax</li>
              <li>Literature analysis</li>
              <li>Writing skills</li>
              <li>Cultural heritage</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
