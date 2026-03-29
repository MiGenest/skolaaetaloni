import type { NewsItem } from "../types/news"

export default function Card({ title, description }: NewsItem) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-80 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}