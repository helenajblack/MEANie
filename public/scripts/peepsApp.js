var myApp = angular.module('myApp', []);
myApp.controller('WhereMyPeeps', function($http, PeepsService) {
  var vm = this;
  vm.peeps = [];
  vm.newPeep = function() {
    console.log('in newPeep');
    var peepToAdd = {
      name: vm.nameIn,
      location: vm.locationIn
    }; //end peepToAdd
    PeepsService.addPeep(peepToAdd);
  }; //end whereMyPeepsAt
  vm.whereMyPeepsAt = function() {
    console.log('in whereMyPeepsAt');
    PeepsService.getPeeps().then(function() {
      console.log('back in controller:', PeepsService.allMyPeeps);
      vm.peeps = PeepsService.allMyPeeps.data;
    });
  }; //end whereMyPeepsAt
}); // end controller
