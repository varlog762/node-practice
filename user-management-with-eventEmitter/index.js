const { EventEmitter } = require('events');

class UserManager extends EventEmitter {
  constructor() {
    super();
    this.users = [];
    this.on('userAdded', user => {
      if (user) {
        this.users.push(user);
      }
    });
    this.on('userRemoved', user => {
      if (this.users.includes(user)) {
        this.users = this.users.filter(availableUser => availableUser !== user);

        console.log(`User ${user} is removed!`);
        return;
      }

      console.log(`There isn't user ${user}!`);
    });
  }
}

const userManager = new UserManager();

userManager.emit('userAdded', 'Karl');
userManager.emit('userAdded', 'Kara');
userManager.emit('userAdded', 'Klara');
userManager.emit('userAdded', 'Ukral');
userManager.emit('userAdded', 'Target');
userManager.emit('userAdded', 'Karally');

userManager.emit('userRemoved', 'Target');
