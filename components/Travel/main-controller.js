function helloWorldController($scope, $http) {
    'ngInject';

    //first Page Button Click
    $scope.onNextClick = function (data) {
        $scope.info = data;
        angular.element('#tab1').removeClass('tab-disable');
        angular.element('#tab2').removeClass('tab-disable');
    };

    //Second Page Button Click
    $scope.onSubmit = function (data) {
        $scope.info1 = data;
    };

    $scope.sendingmail = function (data) {
        $http.get("http://192.168.10.73:3003/send?email=" + $scope.info.email + "&fName=" + $scope.info.name +
            "&lName=" + $scope.info.lname + "&cNo=" + $scope.info.number + "&toDate=" + data.dateto + "&fromDate=" +
            data.datefrom + "&location=" + data.selected.name).success(function (data, status, headers, config) {
            alert("Thanks you, your booking is conform and send details on your mail.");
            console.log('Your full name is - ' + data);
        }).error(function (data, status, headers, config) {
            alert("An error occurred during the AJAX request");
        });
    };

    //validation Of Datepicker
    $scope.dateOptions = {
        dateDisabled: disabled,
        minDate: new Date()
    };

    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === date.getDay();
    }

    $scope.data = {};
    $scope.cities = [ // Taken from https://gist.github.com/unceus/6501985
        {name: 'Boston'},
        {name: 'New	York'},
        {name: 'Chicago'},
        {name: 'San	Francisco'}
    ];
}
export default helloWorldController;