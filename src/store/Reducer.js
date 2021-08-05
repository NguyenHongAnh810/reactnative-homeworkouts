const initialState = {
    count : 0
  }
  
  
  const myReducer = (state = initialState, action) => {
    if (action.type === 'UP') {
        // let newState = {...state}
        initialState.count= initialState.count+1;
        return initialState.count;
    }
    if (action.type === 'DOWN') {
        // let newState = {...state}
        initialState.count= initialState.count-1;
        return initialState.count;
    }
        return state;
}

export {myReducer}