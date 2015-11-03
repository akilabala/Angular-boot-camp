describe('userListCtrl', function () {

  var userListCtrl,
    userListModel;

  beforeEach(module('ps.user-list'));


  //This is one way to mock it.

  /*beforeEach(inject(function ($controller) {
    userListCtrl = $controller('UserListCtrl', {
      userListModel: {
        getUsers: function () {
          return {
            then: function () {
            }
          }
        }
      }
    });
  }));*/


  beforeEach(inject(function ($controller) {
    userListModel = {
      getUsersWasCalled: false,
      getUsers: function () {
        this.getUsersWasCalled = true;
        return {
          then: function (callback) {
            callback([]);
          }
        }
      }
    };
    userListCtrl = $controller('UserListCtrl', {
      userListModel: userListModel
    });
  }));

  it('should create an instance', function () {
    expect(userListCtrl).toBeDefined();
  });

  it('should call getUsers on userListModel when instantiated', function () {
    expect(userListModel.getUsersWasCalled).toBeTruthy();
  });

  it('should set the users property when getUsers returns a value', function () {
    expect(userListCtrl.users).toBeDefined();
  });

});