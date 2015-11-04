angular.module('ps.user-events', [])
  .config(configFunction)
  .controller('UserEventsCtrl', UserEventsCtrlFunc);


function configFunction($stateProvider) {
  $stateProvider
    .state('userProfile.events', {
      url: '/events',
      templateUrl: 'user-profile/events/user-events.tpl.html',
      controller: 'UserEventsCtrl as userEvents'
    })
}

function UserEventsCtrlFunc($http, baseApiUrl, $stateParams) {
  var userEvents = this;
  console.log('Hallo Event ctrl' + $stateParams);

  $http.get(baseApiUrl + '/users/' + $stateParams.userName + '/events')
    .then(function (result) {
      userEvents.events = result.data;
    })
}