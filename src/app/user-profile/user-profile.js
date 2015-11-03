angular.module('ps.user-profile', [
  ])
  .config(configFunction)
  .controller('UserProfileCtrl', UserProfileCtrlFunc);


function configFunction($stateProvider) {
  $stateProvider
    .state('userProfile', {
      url: '/users/:userName',
      templateUrl: 'user-profile/user-profile.tpl.html',
      controller: 'UserProfileCtrl as userProfile'
    })
}

function UserProfileCtrlFunc($http, baseApiUrl, $stateParams) {
  var userProfile = this;

 $http.get(baseApiUrl + '/users/' + $stateParams.userName).then(function(result){
   userProfile.user = result.data;
 });
}