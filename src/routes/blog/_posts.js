import fetch from 'node-fetch';
const apiUrl = process.env.mode = "development" ? process.env.SAPPER_DEV_API_URL : process.env.SAPPER_PROD_API_URL;
let posts,
		article;

export async function getPosts() {
	const request = await fetch(`${apiUrl}/posts`)
		.then(res => res.text())
		.then(body => posts = body);
	return posts;
}

export async function getSinglePost(slug) {
	const request = await fetch(`${apiUrl}/posts/?slug=${slug}`)
		.then(res => res.text())
		.then(body => article = body);
	return article;
}