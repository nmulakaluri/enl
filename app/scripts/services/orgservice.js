'use strict';

/**
 * @ngdoc service
 * @name enlApp.orgService
 * @description
 * # orgService
 * Service in the enlApp.
 */
angular.module('enlApp')
  .service('orgService', function ($q, $timeout, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var orgservice = {
        getAllOrganizations: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get('data/org.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        },
		getOrganizationTypes:function(){
			var deferred = $q.defer();

            $timeout(function() {
                $http.get('data/orgtype.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
		}
    };
	
	return orgservice;
	
	
  });
