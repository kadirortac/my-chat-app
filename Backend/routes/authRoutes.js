const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Kullanıcı modelini oluştur
const User = require('../models/User');

// Kullanıcı kayıt işlemini gerçekleştiren route
router.post('/signup', async (req, res) => {
  try {
    // İstekten gelen kullanıcı bilgilerini al
    const { fullName, email, password } = req.body;

    // Kullanıcı adı veya e-posta adresi veritabanında mevcut mu diye kontrol et
    const existingUser = await User.findOne({ $or: [{ fullName }, { email }] });
    
    // Eğer kullanıcı zaten mevcutsa hata döndür
    if (existingUser) {
      return res.status(400).json({ message: 'Bu kullanıcı zaten mevcut' });
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluştur
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    // Kullanıcıyı veritabanına kaydet
    await newUser.save();

    // Kullanıcı oluşturulduğunda geriye token döndür
    const token = jwt.sign({ fullName, email }, 'secret_key');
    
    // Başarı durumunu ve token'i yanıt olarak gönder
    res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

module.exports = router;
