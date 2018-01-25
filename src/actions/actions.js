/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */
const selectUser = user => {
  console.log("clicked on: ", user.first)
  return {
    type: "USER_SELECTED",
    payload: user
  }
}

export { selectUser }
