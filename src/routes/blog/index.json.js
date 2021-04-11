import {getPosts} from './_posts.js';

export async function get(req, res) {
	try {
		const result = await getPosts();
		res.end(result);
	} catch(e) {
		console.error('index.json.js get:', e);
		res.status(500).json({error: e.message})
	}
}
