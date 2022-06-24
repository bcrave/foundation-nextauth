export const validateEmail = (email) => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  return pattern.test(email)
}
