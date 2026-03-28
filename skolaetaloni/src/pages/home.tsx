import Card from "../components/Card"
import { news } from "../data/mockData"

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {news.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  )
}