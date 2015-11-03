describe('userListModel', function () {

  var userListModel,
    $httpBackend,
    allUsers;

  beforeEach(module('ps.models.user-list'));

  beforeEach(inject(function (_userListModel_, _$httpBackend_) {
    userListModel = _userListModel_;
    $httpBackend = _$httpBackend_;
    setUpMocks();
  }));


  it('should create an instance', function () {
    expect(userListModel).toBeDefined();
  });

  describe('getUsers', function () {

    it('should fetch users when called', function () {
      userListModel.getUsers().then(function(users){
        expect(users).toBeDefined();
        expect(users.length).toBeGreaterThan(0);
        expect(users).toEqual(allUsers);
      });
      $httpBackend.flush();
    });
  });


  function setUpMocks(){
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('http://api.github.com/users').respond(allUsers);
  }

});