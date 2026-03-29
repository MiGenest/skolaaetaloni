import DepartmentCard from "../components/DepartmentCard"
import { departments } from "../data/mockData"

export default function Education() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">სასწავლო პროცესი</h1>
          <p className="text-xl text-green-50">ინოვაციური და მოსწავლეზე ორიენტირებული აკადემიური შინაარსი</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto w-full px-6 py-12">
        
        {/* OVERVIEW */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">ჩვენი აკადემიური სტრუქტურა</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            სკოლა ეტალონი სთავაზობს ყოვლისმომცველ სასწავლო პროგრამას, რომელიც დაფუძნებულია თანამედროვე До მეთოდოლოგიების და ქვეყნის სამეცნიერო სტანდარტების ზე. ჩვენი სამი მთავარი აკადემიური დეპარტამენტი ზოგადი განათლებას იტოვებს და მეცნიერებას, ხელოვნებას და მრავალმხრივი უნარების განვითარებას.
          </p>
        </section>

        {/* DEPARTMENTS */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">აკადემიური დეპარტამენტები</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                title={dept.title}
                description={dept.description}
                icon={dept.icon}
                link={dept.link}
              />
            ))}
          </div>
        </section>

        {/* KEY FEATURES */}
        <section>
          <h3 className="text-2xl font-bold mb-8 text-gray-800">სახასიათო თვისებები</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">🔬 პრაქტიკული გელი</h4>
              <p className="text-gray-700">უმეტესი სასწავლო პროცესი პრაქტიკული ექსპერიმენტებითა და დემონსტრაციებით, რაც აზრს ხელს უწყობს რეალური მენეჯმენტის გაგებაში</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">💻 ტექნოლოგია</h4>
              <p className="text-gray-700">თანამედროვე ისელის გამოყენება სასწავლო პროცესში, თუმცა ჩვენი იდენტიფიკაციის დეკოდირების მეშვეობით</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">👥 თანამშრომლობა</h4>
              <p className="text-gray-700">კოლაბორაციული სარაც, დისკუსია და პროექტებზე მუშაობა, რაც ზრდის მოსწავლეების გუნდურობის უნარებს</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">📊 შეფასება</h4>
              <p className="text-gray-700">სამთლიანი შეფასების სისტემა, რომელიც განიხილავს აკადემიურ მიღწევებაბძას, მოწყობა და პიროვნებას</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
