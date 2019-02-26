export function fetchUsers(){
    return function(dispatch) {
        console.log(this)
      return fetch('http://jsonplaceholder.typicode.com/users', {
        headers: {
          'Content-Type': 'json',
          'Accept': 'json'
        }
      }) 
      .then(response => response.json())
      .then(users => dispatch({type: 'FETCH_USERS', users}))
      .catch((error) => console.log(error))
    }
  }

  