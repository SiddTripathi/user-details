// $(document).ready(function () {

//     $('#numberUser').click(function (event) {
//         let numberOfUser = $('#searchTerm').val()
//         fetchData()
//         var page = 1,
//             pagelimit = 5,
//             totalrecord = 0
//         $(".prev-btn").on("click", function () {
//             if (page > 1) {
//                 page--;
//                 fetchData();
//             }
//             console.log("Prev Page:" + page)

//         })

//         $(".next-btn").on("click", function () {
//             if (page * pagelimit < totalrecord) {
//                 page++;
//                 fetchData()
//             }
//             console.log("Next Page:" + page)

//         })

//         function fetchData() {
//             $.ajax({
//                 method: "GET",
//                 url: '/user?results=' + numberOfUser,
//                 data: {
//                     page: page,
//                     pageLimit: pagelimit
//                 },
//                 success: data => {

//                     if (!data) {
//                         $("#errorResult").html("Results:" + data.error);
//                         $("#results").show();
//                     } else {

//                         totalrecord = data.info.results
//                         data = data.results;


//                         $("#errorResult").html("Results -");
//                         $("#results").show();
//                         let str = "";
//                         data.forEach(d => {

//                             str +=
//                                 "<tr>" +
//                                 "<td><img src=" + "\"" +
//                                 d.picture.medium +
//                                 "\"" +
//                                 "/></td>" +
//                                 "<td>" +
//                                 d.name.title +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.name.first +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.name.last +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.dob.age +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.phone +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.cell +
//                                 "</td>" +
//                                 "<td>" +
//                                 d.email +
//                                 "</td>" +

//                                 "</tr>";
//                         });
//                         $("#tbody").html(str);
//                         $("#answer").show();
//                     }


//                     console.log(data)
//                     console.log(data[0].name.first)
//                 }
//             })
//         }

//     })
// })

// $(document).ready(function () {

//     $('#numberUser').click(function (event) {
//         let numberOfUser = $('#searchTerm').val()
//         $.getJSON('/user?results=' + numberOfUser, function (data) {



//             if (!data) {
//                 $("#errorResult").html("Results:" + data.error);
//                 $("#results").show();
//             }
//             else {
//                 let userData = data.results;

//                 $("#errorResult").html("Results -");
//                 // $("#results").show();

//                 $(function () {
//                     console.log(userData)
//                     $("#gridContainer").dxDataGrid({
//                         dataSource: userData,

//                         showBorders: true,
//                         selection: {
//                             mode: "single"
//                         },
//                         onSelectionChanged: function (e) {
//                             e.component.collapseAll(-1);
//                             e.component.expandRow(e.currentSelectedRowKeys[0]);
//                         },
//                         onContentReady: function (e) {
//                             if (!e.component.getSelectedRowKeys().length)
//                                 e.component.selectRowsByIndexes(0);
//                         },
//                         columns: [{
//                             dataField: "name.title",
//                             caption: "Title",
//                             width: 70
//                         }, {
//                             dataField: "name.first",
//                             caption: "First Name"
//                         }, {
//                             dataField: "name.last",
//                             caption: "Last Name"
//                         },

//                         {
//                             dataField: "gender",
//                             caption: "Gender",
//                             width: 170
//                         },
//                         {
//                             dataField: "dob.age",
//                             caption: "Age",
//                             width: 125
//                         }, {
//                             dataField: "email",
//                             caption: "E-mail"
//                         }],
//                         masterDetail: {
//                             enabled: false,
//                             template: function (container, options) {
//                                 var currentEmployeeData = options.data;
//                                 container.append($('<div class="employeeInfo"><img class="employeePhoto" src="' + currentEmployeeData.picture.medium + '" /><p class="employeeNotes">Current Location' + currentEmployeeData.location.city + '</p>' +
//                                     '<p class="employeeNotes">Cell Number' + currentEmployeeData.cell + '</p></div>'));

//                             }



//                         }
//                     });
//                 })
//                 $("#tbody").html(str);
//                 $("#answer").show();
//             }

//             console.log(data)
//             console.log(data[0].name.first)
//         })
//     })
// })