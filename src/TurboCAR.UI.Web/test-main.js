var allTestFiles = []; 
var TEST_REGEXP = /spec\.js$/i; 

var pathToModule = function (path) { 
var striped = path.replace(/^\/base\//, '').replace(/\.js$/, ''); 
    return striped; 
}; 
for (var file in window.__karma__.files) { 
      if (TEST_REGEXP.test(file)) allTestFiles.push(pathToModule(file)); 
} 


require.config({
    baseUrl: '/base',
    waitSeconds: 200,
    paths: {
        'angular': 'lib/angular/angular',
        'angularMocks': 'lib/angular-mocks/angular-mocks',
        'ui.router': 'lib/angular-ui-router/release/angular-ui-router',
        'ui.bootstrap': 'lib/angular-bootstrap/ui-bootstrap-tpls',
        'angular.sanitize': 'lib/angular-sanitize/angular-sanitize',
        'angular.touch': 'lib/angular-touch/angular-touch',
        'angular.animate': 'lib/angular-animate/angular-animate',
        'angular.cookies': 'lib/angular-cookies/angular-cookies',
        'angular.chart': 'lib/angular-chart.js/dist/angular-chart',
        'angular.ui.grid': 'lib/angular-ui-grid/ui-grid',
        'angular.material': 'lib/angular-material/angular-material',
        'angular.aria': 'lib/angular-aria/angular-aria',

        'chart': 'assets/scripts/Chart',
        'app': 'app/app.module',
       
        'approot': 'app'

    },
    shim: {
        angular: {
            exports: 'angular'
        },
        'ui.router': ['angular'],
        'ui.bootstrap': ['angular'],
        'angular.cookies': ['angular'],
        'angular.touch': ['angular'],
        'angular.animate': ['angular'],
        'angular.sanitize': ['angular'],
        'angular.chart': ['angular', 'chart'],
        'angular.aria': ['angular'],
        'angular.material': ['angular', 'angular.aria'],
        'angular.ui.grid': ['angular'],
        'app': ['angular', 'ui.router', 'ui.bootstrap', 'angular.touch',
            'angular.animate', 'angular.sanitize', 'angular.cookies', 'angular.chart', 'angular.ui.grid', 'angular.aria', 'angular.material']

    },
    deps: allTestFiles, 
    callback: window.__karma__.start 

});

require(['app'],
    function () {
        angular.bootstrap(document, ['app']);
        console.log("bootstrapped");
    }
);