angular.module('starter.services', [])

.factory('Contacts', function () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [{
    id: 0,
    name: 'Gereth Bale',
    lastText: 'Real Madrid',
    face: 'img/ben.png',
    describe: 'He is the best player in the world',
    tel: '084-6514787',
    email: 'hah@gmail.com' 
     
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    describe: 'He is the best player in the world',
    tel: '084-6514787',
    email: 'hah@gmail.com'   
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    describe: 'He is the best player in the world',
    tel: '084-6514787',
    email: 'hah@gmail.com'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    describe: 'He is the best player in the world',
    tel: '084-6514787',
    email: 'hah@gmail.com'  
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    describe: 'He is t he best player in the world',
    tel: '084-6514787',
    email: 'hah@gmail.com'   
  }];

  return {
    all: function() {
      return contacts;
    },
    remove: function(contact) {
      contacts.splice(contacts.indexOf(contact), 1);
    },
    get: function(contactId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(contactId)) {
          return contacts[i];
        }
      }
      return null;
    }
  };
});
