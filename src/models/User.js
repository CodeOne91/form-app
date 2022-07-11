export class User {
  static id;
  static name;
  static email;
  static gender;
  static status;

  static createFrom = (source) => {
    let newUser = new User();
    newUser.id = source["id"];
    newUser.name = source["name"];
    newUser.email = source["email"];
    newUser.gender = source["gender"];
    newUser.status = source["status"];

    return newUser;
  };
}
