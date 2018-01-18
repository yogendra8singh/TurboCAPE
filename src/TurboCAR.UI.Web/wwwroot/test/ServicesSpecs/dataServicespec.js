//'use strict';

//define(['angular', 'app',  'angularMocks', 'dataService'], function (angular) {
//    angular.module('app.mock', []);
//    describe('dataService tests', function () {

//        beforeEach(module('app'));

//        var dataMockservice;

//        beforeEach(module('app.mock'));

//        beforeEach(inject(function (dataService) {
//            dataMockservice = dataService;
//        }));


//        describe('getCARs function', function () {

//            it('get CARs list from server', function () {
//                var data;

//                dataMockservice.getCARs()
//                .success(function (response) {
//                    data = response;
//                });
//                //console.log(data1.flights[0]);
//                expect(data).not.toBe(null);
//            });
//        });
//    });
//});