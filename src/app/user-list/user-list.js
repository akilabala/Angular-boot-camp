angular.module('ps.user-list', [
    'ui.router',
    'ps.component.user-info-card'
  ])

  .config(configFunction)
  .controller('UserListCtrl', UserListCtrlFunc);


function configFunction($stateProvider) {
  $stateProvider
    .state('userList', {
      url: '/users',
      templateUrl: 'user-list/user-list.tpl.html',
      controller: 'UserListCtrl as usrList'
    })
}

function UserListCtrlFunc(userListModel) {
  var usrList = this;

  userListModel.getUsers().then(function (users) {
    usrList.users = users;
  });

  usrList.manipulateClick = function (user) {
    console.log('Manipulating the click for ' + user.login);
  }
}