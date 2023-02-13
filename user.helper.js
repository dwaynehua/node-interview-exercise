const FakeUserDatabase = require('./fake.user.database');

class UserHelper {

  static getSortedUsers() {
    let users = [...FakeUserDatabase.getData()];

    users.sort((userA, userB) => {
      return userA.attributes.age > userB.attributes.age ? 1 : -1;
    });

    return users;
  }

}

module.exports = UserHelper;
