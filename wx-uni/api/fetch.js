function fetch(){
	
}

fetch.get = async function(url){
		const [error,res] = await uni.request({
			url:url,
			method:"GET"
		})
		return {
			error,res
		}
}

fetch.post = async function(url,params){
	const [error,res] = await uni.request({
		url:url,
		data:params,
		method:"POST"
	})
	
	return {
		error,res
	}
}

fetch.put = async function(url,params){
	const [error,res] = await uni.request({
		url:url,
		data:params,
		method:"PUT"
	})
	
	return {
		error,res
	}
}

fetch.delete = async function(url,params){
	const [error,res] = await uni.request({
		url:url,
		data:params,
		method:"DELETE"
	})
	
	return {
		error,res
	}
}

export default fetch;