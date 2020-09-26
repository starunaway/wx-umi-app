
'use strict';

const db = uniCloud.database()

exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	const collection = db.collection("user")
	
	let res = await collection.add({
		name:"uni-clould"
		})
	console.log('event : ', event,JSON.stringify(res))
	
	//返回数据给客户端
	return event
};
