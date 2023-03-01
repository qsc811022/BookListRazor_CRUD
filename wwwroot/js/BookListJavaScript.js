(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookListJavaScript', BookListJavaScript);

    BookListJavaScript.$inject = ['$location'];

    function BookListJavaScript($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'BookListJavaScript';

        activate();

        function activate() { }
    }
})();
