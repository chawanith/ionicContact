angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('ContactsCtrl', function($scope, Contacts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.contacts = Contacts.all();
  $scope.remove = function(contact) {
    Contacts.remove(contact);
  };
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})


.controller('CameraCtrl', function($scope, $cordovaCamera) {
    $scope.pictureUrl = 'http://placehold.it/300x300';
    $scope.takePicture = function() {
        var options = {
            destinationType: Camera.DestinationType.FILE_URL,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: true,

        }
        $cordovaCamera.getPicture(options)
          .then(function(data) {
              console.log('camera data: ' + angular.toJson(data));
              $scope.pictureUrl = data;
          }, function(error){
              console.log('camera error: ' + angular.toJson(data));
          });
    };
});








