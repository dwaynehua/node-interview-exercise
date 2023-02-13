const express = require('express');
const UserHelper = require('./user.helper');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Yina!!');
});

app.get('/users', (req, res) => {
  // exercise this API by opening the following url in your browser
  // http://localhost:3000/users

  // This api is supposed to return a list of all users from a data source sorted by age.

  /** @todo fix this api. */
  /** @todo write a spec(test) that exposes this bug in user.helper.spec.js */
  
  /** 
   * @todo update this api to allow filtering/limiting the results based on the query params (age, hairColor, name)
   * ie: http://localhost:3000/users?age=3
   *     http://localhost:3000/users?hairColor=black
   *     http://localhost:3000/users?name=Yina
   * 
   * or multiple parameters (results should have all of the params.):
   * 
   *    http://localhost:3000/users?name=Yina&hairColor=black
   * 
   * 
   * to access all query params: req.query
   * to access age query param: req.query.age
   * 
   * for this exercise, make most of your changes inside UserHelper.getSortedUsers().
   * 
   * (you'll need to make some changes to this current function to pass in the query params)
   * 
  */

  /** 
   * @todo The data source is not very reliable and the data has all sorts of different capitalization.
   * what can we do to make everything case insenstive? (without changing the data)
  */

  let users = UserHelper.getSortedUsers();
  res.send(users);
});

/** @todo create a new API that returns the name of the oldest person for each hair color */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
