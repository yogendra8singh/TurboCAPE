define([], function () {
    'use strict';
    dashboardController.$inject = ['dataService'];
    function dashboardController(dataService) {

        var vm = this;
        vm.cars = [];
        vm.gridOptions = {
            columnDefs: [
          { name: 'CAR #', displayName: 'CAR #', field: 'id' },
          { name: 'Borrower', field: 'borrower' },
          { name: "CAR type", displayName: 'CAR type', field: 'carType' },
          { name: 'Activity', field: 'activity' },
          { name: 'Status', field: 'status' },
          { name: 'Date', field: 'creationDate' }
            ]
        };

        vm.dataService = dataService;
        vm.getCARs = getCARs;
       
        getCARs();
        function getCARs() {
            vm.dataService.getCARs()
                .success(function (response) {
                    vm.Cars = response;
                    vm.gridOptions.data = response;
                });
        }


    }
    return dashboardController;
});