export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    require('../components/Travel/index.scss');

    var travelController = require('../components/Travel/main-controller');
    $urlRouterProvider.otherwise('/home/personal-detail');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/components/Travel/home.html',
            controller: travelController,

        })
        .state('home.step1', {
            url: '/personal-detail',
            templateUrl: '/components/Travel/personal_detail.html',
        })
        .state('home.step2', {
            url: '/booking-details',
            templateUrl:'/components/Travel/booking.html',

        })
        .state('home.step3', {
        url: '/information-display',
        templateUrl:'/components/Travel/info_details.html',
        })
}
