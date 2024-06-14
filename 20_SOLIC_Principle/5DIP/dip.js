class UserController {
  constructor(Service) {
    this.service = Service;
  }
  save() {
    this.service.save();
  }
}
class UserService {
  constructor(Repository) {
    this.repository = Repository;
  }
  save() {
    this.repository.save();
  }
}
class UserPG_Repository {
  save() {
    console.log("User Saved in the database");
  }
}

// 2nd fack repo
class UserMongooseRepository {
  save() {
    console.log("User Saved in the mongoos database");
  }
}

// 2nd fack Service
class ModernUserService {
  constructor(Service) {
    this.service = Service;
  }

  save() {
    this.service.save();
  }
}

const userPG_Repository = new UserPG_Repository();
const userMongooseRepository = new UserMongooseRepository();

const service = new UserService(userPG_Repository);
const modrenService = new ModernUserService(userMongooseRepository);

const Controller = new UserController(service);
const userController = new UserController(modrenService);

Controller.save();
userController.save();
