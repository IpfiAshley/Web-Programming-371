// data/messageStorage.js

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'messages.json');

function saveMessage(message) {
  try {
    let messages = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      messages = JSON.parse(data);
    }
    messages.push(message);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2), 'utf8');
  } catch (error) {
    console.error('❌ Error saving message:', error.message);
  }
}

function getMessages() {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('❌ Error reading messages:', error.message);
    return [];
  }
}

module.exports = { saveMessage, getMessages };