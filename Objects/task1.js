const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
];

//В данном массиве будет хранится полная информация пользователя онлайн
const userInfo = []

//В этом массиве будут имена пользователей которые онлайн
const onlineUsers = []

users.forEach((users) => {
  if(users.status === 'online'){
    userInfo.push(users)
    onlineUsers.push(users.username)
  }
})

console.table(userInfo)
console.log(`Сейчас в онлайн следующие пользователи ${onlineUsers.join(', ')}`)

//второе рещение с помощью цикла for

// for(let key of users){
//   if(key.status === 'online'){
//     onlineUsers.push(key.username)
//   }
// }
