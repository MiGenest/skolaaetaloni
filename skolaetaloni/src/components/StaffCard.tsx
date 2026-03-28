interface StaffCardProps {
  name: string
  position: string
  email?: string
  phone?: string
  bio?: string
}

export default function StaffCard({ name, position, email, phone, bio }: StaffCardProps) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-1">{position}</h3>
      <p className="text-gray-700 font-medium mb-3">{name}</p>
      {bio && <p className="text-gray-600 text-sm mb-3">{bio}</p>}
      <div className="space-y-1 text-sm text-gray-600">
        {email && <p>📧 {email}</p>}
        {phone && <p>📞 {phone}</p>}
      </div>
    </div>
  )
}
