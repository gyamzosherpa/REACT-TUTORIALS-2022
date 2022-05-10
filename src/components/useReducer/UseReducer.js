// useReducer is an alternative to useState.
// if we have too many state to execute,
// we can use useReducer to avoid too many useState

import { Box, Button } from '@mui/material';
import React, { useReducer } from 'react';

// states
const initialValue = {
  count: 0,
  showText: true,
};

// state:(variable) current state that we are managing, action:"what action we are applying on state"
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };

    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };

    default:
      return state;
  }
};

const UseReducer = () => {
  // state => variable, dispatch => it is a function, which is used to change state value.
  // reducer => manage, what happens when we change our state , count:0 and showText:true are initial value

  const [state, dispatch] = useReducer(reducer, initialValue); //(reducer, {count:0, showText:true})
  return (
    <div>
      <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
        <h1>{state.count}</h1>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            dispatch({ type: 'INCREMENT' });
            dispatch({ type: 'toggleShowText' });
          }}
        >
          Click Here
        </Button>

        {state.showText && <p>This is a text</p>}
      </Box>
    </div>
  );
};

export default UseReducer;
