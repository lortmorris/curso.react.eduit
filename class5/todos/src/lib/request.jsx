class Request{
	constructor(store){
    this.store = store;
	}

	get(path){
		return fetch(path)
  	.then(response=> {
			return response.json()
    }).then( json=>{
			this.store.dispatch({
        type: 'REQUEST_SUCCESS',
        data: json
      })
		})
		.catch(err=>{
			this.store.dispatch({
				type: 'REQUEST_ERROR',
				data: err
			})
		})
	}

	put(path, data={}){
		return fetch(path, {
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
	}

	patch(path, data={}){
		return fetch(path, {
			method: 'PATCH',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
	}

}

export default Request;
