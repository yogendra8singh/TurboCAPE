

define([], function () {
    'use strict';
    translateController.$inject = ['dataService'];
    function translateController($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
}

    return translateController;
});