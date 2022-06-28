import { validateEmail } from "../validators"

export const initialState = {
  email: {
    isError: false,
    value: "",
  },
  password: {
    isError: false,
    value: "",
  },
  confirmPassword: {
    isError: false,
    value: "",
  },
}

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "email":
      return {
        ...state,
        email: {
          ...payload,
          isError: !validateEmail(payload.value) && payload.value !== "",
        },
      }

    case "password":
      let isMatch = payload.value === state.confirmPassword.value
      return {
        ...state,
        password: payload,
        confirmPassword: {
          ...state.confirmPassword,
          isError: !isMatch,
        },
      }

    case "confirm-password":
      isMatch = payload.value === state.password.value
      return {
        ...state,
        confirmPassword: {
          ...payload,
          isError: !isMatch,
        },
      }
  }
}
