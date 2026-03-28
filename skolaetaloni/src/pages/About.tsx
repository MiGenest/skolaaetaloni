export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">სკოლა ეტალონი</h1>
          <p className="text-xl text-blue-50">რეგიონში წამყვანი საშუო სკოლა, რომელიც ხარისხიან სააკადემიო განათლებას ჩვენ</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto w-full px-6 py-12">
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">ჩვენ შესახებ</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              სკოლა ეტალონი დაფუძნებული იყო 2015 წელს, როგორც თანამედროვე სტანდარტების შესაბამი საგანმანათლებლო დაწესებულება. ჩვენი მიზანი არის მოსწავლეების მრავალმხრივი განვითარება აკადემიური ცოდნა, პრაქტიკული უნარები და პირთა განვითარების მეშვეობით. ჩვენ ისწავლებთ ვარსკვლავი თითოეული მოსწავლის სამომავლო ლოკნობისა და მათი ფლობის მეტადას აღმოსკენაშით.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              რეგიონში ჩვენ სკოლა ცნობილი არის მოსწავლეების მაღალი მოსწავლეობის მრავალფაქტო გუნდით დაკ სასწავლო გარემოთე. ჩვენ განვიხილავთ ვარტ სპეციალური ყურადღება თითოეული მოსწავლეს, სახელმწიფო და მატერიალური თანახმა აღმოსკენაშით.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">რატომ აირჩიოს სკოლა ეტალონი</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="text-lg font-semibold mb-3 text-blue-600">👨‍🏫 პროფესიონალი გუნდი</h4>
              <p className="text-gray-700">მოცემული გამოცდილებული და კვალიფიცირებული პედაგოგები, რომელი აქვთ რეგულარული კვლები განათლების უნარ დაპირო ღებითი</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h4 className="text-lg font-semibold mb-3 text-green-600">🎓 თანამედროვე კურიკულუმი</h4>
              <p className="text-gray-700">თამამი დამოდემული სასწავლო პროგრამა, რომელი აკრეფი აკადემიური კოდისა, პრაქტიკული უნარები დაოხელვებიდან</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg border border-purple-100">
              <h4 className="text-lg font-semibold mb-3 text-purple-600">🏫 თანამედროვე დაწესებულება</h4>
              <p className="text-gray-700">აღჭურვილი თანამედროვე პოპულარული ლაბორატორიებით, მედია ცენტრით დატექნოლოგიებით</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-8 text-gray-800">სკოლის უფრო მეტი შესახებ</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <a href="/about/history" className="p-4 bg-white border rounded-lg hover:shadow-lg hover:border-blue-400 transition-all group">
              <p className="font-semibold text-blue-600 group-hover:text-blue-700">📖 ისტორია</p>
              <p className="text-sm text-gray-600 mt-1">სკოლის დაბადება და განვითარება</p>
            </a>
            <a href="/about/mission" className="p-4 bg-white border rounded-lg hover:shadow-lg hover:border-blue-400 transition-all group">
              <p className="font-semibold text-blue-600 group-hover:text-blue-700">🎯 მისია & ხედვა</p>
              <p className="text-sm text-gray-600 mt-1">ჩვენი ღირებულებები და მიზნები</p>
            </a>
            <a href="/about/anthem" className="p-4 bg-white border rounded-lg hover:shadow-lg hover:border-blue-400 transition-all group">
              <p className="font-semibold text-blue-600 group-hover:text-blue-700">🎵 სიმბოლო</p>
              <p className="text-sm text-gray-600 mt-1">სკოლის ჰიმნი და გერბი</p>
            </a>
            <a href="/about/staff" className="p-4 bg-white border rounded-lg hover:shadow-lg hover:border-blue-400 transition-all group">
              <p className="font-semibold text-blue-600 group-hover:text-blue-700">👥 ხელმძღვანელი</p>
              <p className="text-sm text-gray-600 mt-1">სკოლის ადმინისტრაცია</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
