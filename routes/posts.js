const express = require('express'); // dependencies from npm (package.json)
const PostsController = require('../controllers/PostsController.js'); // dependencies from local (/controllers)

// Initialize our router
const router = express.Router();

// TODO: Add your routes to the route here.
// Get a list of the resource
router.get('/', PostsController.list);

// Rendering form for a new resource
router.get('/new', PostsController.new);

// Get a single resource
router.get('/:id', PostsController.show);

//Edit a resource
router.get('/:id/edit', PostsController.edit);

// Create a new resource
router.post('/', PostsController.create);

//Update a resource
router.put('/:id', PostsController.update);

// Delete a resource
router.delete('/:id', PostsController.remove);

// Hint: Don't for get to export it!
module.exports = router;
