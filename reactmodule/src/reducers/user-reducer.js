export const initialUserState = {
  name: 'Василий',
  age: 25,
};

export const userReducer = (state = initialUserState, action) => {
  

  switch (action.type) {
    case 'INCREASE_AGE': {
      return {
        ...state,
        age: state.age + action.payload,
      };
    }

    case 'RESET_AGE': {
      return {
        ...state,
        age: initialUserState.age,
      };
    }

    case 'DECREASE_AGE': {
      return {
        ...state,
        age: state.age + action.payload,
      };
    }

    case 'ADD_PRODUCT': {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case 'CHANGE_USER': {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
};
