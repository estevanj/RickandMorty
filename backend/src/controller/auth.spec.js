const chai = require('chai');
const sinon = require('sinon');
const authSchema = require('../dao/auth');
const { expect } = chai

describe('Auth controller', () => {
  describe('create user', () => {
    it('success response', async () => {
      const req = {
        body: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          password: 'password'
        },
      };

      const save = sinon.stub(authSchema.prototype, 'save');
      save.resolves({
        _id: '123456',
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password'
      });

      const responseMock = {
        status: () => {
          return {
            send: () => {},
          };
        },
      };
      const nextSpy = sinon.spy();

      const { createUser } = require('./auth');
      await createUser(req, responseMock, nextSpy);
   
      expect(nextSpy.called).to.be.false;
    });
  });
});