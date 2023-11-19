const fetchUserDataMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Vladimir',
        age: 40,
      });
    }, 1500);
  });
};

export const changeUserAsync = (dispatch) =>
  fetchUserDataMock().then((userDataFromServer) => {
    dispatch({
      type: 'CHANGE_USER',
      payload: userDataFromServer,
    });
  });
