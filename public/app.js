// const resistanceDiv = $(".resistenceContainer");
// const cardioDiv = $(".cadioContainer");
// const $btnCardio = $(".btnCardio");
// const $btnResistence = $(".btnResistence");
// const $appendDiv = $("#appendDiv");

// const today = moment().format('LL');
// const currentTime = moment().format('LT');
// const $currentTime = $(".currentTime");
// $currentTime.append(today + " " + currentTime);

// $btnResistence.on(click, function (event) {
//     event.preventDefault();
//     cardioDiv.hide();
//     resistanceDiv.show();
// })

// $btnCardio.on("click", function (event) {
//     event.preventDefault();
//     resistanceDiv.hide();
//     cardioDiv.show();
// })

// $("#resistanceComplete").on("click", function (event) {
//     console.log(event.target);
//     event.preventDefault();
//     const newRecord = {
//         name: $("#name").val().trim(),
//         weight: $("#weights").val().trim(),
//         sets: $("#sets").val().trim(),
//         rep: $("#reps").val().trim(),
//         duration: $("duration").val().trim(),
//     };
//     console.log(newRecord);
//     $ajax({
//         url: "/api/workouts",
//         type: "POST",
//         data: newRecord
//     }).then(function() {
//         console.log("worked");
//     })
// })

// $("#cardioComplete").on("click", function (event) {
//     event.preventDefault();
//     const newRecord = {
//         name: $("#CardioName").val().trim(),
//         distance: $("#distance").val().trim(),
//         duration: $("#durationCardio").val().trim(),
//     };

//     console.log(newRecord);

//     $.ajax({
//         url: "/api/workouts",
//         type: "POST",
//         data: newRecord
//     }).then(function() {
//         console.log("worked")
//     })
// })

// $(document).ready(function () {
//     $.ajax({
//         url: '/api/workouts',
//         method: 'GET'
//     }).then(data => {
//         data.forEach(element => {
//             console.log(element.name);
//             console.log(element.distance);
//             console.log(element.duration);
//             console.log(element._id);
//             const pNew = $("<button>");
//             pNew.addClass("recentBtn")
//             pNew.attr("data-id");

//             const recentWorkout = element.name
//             pNew.prpend(recentWorkout)
//             $(".allWorkouts").append(pNew);

//         });
//     }).then(
// )

//     })

//     $(".allWorkouts").on("click", function () {

//         $.ajax({
//             url: "/api/workouts/",
//             type: "GET"
//         }).then(function (res) {
//             console.log(res);
//         }
//         );
//     });

//     $('#myModal').on('show.bs.modal', function () {
//         $('.modal-content').css('height', $(window).height() * 0.1);
//     });

//     $("closeIcon").on("click", function () {
//         location.reload()
//     })