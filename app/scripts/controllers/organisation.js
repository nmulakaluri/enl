'use strict';

/**
 * @ngdoc function
 * @name enlApp.controller:OrganisationCtrl
 * @description
 * # OrganisationCtrl
 * Controller of the enlApp
 */
angular.module('enlApp')
  .controller('OrganisationCtrl', function ($scope,orgService) {
   	
	
	 orgService.getAllOrganizations().then(function(data) {
        $scope.allOrganisations = data;
    });
	orgService.getOrganizationTypes().then(function(data) {
        $scope.orgTypes = data;
    });
	
	
	 $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

 
	
	
  });
