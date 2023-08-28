var name = 'Vova'
const obj = {
  name: 'Wolter White',
  sayMyName: () => {
    console.log(this.name)
  }
}

obj.sayMyName()