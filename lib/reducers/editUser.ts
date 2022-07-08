import { validateEmail } from "../validators"

export const initialState = {
  name: {
    isError: false,
    value: "",
  },
  email: {
    isError: false,
    value: "",
  },
  phone: {
    isError: false,
    value: "",
  },
}

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "name":
      return {
        ...state,
        name: payload,
      }
    case "email":
      return {
        ...state,
        email: {
          ...payload,
          isError: !validateEmail(payload.value) && payload.value !== "",
        },
      }
    case "phone":
      return {
        ...state,
        phone: payload,
      }
  }
}
