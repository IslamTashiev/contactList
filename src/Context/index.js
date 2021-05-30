import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  contactList: [],
};

const reduser = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CONTACT":
      return {
        ...state,
        contactList: action.payload,
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };
    case "DELETE_CONJTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const URL = "http://localhost:8000";
export const contactContext = React.createContext();

export default function ContactContextProvider(props) {
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const fetchContact = async () => {
    const { data } = await axios.get(`${URL}/contacts`);

    dispatch({
      type: "SET_CONTACT",
      payload: data,
    });
  };

  const createContact = async (contact) => {
    const { data } = await axios.post(`${URL}/contacts/`, contact);
    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });
  };
  const deleteContact = async (id) => {
    await axios.delete(`${URL}/contacts/${id}`);

    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  return (
    <contactContext.Provider
      value={{
        contactList: state.contactList,
        createContact,
        fetchContact,
        deleteContact,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
}
