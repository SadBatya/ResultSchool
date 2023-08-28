async function load(url){
  try {
    let response = await fetch(url)
    if(response.status === 200){
      return response.json()
    }else{
      throw new Error(response.status)
    }
  } catch (error) {
    console.log(error)
  }
}

load('no-such-user.json')