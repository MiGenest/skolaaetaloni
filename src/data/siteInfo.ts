export const schoolContact = {
  address: "საქართველო, სიღნაღის მუნიციპალიტეტი, ქ. წნორი, ერეკლე II-ის ქ. №24",
  addressWithPostalCode:
    "საქართველო, სიღნაღის მუნიციპალიტეტი, ქ. წნორი, ერეკლე II-ის ქ. №24 (4216)",
  phones: ["(599) 22 29 90", "(599) 79 11 90"],
  email: "skolaetaloni@gmail.com",
  facebook: "https://www.facebook.com/skolaetaloni",
  category: "კერძო სკოლა (შპს „სკოლა ეტალონი“)",
} as const

export const schoolPersonnel = [
  {
    name: "საშა ლეკიაშვილი",
    position: "დირექტორი",
    phone: schoolContact.phones[0],
    email: schoolContact.email,
    bio: "სკოლის სტრატეგიულ განვითარებასა და საგანმანათლებლო ხარისხზე პასუხისმგებელი.",
  },
  {
    name: "სოსო ლეკიაშვილი",
    position: "ბუღალტერი",
    phone: schoolContact.phones[1],
    email: schoolContact.email,
    bio: "საფინანსო პროცესებისა და ბიუჯეტის მართვის კოორდინატორი.",
  },
  {
    name: "მანანა კაკაშვილი",
    position: "სასწავლო ნაწილი",
    phone: schoolContact.phones[1],
    email: schoolContact.email,
    bio: "ადმინისტრაციული და საოპერაციო პროცესების ორგანიზებაზე პასუხისმგებელი.",
  },
] as const
