import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      borderBottom: "1px solid #eee"
    }}>
      <h2>SkolaEtaloni</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">მთავარი</Link>
        <Link to="/news">სიახლეები</Link>
      </div>
    </nav>
  )
}