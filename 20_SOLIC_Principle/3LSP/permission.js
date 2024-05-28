class BaseUser {
  getRole() {
    console.log("getRole");
  }
}

class User extends BaseUser {
  getAccessLevel() {
    console.log("User access level");
  }

  getRole() {
    console.log("User role");
  }
}

class Admin extends User {
  getAccessLevel() {
    console.log("Admin access level");
  }

  getRole() {
    console.log("Admin role");
  }
}

class Moderator extends User {
  getAccessLevel() {
    console.log("Moderator access level");
  }

  getRole() {
    console.log("Moderator role");
  }
}

class Customer extends BaseUser {
  getRole() {
    console.log("Customer role");
  }
}

function getAccessLevel(user) {
  user.getAccessLevel();
}

getAccessLevel(new Moderator());
