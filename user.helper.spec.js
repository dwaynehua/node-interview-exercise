const { expect } = require('chai');
const Sinon = require('sinon');
const FakeUserDatabase = require('./fake.user.database');
const UserHelper = require('./user.helper');

describe('UserHelper', () => {

  const sandbox = Sinon.createSandbox();

  describe('getSortedUsers', () => {

    let userDatabaseStub;

    beforeEach(() => {
      /** This stub makes FakeUserDatabase.getData return the data below instead of what it would normally return. */
      userDatabaseStub = sandbox.stub(FakeUserDatabase, 'getData').returns([
        { name: 'Lars', attributes: { age: 3, hairColor: 'brown' } },
        { name: 'Swapna', attributes: { age: 2, hairColor: 'black' } },
        { name: 'Hong', attributes: { age: 1, hairColor: 'GREEN' } }
      ]);
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should return a sorted list of users', () => {
      const result = UserHelper.getSortedUsers();

      expect(result).to.deep.equal([
        { name: 'Hong', attributes: { age: 1, hairColor: 'GREEN' } },
        { name: 'Swapna', attributes: { age: 2, hairColor: 'black' } },
        { name: 'Lars', attributes: { age: 3, hairColor: 'brown' } }
      ]);
    });

    it('should handle empty data set', () => {
      /** After defining userDatabaseStub, you can modify its behavior by changing the .returns like i did below */
      userDatabaseStub.returns([]);

      const result = UserHelper.getSortedUsers();

      expect(result).to.deep.equal([]);
    });

    /** @todo add a couple more tests for various scenarios, each with its own "it()" */
  });

});
