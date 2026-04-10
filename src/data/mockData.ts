import { schoolPersonnel } from "./siteInfo"
import { schoolAsset } from "../config/assets"
import type { NewsItem } from "../types/news"

export const news: NewsItem[] = [
  {
    id: 1,
    title: "ჩემპიონატი ღიმფიკა პროექტებში",
    description:
      "სკოლა ეტალონის მოსწავლეები გამარჯვებული გახდნენ რეგიონალური ჩემპიონატში. თქვენი უსაფრთხო ვეტერინარიის პროექტი მოწონებული შეფასების მიერ.",
  },
  {
    id: 2,
    title: "საახალწლო ღონისძიება",
    description:
      "დიდი წარმატების მიმდინარეობა VII-XII კლასების საახალწლო კონკურსმა. გუნდივმა სხვადასხვა ნომინაციებში მიიღო დაჯილდოებები.",
  },
  {
    id: 3,
    title: "ახალი სპორტის პროგრამა",
    description:
      "სკოლამ დაიწყო ახალი საჭადრაკო და ფიზიკური აქტივობების პროგრამა მოსწავლეების განვითარებისთვის.",
  },
]

export interface StaffMember {
  id: number
  name: string
  position: string
  email: string
  phone: string
  bio?: string
}

export const staff: StaffMember[] = [
  {
    id: 1,
    name: schoolPersonnel[0].name,
    position: schoolPersonnel[0].position,
    email: schoolPersonnel[0].email,
    phone: schoolPersonnel[0].phone,
    bio: schoolPersonnel[0].bio,
  },
  {
    id: 2,
    name: schoolPersonnel[1].name,
    position: schoolPersonnel[1].position,
    email: schoolPersonnel[1].email,
    phone: schoolPersonnel[1].phone,
    bio: schoolPersonnel[1].bio,
  },
  {
    id: 3,
    name: schoolPersonnel[2].name,
    position: schoolPersonnel[2].position,
    email: schoolPersonnel[2].email,
    phone: schoolPersonnel[2].phone,
    bio: schoolPersonnel[2].bio,
  },
]

export interface Document {
  id: number
  title: string
  description: string
  fileSize: string
  url: string
}

export const documents: Document[] = [
  {
    id: 1,
    title: "აკადემიური წელი 2024-2025",
    description: "სკოლის სამეცნიერო კალენდარი და განრიგი",
    fileSize: "245 KB",
    url: schoolAsset("2024-2025%20%E1%83%A1%E1%83%90%E1%83%A1%E1%83%AC.%20%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A1%20%E1%83%A1%E1%83%90%E1%83%9B%E1%83%9D%E1%83%A5%E1%83%9B%E1%83%94%E1%83%93%E1%83%9D%20%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%98%E1%83%A1%20%20%20%E1%83%90%E1%83%9C%E1%83%92%E1%83%90%E1%83%A0%E1%83%98%E1%83%A8%E1%83%98.pdf"),
  },
  {
    id: 2,
    title: "მოსწავლეთა წესდებელი",
    description: "მოსწავლეთა უფლებები, ვალდებულებები და პასუხისმგებლობა",
    fileSize: "512 KB",
    url: schoolAsset("6.-%E1%83%9B%E1%83%9D%E1%83%A1%E1%83%AC%E1%83%90%E1%83%95%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A9%E1%83%90%E1%83%A0%E1%83%98%E1%83%AA%E1%83%AE%E1%83%95%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%90%E1%83%A4%E1%83%94%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1-%E1%83%93%E1%83%90%E1%83%AB%E1%83%9A%E1%83%94%E1%83%95%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1-%E1%83%A1%E1%83%A2%E1%83%90%E1%83%A2%E1%83%A3%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%A8%E1%83%94%E1%83%A9%E1%83%94%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%94%E1%83%A5%E1%83%90%E1%83%9C%E1%83%98%E1%83%96%E1%83%9B%E1%83%98.pdf"),
  },
  {
    id: 3,
    title: "მშობლებისთვის ინფორმაცია",
    description: "მშობლების უფლებები, კომუნიკაცია და ჩართვა",
    fileSize: "356 KB",
    url: schoolAsset("%E1%83%99%E1%83%90%E1%83%9C%E1%83%9D%E1%83%9C%E1%83%98%E1%83%94%E1%83%A0%E1%83%98%20%E1%83%A3%E1%83%A4%E1%83%9A%E1%83%94%E1%83%91%E1%83%94%E1%83%91%E1%83%98%E1%83%A1%20%E1%83%93%E1%83%90%E1%83%AA%E1%83%95%E1%83%90.pdf"),
  },
  {
    id: 4,
    title: "აკადემიური სტანდარტები",
    description: "სკოლის აკადემიური მოთხოვნები და შეფასების სისტემა",
    fileSize: "478 KB",
    url: schoolAsset("%E1%83%A1%E1%83%90%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9A%E1%83%9D%20%E1%83%A1%E1%83%90%E1%83%A1%E1%83%AC%E1%83%90%E1%83%95%E1%83%9A%E1%83%9D%20%E1%83%92%E1%83%94%E1%83%92%E1%83%9B%E1%83%90%20%E1%83%A8%E1%83%9E%E1%83%A1%20%E1%83%A1%E1%83%99%E1%83%9D%E1%83%9A%E1%83%90%20%E1%83%94%E1%83%A2%E1%83%90%E1%83%9A%E1%83%9D%E1%83%9C%E1%83%98%20-%202025.pdf"),
  },
]

export interface Department {
  id: number
  title: string
  description: string
  icon: string
  link: string
}

export const departments: Department[] = [
  {
    id: 1,
    title: "ქართული ენა",
    description: "ქართული ენა, ლიტერატურა და კულტურა",
    icon: "📚",
    link: "/education/georgian",
  },
  {
    id: 2,
    title: "მეცნიერება",
    description: "მათემატიკა, ფიზიკა, ქიმია და ბიოლოგია",
    icon: "🔬",
    link: "/education/technical",
  },
  {
    id: 3,
    title: "უცხო ენები",
    description: "ინგლისური, რუსული, ფრანგული და გერმანული",
    icon: "🌍",
    link: "/education/languages",
  },
]

export interface Resource {
  id: number
  title: string
  description: string
  category: string
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "სკოლის ბიბლიოთეკა",
    description: "ციფრული და ფიზიკური წიგნების დიდი კოლექცია",
    category: "ბიბლიოთეკა",
  },
  {
    id: 2,
    title: "აკადემიური პორტალი",
    description: "ონლაინ სწავლების პლატფორმა სამეცნიერო მასალებით",
    category: "ონლაინ",
  },
  {
    id: 3,
    title: "მეცნიერული ლაბორატორია",
    description: "თანამედროვე ლაბორატორიული აღჭურვილობა",
    category: "ლაბ",
  },
  {
    id: 4,
    title: "კომპიუტერული ცენტრი",
    description: "თანამედროვე საოფისე აღჭურვილობა",
    category: "ტექ",
  },
]
