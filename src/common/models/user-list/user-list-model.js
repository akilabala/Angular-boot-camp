angular.module('ps.models.user-list', [
    'project-seed.config.constants'
])

  .service('userListModel', userListModelFunc);

function userListModelFunc($http, baseApiUrl) {
  var userList = this;

  userList.getUsers = function () {
    return $http.get(baseApiUrl + '/users').then(function (result) {
      return result.data;
    })
  }
}