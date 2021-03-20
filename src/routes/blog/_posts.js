import fetch from 'node-fetch';
const apiUrl = process.env.mode = "development" ? process.env.SAPPER_DEV_API_URL : process.env.SAPPER_PROD_API_URL;

const status = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

const json = (response) => {
	return response.json()
}

const setData = async (data) => {
	return data;
}

const retrievePosts = async () => {
	let theFetch = fetch(`${apiUrl}posts`)
		.then(status)
		.then(json)
		.then(setData)
		.catch(err => {
			console.warn('something went wrong', err);
		})
	let posts = await setPosts(theFetch);
	return posts;
}

const setPosts = async (promise) => {
	return await Promise.resolve(promise);
}

let posts = setPosts();

console.log(retrievePosts());

export default posts;