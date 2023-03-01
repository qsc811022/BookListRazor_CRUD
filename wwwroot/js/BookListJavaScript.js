//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .controller('BookListJavaScript', BookListJavaScript);

//    BookListJavaScript.$inject = ['$location'];

//    function BookListJavaScript($location) {
//        /* jshint validthis:true */
//        var vm = this;
//        vm.title = 'BookListJavaScript';

//        activate();

//        function activate() { }
//    }
//})();


var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_load').dataTable({
        "ajax": {
            "url": "/api/book",
            "type": "GET",
            "datatype":"json"
        },
        "columns": [
            {"data":"Name","width":"30%"},
            { "data": "Author", "width": "30%" },
            { "data": "ISBN", "width": "30%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                            <a href="/BookList/Edit?id${data}" class'btn btn-success text-white' style='cursor:pointer;wdith:100px;'>
                            Edit                        
                            </a>
                            &nbsp;
                            <a class'btn btn-danger text-white' style='cursor:pointer;wdith:100px;'>
                            Delete
                            </a>
                            </div>`
                         
                },"width":"30%"

            }
        ],
        "language": {
            "emptyTable":"no data found"
        },
        "width":"100%"
        
    })
}