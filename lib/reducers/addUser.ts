import { validateEmail } from "../validators"

export const initialState = {
  role: {
    isError: false,
    input: "User",
  },
  organization: {
    isError: false,
    input: "",
  },
  firstName: {
    isError: false,
    input: "",
  },
  lastName: {
    isError: false,
    input: "",
  },
  email: {
    isError: false,
    input: "",
  },
  phoneNumber: {
    isError: false,
    input: "",
  },
  password: {
    isError: false,
    input: "",
  },
  confirmPassword: {
    isError: false,
    input: "",
  },
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "role":
      return {
        ...state,
        role: payload,
      }

    case "organization":
      return {
        ...state,
        organization: payload,
      }

    case "first-name":
      return {
        ...state,
        firstName: payload,
      }

    case "last-name":
      return {
        ...state,
        lastName: payload,
      }

    case "email":
      return {
        ...state,
        email: {
          ...payload,
          isError: !validateEmail(payload.input) && payload.input !== "",
        },
      }

    case "phone":
      return {
        ...state,
        phoneNumber: payload,
      }

    case "password":
      let isMatch = payload.input === state.confirmPassword.input
      return {
        ...state,
        password: payload,
        confirmPassword: {
          ...state.confirmPassword,
          isError: !isMatch,
        },
      }

    case "confirm-password":
      isMatch = payload.input === state.password.input
      return {
        ...state,
        confirmPassword: {
          ...payload,
          isError: !isMatch,
        },
      }
  }
}
