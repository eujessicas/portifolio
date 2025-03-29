const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.saveContact = async (req, res) => {
  try {
    // Salvar no banco de dados
    const contact = await Contact.create(req.body);
    
    // Enviar email (código anterior mantido)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jjessicammayara@gmail.com',
      subject: `Nova mensagem de ${req.body.nome}`,
      html: `<p>${req.body.mensagem}</p>`
    };

    await transporter.sendMail(mailOptions);
    
    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};