export default function Portal() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">User Portal</h1>
      <p className="text-gray-600 mb-8">Access student and parent sections</p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/portal/student"
            className="p-8 border-2 border-blue-600 rounded-lg hover:shadow-lg hover:bg-blue-50 text-center cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">Student Portal</h2>
            <p className="text-gray-600">Grades, schedule, and announcements</p>
          </a>
          <a
            href="/portal/parent"
            className="p-8 border-2 border-green-600 rounded-lg hover:shadow-lg hover:bg-green-50 text-center cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">Parent Portal</h2>
            <p className="text-gray-600">Child's progress and school updates</p>
          </a>
        </div>
      </div>
    </div>
  )
}
