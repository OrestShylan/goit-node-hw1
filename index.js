const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContacts = await removeContact(id);
      console.log(removeContacts);
      break;

    // case "update":
    //   const updateContatc = await contacts.updateById(id, name, email, phone);
    //   console.log(updateContatc);
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "vza2RIzNGIwutCVCs4mCL" });
// invokeAction({
//   action: "add",
//   name: "France Kafffffffka",
//   email: "kafkakvakva@mail.com",
//   phone: "(228) 216-2355",
// });

// invokeAction({ action: "remove", id: "cdbHy0HRCDSswwaPKH6DU" });
