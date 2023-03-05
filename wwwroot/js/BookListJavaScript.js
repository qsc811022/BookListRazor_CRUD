const { Toast } = require("../lib/bootstrap/dist/js/bootstrap.bundle");

let dataTable;

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
            {"data":  "Name","width":"30%"},
            { "data": "Author", "width": "30%" },
            { "data": "ISBN", "width": "30%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-center">
                            <a href="/BookList/Edit?id=${data}" class='btn btn-success text-white' style='cursor:pointer;wdith:100px;'>
                            Edit                        
                            </a>
                            &nbsp;
                            <a class'btn btn-danger text-white' style='cursor:pointer;wdith:100px;'
                            onclick=Delete('/api/book?id'=+${data});
                            >
                            Delete
                            </a>
                            </div>`;
                         
                },"width":"30%"

            }
        ],
        "language": {
            "emptyTable":"no data found"
        },
        "width":"100%"
        
    })
}

function Delete(url) {
    swal({
        title: "Are you sure?",
        text="Once deleted,you will not be able to recover",
        icon: "warning",
        dangerMode: true
    }).then((willDelete) => {
        if (willDelete) {
            $.ajax({
                type: "Delete",
                url: url,
                success: function (data) {
                    if (data.success) {
                        toastor.success(data.success);
                        dataTable.ajax.reload()
                    }
                    else {
                        toastor.error(data.message);
                    }

                }

            })

        }

    })

}