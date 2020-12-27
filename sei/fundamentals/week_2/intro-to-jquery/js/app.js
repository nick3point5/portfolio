const img = document.querySelectorAll('img')[0]

let all = $('img')
const fst = all.eq(0)
fst.attr('src','https://picsum.photos/id/236/200/300')
console.log(fst)

all.css('border', '4px solid red')

// all=[...all]

// all.forEach(img => {
//     $(img).css('border', '4px solid red')
// });

$('h1').css('color','white')
    .text('jQuery Master')

$('article').append('<button class="like">Like</button>')

$('.like').on('click', function (event) {
        $(event.target).toggleClass("liked")

})

