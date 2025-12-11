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
  if (contacts.length === 0) return 1;
  const lastIndex = contacts.length - 1;
  const lastContact = contacts[lastIndex];
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

// SEARCH CONTACT (improved)
function searchContacts(keyword) {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.email.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.location.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.phone.toString().includes(keyword)
  );

  if (filteredContacts.length === 0) {
    console.log(`🔍 No contact found for keyword: ${keyword}`);
    return;
  }

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

// DELETE CONTACT
function deleteContact(id) {
  const index = contacts.findIndex((c) => c.id === id);

  if (index === -1) {
    console.log(`❌ Contact with ID ${id} not found.`);
    return;
  }

  contacts.splice(index, 1);
  console.log(`🗑 Contact with ID ${id} has been deleted.`);
}

// UPDATE CONTACT
function updateContact(id, newData) {
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    console.log(`❌ Contact with ID ${id} not found.`);
    return;
  }

  contact.name = newData.name ?? contact.name;
  contact.phone = newData.phone ?? contact.phone;
  contact.email = newData.email ?? contact.email;
  contact.location = newData.location ?? contact.location;

  console.log(`✏️ Contact with ID ${id} updated successfully.`);
}

// TESTING
addContact("Baskara Putra", 6281234567890, "baskara@gmail.com", "Jakarta");
addContact("Baskara Putra", 6281234567890, "baskara@gmail.com", "Jakarta");

console.log("🔍 Searching:");
searchContacts("Baskara");

console.log("✏️ Updating ID 1:");
updateContact(1, { name: "Lesya SP", location: "Depok" });

console.log("🗑 Deleting ID 2:");
deleteContact(2);

console.log("📋 Display All Contacts:");
displayContacts();
