import fetch from 'node-fetch';
const apiUrl = process.env.mode = "development" ? process.env.SAPPER_DEV_API_URL : process.env.SAPPER_PROD_API_URL;
let posts;

export async function getPosts() {
	const request = await fetch(`${apiUrl}/posts`)
		.then(res => res.text())
		.then(body => posts = body);
	return posts;
}