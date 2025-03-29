const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, informe o nome'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Por favor, informe o email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor, informe um email válido'
    ]
  },
  phone: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Por favor, escreva sua mensagem']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  responded: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Contact', ContactSchema);