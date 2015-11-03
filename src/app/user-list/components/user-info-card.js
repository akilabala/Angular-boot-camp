angular.module('ps.component.user-info-card', [])
  .directive('userInfoCard', userInfoCardFunc)
  .controller('UserInfoCardCtrl', UserInfoCardCtrlFunc);

function userInfoCardFunc() {
  return {
    restrict: 'E',
    transclude: true,
    scope:{
      user: '=',
      manipulateClick: '='
    },
    templateUrl: 'user-list/components/user-info-card.tpl.html',
    controller: 'UserInfoCardCtrl as userInfoCard',
    bindToController: true
  }
}

function UserInfoCardCtrlFunc(){
  var userInfoCard = this;
}