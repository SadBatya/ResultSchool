const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

//метод try catch 

// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// getTodosByIds([43, 21, 55, 100, 10]);

const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests)
    const result = await Promise.all(responses.map(data => data.json()))
    console.log(result)
  } catch (error) {
    console.error(error);
  }
}
getTodosByIds([43, 21, 55, 100, 10]);
