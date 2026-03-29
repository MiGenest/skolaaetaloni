export default function AboutMission() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">მისია, ხედვა და ღირებულებები</h1>
          <p className="text-blue-50">სკოლა ეტალონის სტრატეგიული მიმართულება</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">📋 მისია</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            მრავალფეროვანი ფორმალური და არაფორმალური აქტივობებით, იზრუნოს სწავლა-სწავლების ხარისხის მუდმივ განვითარებაზე და თანამედროვე სტანდარტების შესაბამისი განათლების დანერგვაზე, სადაც აკადემიურ ცოდნასთან ერთად, უსაფრთხო გარემოში მოსწავლეთა მრავალმხრივი შესაძლებლობების აღმოჩენა-რეალიზება იქნება პრიორიტეტული.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">🎯 ხედვა</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            სკოლის ხედვაა უახლოეს შვიდ წელიწადში გახდეს რეგიონში წამყვანი და მზარდი საგანმანათლებლო კერა, რომელიც მოსწავლეებს მისცემს საშუალებას ჩამოყალიბდნენ თავისუფალ, მოაზროვნე და კონკურენტუნარიან მოქალაქეებად.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">💎 ღირებულებები</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">თანამშრომლობა</h3>
              <p className="text-gray-700">ერთი გაერთიანებული გუნდის სახით ვმუშაობთ მოსწავლეთა വუნდობის მიღწევაზე</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg border-l-4 border-green-600">
              <h3 className="text-lg font-semibold mb-2 text-green-600">გუნდურობა</h3>
              <p className="text-gray-700">ერთი ჯანი უფრო ძლიერია, ვიდრე ერთი ხელი - ამაში სწამთ ჩვენ</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-lg font-semibold mb-2 text-purple-600">პასუხისმგებლობა</h3>
              <p className="text-gray-700">საკუთარი მოქმედებების, სიტყვების და გადაწყვეტილებების საჭირო მოსამსახურეობა</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-lg font-semibold mb-2 text-orange-600">თანაბარი ხელმისაწვდომობა</h3>
              <p className="text-gray-700">ყველა მოსწავლე უნდა იმყოფებოდეს თანაბარი შესაძლებლობის პირობებში</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
