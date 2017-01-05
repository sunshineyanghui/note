function info(state={},action){
  switch (action.type){
    case 'ADD_USERINFO':
      return action.info;
    default:
      return state
  }
}
export default info;
