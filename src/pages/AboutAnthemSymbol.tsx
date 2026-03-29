export default function AboutAnthemSymbol() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Anthem & Symbol</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">School Anthem</h2>
          <p className="text-gray-600 mb-4">Our school's official anthem</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 whitespace-pre-line">Anthem lyrics and description...</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">School Symbol</h2>
          <p className="text-gray-600 mb-4">Meaning and significance of our school emblem</p>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <p className="text-gray-700">School symbol description...</p>
          </div>
        </section>
      </div>
    </div>
  )
}
