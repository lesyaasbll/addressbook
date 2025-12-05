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

// DISPLAY CONTACT
function displayContacts() {
  for (const contact of contacts) {
    console.log(`
      🆔 : ${contact.id}
      🧑‍🦱 : ${contact.name}
      📱 : ${contact.phone}
      📍 : ${contact.location}
      ✉️ : ${contact.email}
    `);
  }
}

// AUTO ID
function getLastId() {
  // STEP 1: CEK APAKAH DATACONTACTS KOSONG?
  if (contacts.length === 0) return 1;

  // STEP 2: CARI INDEX (URUTAN) BARANG PALING TERAKHIR
  const lastIndex = contacts.length - 1;

  //STEP 3: AMBIL OBJECT KONTAK YANG PALING TERAKHIR
  const lastContact = contacts[lastIndex];

  //STEP 4: AMBIL ID-NYA, LALU TAMBAH 1
  return lastContact.id + 1;
}

// ADD CONTACT
function addContact(name, phone, email, location) {
  contacts.push({
    id: getLastId(),
    name: name,
    phone: phone,
    email: email,
    location: location,
  });
}

// SEARCH CONTACT
function searchContacts(keyword) {
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() === keyword.toLowerCase()
  );

  for (const contact of filteredContacts) {
    console.log(`
      🆔 : ${contact.id}
      🧑‍🦱 : ${contact.name}
      📱 : ${contact.phone}
      📍 : ${contact.location}
      ✉️ : ${contact.email}
    `);
  }
}

function deleteContact() {
  // TODO
}

function updateContact() {
  // TODO
}

// TESTING
addContact("Baskara Putra", 6281234567890, "baskara@gmail.com", "Jakarta");
addContact("Baskara Putra", 6281234567890, "baskara@gmail.com", "Jakarta");
// displayContacts();
searchContacts("Baskara Putra");
