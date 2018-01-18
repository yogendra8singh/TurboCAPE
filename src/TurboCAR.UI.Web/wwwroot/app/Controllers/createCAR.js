define([], function () {
    'use strict';
    createCARController.$inject = ['dataService', '$location', '$mdDialog'];
    function createCARController(dataService, $location, $mdDialog) {

        var vm = this;
        vm.borrowerId = "ID";
        vm.teamId = "ID";
        vm.CARAssociateId = "";
        vm.CARRMId = "";
        vm.DealTeamLeaderId = "";
        vm.CARSCOId = "";
        var date = new Date();
        //vm.dateCreated = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/'+date.getFullYear();
        vm.dateCreated = ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2) + '/' + date.getFullYear();
        vm.CarType = {
            name: 'NewLoan'
        };
        var CAR = {};
        var msg = "";
        vm.borrowers = [];
        //vm.borrowers = [
        //    { "Id": "3", "Name": "Borrower One", "CIF": "1231231" },
        //    { "Id": "4", "Name": "Borrower Two", "CIF": "1231232" }
        //];
        vm.TeamMembers = [];

        vm.teams = [];
        //vm.teams = [{ "TeamId": "2", "Name": "Team1", "Department": "sadsa" },
        //{ "TeamId": "4", "Name": "Team2", "Department": "sadfsdsa" }];

        vm.CIF = '';

        getBorrowers();

        getTeams();
        function getBorrowers() {
            dataService.getBorrower()
                .success(function (response) {
                    vm.borrowers = response;
                });
        }

        function getTeams() {
            dataService.getTeams()
               .success(function (response) {
                   vm.teams = response;
               });
        }

        vm.GetTeamMembers = function () {
            //vm.TeamMembers = [{ "EmployeeId": "4", "Name": "fsd" },
            //{ "EmployeeId": "5", "Name": "ferffsd" }];
            dataService.getTeamMembers(vm.teamId)
                .success(function (response) {
                    vm.TeamMembers = response;
                });
        }
        vm.addCAR = function () {

            var dept = "";
            var cif = "";
            var borrowerName = "";
            var teamCode = "";
            angular.forEach(vm.teams, function (value, index) {
                if (value.id == vm.teamId) {
                    dept = value.department
                    teamCode= value.name
                }
            });

            angular.forEach(vm.borrowers, function (value, index) {
                if (value.id == vm.borrowerId) {
                    cif = value.cif;
                    borrowerName = value.name;
                }
            })


            CAR = {

                Cif: cif,
                BorrowerName: borrowerName,
                CarType: vm.CarType.name,
                TeamCode: teamCode,
                DealTeamLeaderId: vm.DealTeamLeaderId,
                CARAssociateId: vm.CARAssociateId,
                CARRMId: vm.CARRMId,
                CARSCOId: vm.CARSCOId,
                Department: dept,
                CreatedDate: vm.dateCreated

            }
    
           // $location.path("/dashboard");
            dataService.addCAR(CAR)
                .success(function (response) {
                    msg = "CAR has been successfully created with Id " + response.carId;
                    alert = $mdDialog.alert({
                        parent: angular.element(document.querySelector('#popupContainer')),
                        title: 'CAR created',
                        textContent: msg,
                        ok: 'Ok'
                    });
                    $mdDialog
                      .show(alert)
                      .finally(function () {
                          alert = undefined;
                          $location.path("/dashboard");
                      });
                  //  $location.path("/dashboard");
                });
        }
    }
    return createCARController;
});