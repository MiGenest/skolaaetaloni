import StaffCard from "../components/StaffCard"
import { staff } from "../data/mockData"

export default function Administration() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">School Staff</h1>
      <p className="text-gray-600 mb-8">Key personnel in school administration</p>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {staff.map((member) => (
            <StaffCard
              key={member.id}
              name={member.name}
              position={member.position}
              email={member.email}
              phone={member.phone}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
