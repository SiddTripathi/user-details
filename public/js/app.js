$(document).ready(function () {
    $('#user').click(function (event) {
        $.ajax({
            method: "GET",
            url: '/user',

            success: data => {
                if (!data) {
                    $("#errorResult").html("Results:" + data.error);
                    $("#results").show();
                }
                else {
                    let userData = data.results;

                    $("#errorResult").html("Results -");
                    // $("#results").show();

                    $(function () {
                        console.log(userData)
                        $("#gridContainer").dxDataGrid({
                            dataSource: userData,
                            pager: {
                                showPageSizeSelector: true,
                                allowedPageSizes: [10, 20, 50],
                                showNavigationButtons: true
                            },

                            showBorders: true,
                            selection: {
                                mode: "single"
                            },
                            onSelectionChanged: function (e) {
                                e.component.collapseAll(-1);
                                e.component.expandRow(e.currentSelectedRowKeys[0]);
                            },
                            onContentReady: function (e) {
                                if (!e.component.getSelectedRowKeys().length)
                                    e.component.selectRowsByIndexes(0);
                            },
                            columns: [{
                                dataField: "name.title",
                                caption: "Title",
                                width: 70

                            }, {
                                dataField: "name.first",
                                caption: "First Name",
                                width: 150
                            }, {
                                dataField: "name.last",
                                caption: "Last Name",
                                width: 150
                            },

                            {
                                dataField: "gender",
                                caption: "Gender",
                                width: 100

                            },
                            {
                                dataField: "dob.age",
                                caption: "Age",
                                width: 70

                            }, {
                                dataField: "email",
                                caption: "E-mail"
                            }],
                            masterDetail: {
                                enabled: false,
                                template: function (container, options) {
                                    var currentEmployeeData = options.data;
                                    container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.picture.medium + '" /><p class="employeeNotes">Current Location: ' + currentEmployeeData.location.city + '</p>' +
                                        '<p class="employeeNotes">Cell Number: ' + currentEmployeeData.cell + '</p></div>'));
                                    $("<div>")
                                        .dxDataGrid({
                                            columnAutoWidth: true,
                                            showBorders: true,
                                            columns: [
                                                {
                                                    dataField: "login.username",
                                                    caption: "User Id"
                                                },
                                                {
                                                    dataField: "location.city",
                                                    caption: "City"

                                                },
                                                {
                                                    dataField: "location.country",
                                                    caption: "Country"

                                                },
                                                {
                                                    dataField: "dob.date",
                                                    caption: "Date of Birth",
                                                    dataType: "date"

                                                }

                                            ],
                                            dataSource: new DevExpress.data.DataSource({
                                                store: new DevExpress.data.ArrayStore({
                                                    key: "login.uuid",
                                                    data: userData
                                                }),
                                                filter: ["login.uuid", "=", currentEmployeeData.login.uuid]
                                            })

                                        }).appendTo(container);
                                }



                            }
                        });
                    })
                    // $("#tbody").html(str);
                    $("#answer").show();
                }

            }

        })
    })
})

