class Request{
	constructor(){
	}

	get(path){
		return fetch(path)
		.then(response => response.json());
	}

	put(path, data={}){
		return fetch(path, {
			method: 'PUT',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
    .then(response => response.json());
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
