angular.module('project-seed', [
    'ui.router',
    'project-seed.common',
    'ngAria',
    'angularMoment',
    'templates-app',
    'ps.user-list',
    'ps.user-profile'
  ])

  .config(MainConfigFunc);


function MainConfigFunc($urlRouterProvider) {
  $urlRouterProvider.otherwise('/users');
}