$(document).ready(function () {
    $('#male').click(function (event) {
        $.ajax({
            method: "GET",
            url: '/user?gender=male',

            success: data => {
                if (!data) {
                    $("#errorResult").html("Results:" + data.error);
                    $("#results").show();
                }
                else {
                    let userData = data.results;

                    $("#errorResult").html("Results -");
                    // $("#results").show();

                    $(function () {
                        console.log(userData)
                        $("#gridContainer").dxDataGrid({
                            dataSource: userData,
                            pager: {
                                showPageSizeSelector: true,
                                allowedPageSizes: [10, 20, 50],
                                showNavigationButtons: true
                            },

                            showBorders: true,
                            selection: {
                                mode: "single"
                            },
                            onSelectionChanged: function (e) {
                                e.component.collapseAll(-1);
                                e.component.expandRow(e.currentSelectedRowKeys[0]);
                            },
                            onContentReady: function (e) {
                                if (!e.component.getSelectedRowKeys().length)
                                    e.component.selectRowsByIndexes(0);
                            },
                            columns: [{
                                dataField: "name.title",
                                caption: "Title",
                                width: 70

                            }, {
                                dataField: "name.first",
                                caption: "First Name",
                                width: 150
                            }, {
                                dataField: "name.last",
                                caption: "Last Name",
                                width: 150
                            },

                            {
                                dataField: "gender",
                                caption: "Gender",
                                width: 100

                            },
                            {
                                dataField: "dob.age",
                                caption: "Age",
                                width: 70

                            }, {
                                dataField: "email",
                                caption: "E-mail"
                            }],
                            masterDetail: {
                                enabled: false,
                                template: function (container, options) {
                                    var currentEmployeeData = options.data;
                                    container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.picture.medium + '" /><p class="employeeNotes">Current Location: ' + currentEmployeeData.location.city + '</p>' +
                                        '<p class="employeeNotes">Cell Number: ' + currentEmployeeData.cell + '</p></div>'));
                                    $("<div>")
                                        .dxDataGrid({
                                            columnAutoWidth: true,
                                            showBorders: true,
                                            columns: [
                                                {
                                                    dataField: "login.username",
                                                    caption: "User Id"
                                                },
                                                {
                                                    dataField: "location.city",
                                                    caption: "City"

                                                },
                                                {
                                                    dataField: "location.country",
                                                    caption: "Country"

                                                },
                                                {
                                                    dataField: "dob.date",
                                                    caption: "Date of Birth",
                                                    dataType: "date"

                                                }

                                            ],
                                            dataSource: new DevExpress.data.DataSource({
                                                store: new DevExpress.data.ArrayStore({
                                                    key: "login.uuid",
                                                    data: userData
                                                }),
                                                filter: ["login.uuid", "=", currentEmployeeData.login.uuid]
                                            })

                                        }).appendTo(container);
                                }



                            }
                        });
                    })
                    // $("#tbody").html(str);
                    $("#answer").show();
                }

            }

        })
    })
})
$(document).ready(function () {
    $('#female').click(function (event) {
        $.ajax({
            method: "GET",
            url: '/user?gender=female',

            success: data => {
                if (!data) {
                    $("#errorResult").html("Results:" + data.error);
                    $("#results").show();
                }
                else {
                    let userData = data.results;

                    $("#errorResult").html("Results -");
                    // $("#results").show();

                    $(function () {
                        console.log(userData)
                        $("#gridContainer").dxDataGrid({
                            dataSource: userData,
                            pager: {
                                showPageSizeSelector: true,
                                allowedPageSizes: [10, 20, 50],
                                showNavigationButtons: true
                            },

                            showBorders: true,
                            selection: {
                                mode: "single"
                            },
                            onSelectionChanged: function (e) {
                                e.component.collapseAll(-1);
                                e.component.expandRow(e.currentSelectedRowKeys[0]);
                            },
                            onContentReady: function (e) {
                                if (!e.component.getSelectedRowKeys().length)
                                    e.component.selectRowsByIndexes(0);
                            },
                            columns: [{
                                dataField: "name.title",
                                caption: "Title",
                                width: 70

                            }, {
                                dataField: "name.first",
                                caption: "First Name",
                                width: 150
                            }, {
                                dataField: "name.last",
                                caption: "Last Name",
                                width: 150
                            },

                            {
                                dataField: "gender",
                                caption: "Gender",
                                width: 100

                            },
                            {
                                dataField: "dob.age",
                                caption: "Age",
                                width: 70

                            }, {
                                dataField: "email",
                                caption: "E-mail"
                            }],
                            masterDetail: {
                                enabled: false,
                                template: function (container, options) {
                                    var currentEmployeeData = options.data;
                                    container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.picture.medium + '" /><p class="employeeNotes">Current Location: ' + currentEmployeeData.location.city + '</p>' +
                                        '<p class="employeeNotes">Cell Number: ' + currentEmployeeData.cell + '</p></div>'));
                                    $("<div>")
                                        .dxDataGrid({
                                            columnAutoWidth: true,
                                            showBorders: true,
                                            columns: [
                                                {
                                                    dataField: "login.username",
                                                    caption: "User Id"
                                                },
                                                {
                                                    dataField: "location.city",
                                                    caption: "City"

                                                },
                                                {
                                                    dataField: "location.country",
                                                    caption: "Country"

                                                },
                                                {
                                                    dataField: "dob.date",
                                                    caption: "Date of Birth",
                                                    dataType: "date"

                                                }

                                            ],
                                            dataSource: new DevExpress.data.DataSource({
                                                store: new DevExpress.data.ArrayStore({
                                                    key: "login.uuid",
                                                    data: userData
                                                }),
                                                filter: ["login.uuid", "=", currentEmployeeData.login.uuid]
                                            })

                                        }).appendTo(container);
                                }

                            }
                        });
                    })
                    // $("#tbody").html(str);
                    $("#answer").show();
                }

            }

        })
    })
})



