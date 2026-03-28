import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './layout/NavBar'
import Footer from './layout/Footer'
import Home from './pages/home'
import About from './pages/About'
import AboutHistory from './pages/AboutHistory'
import AboutMission from './pages/AboutMission'
import AboutAnthemSymbol from './pages/AboutAnthemSymbol'
import AboutAdministration from './pages/AboutAdministration'
import Administration from './pages/Administration'
import Education from './pages/Education'
import EducationGeorgian from './pages/EducationGeorgian'
import EducationTechnical from './pages/EducationTechnical'
import EducationLanguages from './pages/EducationLanguages'
import Documentation from './pages/Documentation'
import Resources from './pages/Resources'
import Portal from './pages/Portal'
import StudentPortal from './pages/StudentPortal'
import ParentPortal from './pages/ParentPortal'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/mission" element={<AboutMission />} />
          <Route path="/about/anthem" element={<AboutAnthemSymbol />} />
          <Route path="/about/staff" element={<AboutAdministration />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/georgian" element={<EducationGeorgian />} />
          <Route path="/education/technical" element={<EducationTechnical />} />
          <Route path="/education/languages" element={<EducationLanguages />} />
          <Route path="/documents" element={<Documentation />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/portal/student" element={<StudentPortal />} />
          <Route path="/portal/parent" element={<ParentPortal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
