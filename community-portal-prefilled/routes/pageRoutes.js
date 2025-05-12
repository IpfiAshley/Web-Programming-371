// routes/pageRoutes.js

const express = require('express');
const router = express.Router();
const events = require('../data/event');
const team = require('../data/team');
const {saveMessage} = require('../data/messageStorage');


router.get('/', (req, res) => {
    res.render('home')
});

router.get('/about', (req, res) => {
    res.render('about', {team});
});

router.get('/events', (req, res) => {
    res.render('events', {events});
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact', (req, res) => {
    const {name, email, message} = req.body;
    const newMessage = { name, email, message, submittedAt: new Date().toISOString()};
    saveMessage(newMessage);
    res.redirect('/thankyou')
});

router.get('/thankyou', (req, res) => {
  res.render('thankyou');
});

module.exports = router;
