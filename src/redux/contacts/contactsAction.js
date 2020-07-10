import contactsType from "./contactsType";

const addContact = (name, number) => ({
  type: contactsType.ADD_CONTACT,

  payload: {
    contact: {
      id: Date.now(),
      name,
      number,
    },
  },
});

const deleteContact = (idContact) => ({
  type: contactsType.DELETE_CONTACT,

  payload: { id: idContact },
});

// const filterContact = (nameContact) => ({
//   type: contactsType.FILTER_CONTACT,

//   payload: {
//     name: nameContact,
//   },
// });

export default {
  addContact, deleteContact,
  // filterContact
};
