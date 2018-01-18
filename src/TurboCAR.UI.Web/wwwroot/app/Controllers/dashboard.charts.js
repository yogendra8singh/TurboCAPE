define([], function () {
    'use strict';
    dashboardChartsController.$inject = ['$http'];
    function dashboardChartsController($http) {
        var vm = this;
        vm.getPieChartData = getPieChartData;
        vm.getLineChartData = getLineChartData;
        vm.pida = {};
        vm.pilab = {};
        function getPieChartData() {
            $http.get("sample-data/pie-chart-data.json").success(function (response) {
                console.log(response);
                var i = 0;
                
                for (var keyName in response) {

                    var key = keyName;
                    vm.pieLabels[i] = keyName;
                    //vm.pieData[i] = response[key];
                    i++;
                }
            })
        }

        getPieChartData();
        vm.pieLabels = vm.pida;
        vm.pieData = ["300", "500", "100"];

        vm.labels = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"];
        vm.series = ['Car Booked','Committe Reviewed','Creator CA Approved','Creator recommended'];
        //vm.data = [
        //  [40, 20, 60, 30, 70, 2, 10],
        //  [23,45,12,67,56,78,98,78]
        //];

        function getLineChartData() {
            $http.get("sample-data/line-chart-data.json").success(function (response) {
                vm.data = response.data;
            });
        };

        getLineChartData();

        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
        vm.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        vm.options = {
            scales: {
                yAxes: [
                  {
                      id: 'y-axis-1',
                      type: 'linear',
                      display: true,
                      position: 'left'
                  }
                ]
            }
        };
    }
    return dashboardChartsController;
});