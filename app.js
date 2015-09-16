var app = angular.module('quireTest', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.test = 'Hello world!';

  $scope.isCorrect = {value:'not sure'};

  $scope.question = 'What does it mean to be an accredited investor?';

  $scope.answers = [
    {title: 'Someone with a credit rating at or above 750', value: 'no'},
    {title: 'Someone who is a certified by the SEC to participate in a securities exchange', value: 'no'},
    {title: 'Someone who makes $200k+ annually or has $1M+ in net assets', value: 'yes'},
    {title: 'All of the above', value: 'no'}
  ];


  $scope.verify = function() {
    if ($scope.isCorrect.value === 'yes') {
      alert('Awesome, this is correct!');
    } else if ($scope.isCorrect.value === 'not sure') {
      alert('“Do. Or do not. There is no try.” – Yoda');
    }
    else {
      var randomNumber = Math.floor(Math.random()*$scope.incorrect.length);

      alert($scope.incorrect[randomNumber]);
    }
  };

  $scope.incorrect = [
    'When Life Gives You Questions, Google has Answers...',
    'If at first you don\'t succeed; call it version 1.0...',
    'Alcohol & calculus don\'t mix. Never drink & derive...',
    '“It’s a trap!” – Admiral Ackbar',
    '“Never tell me the odds.” – Han Solo',
  ];

}]);
