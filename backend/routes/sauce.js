const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauce');

//création d'une sauce
router.post('/', auth, multer, sauceCtrl.createSauce);

//modification d'une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);

//suppression d'une sauce selon son id
router.delete('/:id', auth, sauceCtrl.deleteSauce);

//affichage de toutes les sauces
router.get('/', auth, sauceCtrl.getAllSauces);

//affichage d'une sauce selon son id
router.get('/:id', auth, sauceCtrl.getOneSauce);

//fonction like ou dislike d'une sauce
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;