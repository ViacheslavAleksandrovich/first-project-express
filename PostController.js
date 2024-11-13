import Post from "./Post.js";

class PostController {
  async create(req, res) {
    try {
      const { author, title, content, picture } = req.body;
      const post = await Post.create({ author, title, content, picture });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const post = await Post.find();
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      if (!id) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      if (!post._id) {
        return res.status(404).json({ message: "Post not found" });
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      if (!id) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
