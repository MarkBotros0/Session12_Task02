var data = [
    { id: 1, img: "./assets/images/1.jpg", title: "egypt tangbia", brief: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 2, img: "./assets/images/2.jpg", title: "olling phisotip", brief: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 3, img: "./assets/images/3.jpg", title: "cortia dyna", brief: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 4, img: "./assets/images/4.jpg", title: "sysne of dubai", brief: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 5, img: "./assets/images/5.jpg", title: "egypt tangbia", brief: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 6, img: "./assets/images/6.jpg", title: "olling phisotip", brief: "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 7, img: "./assets/images/7.jpg", title: "cortia dyna", brief: "7Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 8, img: "./assets/images/8.jpg", title: "sysne of dubai", brief: "8Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 9, img: "./assets/images/9.jpg", title: "egypt tangbia", brief: "9Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 10, img: "./assets/images/10.jpg", title: "olling phisotip", brief: "10Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 11, img: "./assets/images/11.jpg", title: "cortia dyna", brief: "11Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." },
    { id: 12, img: "./assets/images/12.jpg", title: "sysne of dubai", brief: "12Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae aliquid in rem facere quisquam error ab quibusdam repudiandae libero voluptate explicabo, mollitia expedita! Et quidem ut officiis, ullam voluptate aut optio consequuntur laudantium nemo eligendi perferendis eos repellendus eveniet vitae vero maxime autem similique molestias? Numquam consequuntur voluptas in." }
]

function closeModal() {
    $(".my-modal-view").toggleClass("d-none")
}
function openModal(title, brief, img) {
    $(".my-modal-view").toggleClass("d-none")
    $(".place-name").text(title)
    $(".place-brief").text(brief)
    $(".place-img").attr("src", img)
    console.log("hello")
}
function trimText(text) {
    var maxLength = 90
    var trimmedString = text.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    return trimmedString;
}



$(document).ready(function () {

    $("#close-btn").on('click', function () {
        closeModal()
    });

    for (let i = 0; i < data.length; i++) {
        //Card Formation
        var card = $("<div class='card rounded-0 border-0'></div>")
        var img = $("<img src='" + data[i].img + "' class='card-img-top rounded-0'>")
        var cardBody = $("<div class='card-body'></div>")
        var cardTitle = $("<h1 class='text-center text-uppercase fw-bold'>" + data[i].title + "</h1>")
        var cardBrief = $("<h2 class='text-center'>" + trimText(data[i].brief) + "</h2>")
        var cardFooter = $("<div class='d-flex justify-content-between mt-3'></div>")
        var dateWrapper = $("<div class='d-flex'></div>")
        var dateIcon = $("<i class='fa-regular fa-calendar'></i>")
        var dateText = $("<h3 class='ms-1'>Aug 5,2013</h3>")
        var commentsWrapper = $("<div class='d-flex'></div>")
        var commentsIcon = $("<i class='fa-regular fa-comments'></i>")
        var commentsText = $("<h3 class='ms-1'>22 Comments</h3>")

        $(card).append(img).append($(cardBody).append(cardTitle).append(cardBrief).append(cardFooter))
        $(cardFooter).append($(dateWrapper).append(dateIcon).append(dateText)).append($(commentsWrapper).append(commentsIcon).append(commentsText))
        $(".my-grid").append(card)

        $(card).on('click', function () {
            openModal(data[i].title, data[i].brief, data[i].img)
        });
    }


});