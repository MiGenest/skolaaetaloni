export default function Resources() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <p className="text-gray-600 mb-8">Library, useful links, and educational projects</p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Library & Media Center</h3>
            <p className="text-gray-600">Access to books and digital resources</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Useful Links</h3>
            <p className="text-gray-600">Educational websites and tools</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg">
            <h3 className="font-semibold text-lg mb-2">Projects</h3>
            <p className="text-gray-600">Student and school projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}