$(document).ready(function () {

    $('#numberUser').click(function (event) {
        let numberOfUser = $('#searchTerm').val()
        $.ajax({
            method: "GET",
            url: '/user?results=' + numberOfUser,

            success: data => {
                if (!data) {
                    $("#errorResult").html("Results:" + data.error);
                    $("#results").show();
                }
                else {
                    let userData = data.results;

                    $("#errorResult").html("Results -");
                    // $("#results").show();

                    $(function () {
                        console.log(userData)
                        $("#gridContainer").dxDataGrid({
                            dataSource: userData,
                            pager: {
                                showPageSizeSelector: true,
                                allowedPageSizes: [10, 20, 50],
                                showNavigationButtons: true
                            },

                            showBorders: true,
                            selection: {
                                mode: "single"
                            },
                            onSelectionChanged: function (e) {
                                e.component.collapseAll(-1);
                                e.component.expandRow(e.currentSelectedRowKeys[0]);
                            },
                            onContentReady: function (e) {
                                if (!e.component.getSelectedRowKeys().length)
                                    e.component.selectRowsByIndexes(0);
                            },
                            columns: [{
                                dataField: "name.title",
                                caption: "Title",
                                width: 90

                            }, {
                                dataField: "name.first",
                                caption: "First Name",
                                width: 150
                            }, {
                                dataField: "name.last",
                                caption: "Last Name",
                                width: 150
                            },

                            {
                                dataField: "gender",
                                caption: "Gender",
                                width: 100

                            },
                            {
                                dataField: "dob.age",
                                caption: "Age",
                                width: 70

                            }, {
                                dataField: "email",
                                caption: "E-mail"
                            }],
                            masterDetail: {
                                enabled: false,
                                template: function (container, options) {
                                    var currentEmployeeData = options.data;
                                    container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.picture.medium + '" /><p class="employeeNotes">Current Location: ' + currentEmployeeData.location.city + '</p>' +
                                        '<p class="employeeNotes">Cell Number: ' + currentEmployeeData.cell + '</p></div>'));
                                    $("<div>")
                                        .dxDataGrid({
                                            columnAutoWidth: true,
                                            showBorders: true,
                                            columns: [
                                                {
                                                    dataField: "login.username",
                                                    caption: "User Id"
                                                },
                                                {
                                                    dataField: "location.city",
                                                    caption: "City"

                                                },
                                                {
                                                    dataField: "location.country",
                                                    caption: "Country"

                                                },
                                                {
                                                    dataField: "dob.date",
                                                    caption: "Date of Birth",
                                                    dataType: "date"

                                                }

                                            ],
                                            dataSource: new DevExpress.data.DataSource({
                                                store: new DevExpress.data.ArrayStore({
                                                    key: "login.uuid",
                                                    data: userData
                                                }),
                                                filter: ["login.uuid", "=", currentEmployeeData.login.uuid]
                                            })

                                        }).appendTo(container);
                                }



                            }
                        });
                    })
                    // $("#tbody").html(str);
                    $("#answer").show();
                }

            }

        })
    })
})
