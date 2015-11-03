angular.module('ps.models.user-list', [])

  .service('userListModel', userListModelFunc);

function userListModelFunc($http) {
  var userList = this;

  userList.getUsers = function () {
    return $http.get('http://api.github.com/users').then(function (result) {
      return result.data;
    })
  }
}