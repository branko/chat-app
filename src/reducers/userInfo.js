const userInfo = (state = {}, action) => {

  switch (action.type) {
    case 'SET_LOCAL_USER':
      console.log("SET LOCAL USER REDUCER: ", action.username)
      return {
        username: action.username,
        id: action.id,
      }
    default:
      return state
  }
}

export default userInfo;
