const contacts = [
  {
    id: 1,
    name: "Lesya Salsabilla Putri",
    phone: 62881080070700,
    email: "lesyabilla81@gmail.com",
    location: "Jakarta",
  },
  {
    id: 2,
    name: "Zhidane Fachri Ramadhan",
    phone: 62881080080800,
    email: "zhidane28@gmail.com",
    location: "Bandung",
  },
];

function displayContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(contact);
  }
}

displayContacts();
