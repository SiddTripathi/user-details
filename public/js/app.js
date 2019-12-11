$(document).ready(function () {
    $('#user').click(function (event) {
        $.getJSON('/user', function (data) {

            if (!data) {
                $("#errorResult").html("Results:" + data.error);
                $("#results").show();
            }
            else {
                data = data.results;

                $("#errorResult").html("Results -");
                $("#results").show();
                let str = "";
                data.forEach(d => {

                    str +=
                        "<tr>" +
                        "<td>" +
                        d.name.title +
                        "</td>" +
                        "<td>" +
                        d.name.first +
                        "</td>" +
                        "<td>" +
                        d.name.last +
                        "</td>" +
                        "<td>" +
                        d.dob.age +
                        "</td>" +
                        "<td>" +
                        d.phone +
                        "</td>" +
                        "<td>" +
                        d.cell +
                        "</td>" +
                        "<td>" +
                        d.email +
                        "</td>" +
                        "</tr>";
                });
                $("#tbody").html(str);
                $("#answer").show();
            }

            console.log(data)
            //console.log(data.results[0].name.first)
        })
    })
})

$(document).ready(function () {
    $('#male').click(function (event) {
        $.getJSON('/user?gender=male', function (data) {

            if (!data) {
                $("#errorResult").html("Results:" + data.error);
                $("#results").show();
            }
            else {
                data = data.results;
                $("#errorResult").html("Results -");
                $("#results").show();
                let str = "";
                data.forEach(d => {

                    str +=
                        "<tr>" +
                        "<td>" +
                        d.name.title +
                        "</td>" +
                        "<td>" +
                        d.name.first +
                        "</td>" +
                        "<td>" +
                        d.name.last +
                        "</td>" +
                        "<td>" +
                        d.dob.age +
                        "</td>" +
                        "<td>" +
                        d.phone +
                        "</td>" +
                        "<td>" +
                        d.cell +
                        "</td>" +
                        "<td>" +
                        d.email +
                        "</td>" +
                        "</tr>";
                });
                $("#tbody").html(str);
                $("#answer").show();
            }

            console.log(data)
            console.log(data.results[0].name.first)
        })
    })
})
$(document).ready(function () {
    $('#female').click(function (event) {
        $.getJSON('/user?gender=female', function (data) {

            if (!data) {
                $("#errorResult").html("Results:" + data.error);
                $("#results").show();
            }
            else {

                data = data.results;
                console.log(data)
                $("#errorResult").html("Results -");
                $("#results").show();
                let str = "";
                data.forEach(d => {

                    str +=
                        "<tr>" +
                        "<td>" +
                        d.name.title +
                        "</td>" +
                        "<td>" +
                        d.name.first +
                        "</td>" +
                        "<td>" +
                        d.name.last +
                        "</td>" +
                        "<td>" +
                        d.dob.age +
                        "</td>" +
                        "<td>" +
                        d.phone +
                        "</td>" +
                        "<td>" +
                        d.cell +
                        "</td>" +
                        "<td>" +
                        d.email +
                        "</td>" +
                        "</tr>";
                });
                $("#tbody").html(str);
                $("#answer").show();
            }

            console.log(data)
            console.log(data.results[0].name.first)
        })
    })
})

$(document).ready(function () {

    $('#numberUser').click(function (event) {
        let numberOfUser = $('#searchTerm').val()
        $.getJSON('/user?results=' + numberOfUser, function (data) {



            if (!data) {
                $("#errorResult").html("Results:" + data.error);
                $("#results").show();
            }
            else {
                data = data.results;
                $("#errorResult").html("Results -");
                $("#results").show();
                let str = "";
                data.forEach(d => {

                    str +=
                        "<tr>" +
                        "<td>" +
                        d.name.title +
                        "</td>" +
                        "<td>" +
                        d.name.first +
                        "</td>" +
                        "<td>" +
                        d.name.last +
                        "</td>" +
                        "<td>" +
                        d.dob.age +
                        "</td>" +
                        "<td>" +
                        d.phone +
                        "</td>" +
                        "<td>" +
                        d.cell +
                        "</td>" +
                        "<td>" +
                        d.email +
                        "</td>" +
                        "</tr>";
                });
                $("#tbody").html(str);
                $("#answer").show();
            }

            console.log(data)
            console.log(data[0].name.first)
        })
    })
})