const express = require('express');
const {
  saveContact,
  getContacts
} = require('../controllers/contactController');

const router = express.Router();

router.route('/')
  .post(saveContact)
  .get(getContacts);

module.exports = router;