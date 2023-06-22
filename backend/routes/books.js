// Import des modules (voir "app.js" pour signification)
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Import du controlleur
const booksCtrl = require('../controllers/books');

// Créer un livre
router.post('/', auth, multer, booksCtrl.createBook);

// Modifier un livre
router.put('/:id', auth, multer, booksCtrl.modifyBook);

// Supprimer un livre
router.delete('/:id', auth, booksCtrl.deleteBook);

// Obtenir le livre avec la meilleure note
router.get('/bestrating', booksCtrl.getBestRating);

// Obtenir un livre spécifique
router.get('/:id', booksCtrl.getOneBook);

// Obtenir tous les livres
router.get('/', booksCtrl.getAllBooks);

module.exports = router;