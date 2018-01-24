define([], function () {
    'use strict';
    dataService.$inject = ['$http']
    function dataService($http) {
        
        var service = {
            activities: [],
            getCARs: getCARs,
            addCAR: addCAR,
            getTeams: getTeams,
            getTeamMembers: getTeamMembers,
            getBorrower: getBorrower
        };
        return service;

        function getCARs() {
            return $http.get('http://localhost:8089/api/CAR');
            //return $http.get('http://localhost:18706/api/CAR');
        };

        function getBorrower()
        {
            return $http.get('http://localhost:8061/api/Borrower');
            //return $http.get('http://13.67.238.64:5003/api/Borrower');
        }
        function getTeams()
        {
            return $http.get('http://localhost:8064/api/Team');
           // return $http.get('http://13.67.238.64:5002/api/Team');
        }
        function getTeamMembers(teamId)
        {
            return $http.get('http://localhost:8063/api/Employee/' + teamId);
            //return $http.get('http://13.67.238.64:5004/api/Employee/' + teamId );
        }
        function addCAR(CAR) {
            return $http.post('http://localhost:8062/api/CAR', CAR);
            //return $http.post('http://13.67.238.64:5000/api/CAR', CAR);
        };
        
        
    }
    return dataService;
});