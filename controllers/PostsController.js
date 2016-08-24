// TODO: Add your controller logic here.
// Require our dependencies
const PostModel = require('../models/PostModel.js'); // dependencies from local (/models)

module.exports = {
  list(req, res, next) {
    PostModel.find((err, posts) => {
      if (err) {
        return next(err);
      }
      res.render('posts', { posts });
    });
  },

  new(req, res, next) {
    res.render('post_form', { post: '' });
  },

  show(req, res, next) {
    PostModel.findOne({_id: req.params.id}, (err, post) => {
      if (err) {
        return next(err);
      }
      res.render('post', { post });
    });
  },

  create(req, res, next) {

    const { author, date, text } = req.body;
    const model = new PostModel({
      author : author,
      date : date,
      text : text
    });

    model.save((err, post) => {
        console.log('Error: ', err)
        res.redirect('/posts');
    });
  },

  edit(req, res, next) {
    PostModel.findOne({_id: req.params.id}, (err, post) => {
      if (err) {
        return next(err);
      }
      res.render('post_form', { post });
    });
  },

  update(req, res, next) {
    PostModel.findOne({_id: req.params.id}, (err, post) => {
      if (err) {
        return next(err);
      }
      post.author = req.body.author;
      post.date = req.body.date;
      post.text = req.body.text;

      post.save((err, post) => {
          console.log('Error: ', err)
          res.redirect('/posts');
      });
    });
  },

  remove(req, res, next) {
    PostModel.findByIdAndRemove({_id: req.params.id}, (err, post) => {
      if (err) {
        return next(err);
      }
      res.redirect('/posts');
    });
  }
};
