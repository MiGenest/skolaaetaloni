import type { NewsItem } from "../types/news"

export default function Card({ title, description }: NewsItem) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      width: "300px"
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}