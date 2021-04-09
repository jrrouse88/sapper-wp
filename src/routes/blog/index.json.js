import {getPosts} from './_posts.js';

export async function get(req, res) {
	try {
		const result = await getPosts();
		// console.log(result);
		res.end(result);
	} catch(e) {
		console.error('index.json.js get:', e);
		res.status(500).json({error: e.message})
	}
}
// let posts = [];
// const contents = JSON.stringify(posts.map(post => {
// 	return {
// 		title: post.title,
// 		slug: post.slug
// 	};
// }));

// let contents = [];

// export function get(req, res) {
// 	res.writeHead(200, {
// 		'Content-Type': 'application/json'
// 	});

// 	res.end(contents);
// }