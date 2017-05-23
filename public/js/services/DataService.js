var mod = angular.module('DataService', []);

mod.factory('data', ['$http', function($http) {

    return {
        get : function() {
            return $http.get('/api/data');
        },

        create : function(data) {
            return $http.post('/api/data', data);
        },

        delete : function(id) {
            return $http.delete('/api/data' + id);
        }
    }
}]);