export default function ParentPortal() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Parent Portal</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 border rounded-lg bg-blue-50">
            <h3 className="font-semibold text-lg mb-2">Child's Progress</h3>
            <p className="text-gray-600">Monitor grades</p>
          </div>
          <div className="p-6 border rounded-lg bg-green-50">
            <h3 className="font-semibold text-lg mb-2">Announcements</h3>
            <p className="text-gray-600">School updates</p>
          </div>
          <div className="p-6 border rounded-lg bg-purple-50">
            <h3 className="font-semibold text-lg mb-2">Contact Form</h3>
            <p className="text-gray-600">Message teachers</p>
          </div>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Welcome Parents</h2>
          <p className="text-gray-700">Parent portal content coming soon...</p>
        </div>
      </div>
    </div>
  )
}
