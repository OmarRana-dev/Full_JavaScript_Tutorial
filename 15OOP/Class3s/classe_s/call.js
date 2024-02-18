
// call Object
function SetUserName(username) {
    this.username = username
}

const name2 = new SetUserName("Omar")
console.log(name2)


function createUser(username, email, password) {
    SetUserName.call(this, username)
    this.email = email;
    this.password = password;
}

const newUser = new createUser("john", "john@gmail.com", "helo13#kola")
console.log(newUser)

