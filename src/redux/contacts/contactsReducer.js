import { combineReducers } from "redux";
import contactsType from "./contactsType";

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case contactsType.ADD_CONTACT:
      return [...state, action.payload.contact];

    case contactsType.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);

    case contactsType.FILTER_CONTACT:
      return state.map((contact) =>
        contact.name === action.payload.name
          ? { name: action.payload.name }
          : contact
      );

    default:
      return state;
  }
};

export default combineReducers({ contactReducer: contactReducer });
