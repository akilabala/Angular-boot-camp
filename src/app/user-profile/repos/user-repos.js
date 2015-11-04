angular.module('ps.user-repos', [])
  .config(configFunction)
  .controller('UserReposCtrl', UserReposCtrlFunc);


function configFunction($stateProvider) {
  $stateProvider
    .state('userProfile.repos', {
      url: '/repos',
      templateUrl: 'user-profile/repos/user-repos.tpl.html',
      controller: 'UserReposCtrl as userRepos'
    })
}

function UserReposCtrlFunc($http, baseApiUrl, $stateParams) {
  var userRepos = this;
  console.log('Inside repos controller');
}