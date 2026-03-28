export default function AboutAdministration() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">School Administration</h1>
      <p className="text-gray-600 mb-8">Leadership team</p>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Director</h3>
            <p className="text-gray-600">Director information...</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Deputy Director</h3>
            <p className="text-gray-600">Deputy information...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
