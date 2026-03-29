import type { NewsItem } from "../types/news"

export const news: NewsItem[] = [
  {
    id: 1,
    title: "ჩემპიონატი ღიმფიკა პროექტებში",
    description: "სკოლა ეტალონის მოსწავლეები გამარჯვებული გახდნენ რეგიონალური ჩემპიონატში. თქვენი უსაფრთხო ვეტერინარიის პროექტი მოწონებული შეფასების მიერ.",
  },
  {
    id: 2,
    title: "საახალწლო ღონისძიება",
    description: "დიდი წარმატების მიმდინარეობა VII-XII კლასების საახალწლო კონკურსმა. გუნდივმა სხვადსხვა ნომინაციებში მიიღო დაჟილდოვებები.",
  },
  {
    id: 3,
    title: "ახალი სპორტის პროგრამა",
    description: "სკოლამ დაიწყო ახალი საჭადრაკო და ფიზიკალური აქტივობების პროგრამა მოსწავლეების განვითარებისთვის.",
  }
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
    name: "სახელი გვარი",
    position: "დირექტორი",
    email: "director@etaloni2015.ge",
    phone: "+995 XX XXX XX XX",
    bio: "განათლების სპეციალისტი 20+ წლის გამოცდილებით"
  },
  {
    id: 2,
    name: "სახელი გვარი",
    position: "მოადგილე დირექტორი",
    email: "deputy@etaloni2015.ge",
    phone: "+995 XX XXX XX XX",
    bio: "აკადემიური საქმياনობის ხელმძღვანელი"
  },
  {
    id: 3,
    name: "სახელი გვარი",
    position: "ფსიქოლოგი",
    email: "psychologist@etaloni2015.ge",
    phone: "+995 XX XXX XX XX",
    bio: "მოსწავლეთა ფსიქოლოგიური რჩევა-დახმარება"
  },
  {
    id: 4,
    name: "სახელი გვარი",
    position: "ედუკაციული ქოორდინატორი",
    email: "coordinator@etaloni2015.ge",
    phone: "+995 XX XXX XX XX",
    bio: "სამეცნიერო აქტივობების ორგანიზატორი"
  }
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
    url: "/documents/schedule.pdf"
  },
  {
    id: 2,
    title: "მოსწავლეთა წესდებელი",
    description: "მოსწავლეთა უფლებები, ვალდებულებები და პასუხისმგებლობა",
    fileSize: "512 KB",
    url: "/documents/handbook.pdf"
  },
  {
    id: 3,
    title: "მშობლებისთვის ინფორმაცია",
    description: "მშობლების უფლებები, კომუნიკაცია და ჩართვა",
    fileSize: "356 KB",
    url: "/documents/parent-info.pdf"
  },
  {
    id: 4,
    title: "აკადემიური სტანდარტები",
    description: "სკოლის აკადემიური მოთხოვნები და შეფასების სისტემა",
    fileSize: "478 KB",
    url: "/documents/standards.pdf"
  }
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
    link: "/education/georgian"
  },
  {
    id: 2,
    title: "მეცნიერება",
    description: "მათემატიკა, ფიზიკა, ქიმია და ბიოლოგია",
    icon: "🔬",
    link: "/education/technical"
  },
  {
    id: 3,
    title: "უცხო ენები",
    description: "ინგლისური, რუსული, ფრანგული და გერმანული",
    icon: "🌍",
    link: "/education/languages"
  }
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
    category: "ბიბლიოთეკა"
  },
  {
    id: 2,
    title: "აკადემიური პორტალი",
    description: "ონლაინ სწავლების პლატფორმა სამეცნიერო მასალებით",
    category: "ონლაინ"
  },
  {
    id: 3,
    title: "მეცნიერული ლაბორატორია",
    description: "თანამედროვე ლაბორატორიული აღჭურვილობა",
    category: "ლაბ"
  },
  {
    id: 4,
    title: "კომპიუტერული ცენტრი",
    description: "თანამედროვე საოფისე აღჭურვილობა",
    category: "ტექ"
  }
]