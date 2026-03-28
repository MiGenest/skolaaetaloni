export default function AboutHistory() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">School History</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-6">SkolaEtaloni's history and development over the years.</p>
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Founded</h2>
            <p className="text-gray-700">Information about the school's founding...</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Development</h2>
            <p className="text-gray-700">Key milestones in our development...</p>
          </section>
        </div>
      </div>
    </div>
  )
}
