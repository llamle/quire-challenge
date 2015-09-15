var app = angular.module('quireTest', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.test = 'Hello world!';

  $scope.question = 'What does it mean to be an accredited investor?';

  $scope.answers = [
    {title: 'Someone with a credit rating at or above 750', value: 'no'},
    {title: 'Someone who is a certified by the SEC to participate in a securities exchange', value: 'no'},
    {title: 'Someone who makes $200k+ annually or has $1M+ in net assets', value: 'yes'},
    {title: 'All of the above', value: 'no'}
  ];

}]);
