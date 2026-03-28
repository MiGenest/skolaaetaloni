import { news } from "../data/mockData"

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4 leading-tight">სკოლა ეტალონი</h1>
          <p className="text-2xl mb-10 text-green-50 font-light">
            რეგიონის წამყვანი სკოლა, სადაც ეზენ გამოცდილება და განვითარება
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-green-800 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            დაიწყე ისწავლე →
          </button>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">ჩვენ შესახებ</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            სკოლა ეტალონი დაფუძნებული იყო 2015 წელს, როგორც თანამედროვე სტანდარტების შესაბამი საგანმანათლებლო დაწესებულება. ჩვენი მიზანი არის მოსწავლეების მრავალმხრივი განვითარება აკადემიური ცოდნა, პრაქტიკული უნარები და პირთა განვითარების მეშვეობით.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            რეგიონში ჩვენ სკოლა ცნობილი არის მოსწავლეების მაღალი აკადემიური დაკმაყოფილების გამო, საეჭვო გუნდითა სასწავლო გარემოთე. ჩვენ განვიხილავთ სპეციალური ყურადღება თითოეული მოსწავლეს, საკუთარი გარემოს ზეწოთე აღმოსკენაშით.
          </p>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">ბოლო სიახლეები</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-green-700 to-yellow-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-green-700 to-yellow-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <a href="#" className="inline-block text-green-700 font-semibold hover:text-green-800 transition-colors">წაიკითხე მეტი →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">რატომ აირჩიოს სკოლა ეტალონი</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3">მაღალი სტანდარტი</h3>
              <p className="text-green-50">აკადემიური მიღწევებით ხარისხის განათლების საფუძველი</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold mb-3">ექსპერტი პედაგოგები</h3>
              <p className="text-green-50">გამოცდილებული და კვალიფიცირებული სწავლობის ჯგუფი</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-3">სრული განვითარება</h3>
              <p className="text-green-50">აკადემიური და პირული უნარების გამუშავება თავად დროს</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION PREVIEW */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">ჩვენი მისია და ხედვა</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-gradient-to-br from-green-50 to-white rounded-xl border-l-4 border-green-700 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4 text-green-700">🎯 მისია</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                მრავალფეროვანი ფორმალური და არაფორმალური აქტივობებით, იზრუნოს სწავლა-სწავლების ხარისხის მუდმივ განვითარებაზე და თანამედროვე სტანდარტების შესაბამისი განათლების დანერგვაზე.
              </p>
            </div>
            <div className="p-10 bg-gradient-to-br from-yellow-50 to-white rounded-xl border-l-4 border-yellow-500 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-4 text-yellow-700">👁️ ხედვა</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                რეგიონის წამყვანი სკოლა, რომელიც მოსწავლეებს უმჯობესი აკადემიური განათლებასთან ერთად უთავაზობს ყოვლისმხრივ განვითარების შემოწმებებს.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">ჩვენი ღირებულებები</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">თანამშრომლობა</p>
              <p className="text-gray-600 text-sm">ერთად მუშაობით უფრო მშვენიერი ფলებები ვხორბთ</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">გუნდურობა</p>
              <p className="text-gray-600 text-sm">ერთი ჯანი უფრო ძლიერია, ვიდრე ერთი ხელი</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">პასუხისმგებლობა</p>
              <p className="text-gray-600 text-sm">საკუთარი მოქმედებებზე პასუხის გაცემა</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg font-semibold text-blue-600 mb-2">თანაბარი ხელმისაწვდომობა</p>
              <p className="text-gray-600 text-sm">ყველამ უნდა მიუწვდებოდეს განათლება ერთი სახელმწიფო</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}