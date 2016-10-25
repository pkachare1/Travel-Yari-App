angular.module('TravelBookingApplication', [
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.select'
        /*'validation',
        'validation.rule',*/

    ])
    .config(require('../routes/routes'))
    .constant('appName', 'TravelBookingApplication')
;