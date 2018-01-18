'use strict';
define(['angular', 'app', 'angularMocks', 'approot/Controllers/dashboard'], function (angular) {

    describe('It', function () {
        var vm, $scope, mockService,$http;

        beforeEach(module('app'));

        beforeEach(inject(function (_$rootScope_, _$controller_, $http) {
            mockService = {
                getCARs: function () {
                    return $http.get('test/MockData/CARs.json');
                }
            };



            $scope = _$rootScope_.$new(); //inherited scope

            // injecting the controller and assigning to vm
            vm = _$controller_('DashboardController', {
                $scope: $scope,
            });

            //mock the services
            vm.dataService = mockService;
        }));

        it('should test whether the Dashboard Controller is defined or not', function () {
            expect(vm).toBeDefined();
        });

        it('should test the functionality of getCARs', function () {
            spyOn(vm, 'getCARs').and.callThrough();
            vm.getCARs();
            expect(vm.getCARs).toHaveBeenCalled();
            expect(vm.Cars).not.toBe(null);
        });

    });

});
