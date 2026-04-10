import { Link } from "react-router-dom"

export default function Portal() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">მომხმარებლის პორტალი</h1>
      <p className="text-gray-600 mb-8">მოსწავლისა და მშობლის ციფრული სივრცე</p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/portal/student"
            className="p-8 border-2 border-blue-600 rounded-lg hover:shadow-lg hover:bg-blue-50 text-center cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">მოსწავლის პორტალი</h2>
            <p className="text-gray-600">შეფასებები, განრიგი და განცხადებები</p>
          </a>
          <a
            href="/portal/parent"
            className="p-8 border-2 border-green-600 rounded-lg hover:shadow-lg hover:bg-green-50 text-center cursor-pointer"
          >
            <h2 className="text-2xl font-semibold mb-2">მშობლის პორტალი</h2>
            <p className="text-gray-600">ბავშვის პროგრესი და სასკოლო სიახლეები</p>
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/about#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            დაგვიკავშირდით
          </Link>
        </div>
      </div>
    </div>
  )
}
