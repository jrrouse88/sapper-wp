import { getSinglePost } from './_posts';

export async function get(req, res) {
  try {
    const result = await getSinglePost(req.params.slug);
    res.end(result);
  } catch(e) {
    console.error('[slug].json.js get:', e);
    res.status(500).json({ error: e.message })
  }
}
