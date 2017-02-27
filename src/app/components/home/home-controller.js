(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', HomeController]);

    function HomeController(HomeServices, $scope) {
        // Controller Variables
        var self = this;
        self.pictures = [];
        self.loading = false;

        console.log('this works!');
        

    };


})();
