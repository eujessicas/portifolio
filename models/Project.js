const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Por favor, informe o título do projeto'],
    trim: true,
    maxlength: [100, 'O título não pode ter mais que 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'Por favor, informe a descrição']
  },
  imageUrl: {
    type: String,
    required: [true, 'Por favor, informe a URL da imagem']
  },
  projectUrl: {
    type: String,
    required: [true, 'Por favor, informe a URL do projeto']
  },
  tags: {
    type: [String],
    required: true,
    enum: [
      'HTML/CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Full Stack',
      'Mobile',
      'Outros'
    ]
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);