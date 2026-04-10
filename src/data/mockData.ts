import { schoolPersonnel } from "./siteInfo"
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
    url: "/documents/schedule.pdf",
  },
  {
    id: 2,
    title: "მოსწავლეთა წესდებელი",
    description: "მოსწავლეთა უფლებები, ვალდებულებები და პასუხისმგებლობა",
    fileSize: "512 KB",
    url: "/documents/handbook.pdf",
  },
  {
    id: 3,
    title: "მშობლებისთვის ინფორმაცია",
    description: "მშობლების უფლებები, კომუნიკაცია და ჩართვა",
    fileSize: "356 KB",
    url: "/documents/parent-info.pdf",
  },
  {
    id: 4,
    title: "აკადემიური სტანდარტები",
    description: "სკოლის აკადემიური მოთხოვნები და შეფასების სისტემა",
    fileSize: "478 KB",
    url: "/documents/standards.pdf",
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
