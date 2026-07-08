// ==============================
// OUT OF THE BOX
// Testimonials
// ==============================

const testimonials = [

`"So practical and beautiful. I could focus on cooking without worrying about the tablescape. Totally worth the price. Thank you so much!"`,

`"Beautifully packed and clearly labelled. It enhanced our event and I would highly recommend it for any occasion. It was completely hassle-free!"`,

`"Fabulous box. Everything was beautifully presented. I loved that you included a reference picture so I could recreate the table perfectly."`,

`"The last time I hosted Sheva Brochos I spent hours running around buying everything. This time it was delivered to my door—and I actually saved money!"`

];

let current = 0;

const quote = document.getElementById("quote");

function showTestimonial() {

    quote.style.opacity = 0;

    setTimeout(() => {

        quote.innerHTML = testimonials[current];

        quote.style.opacity = 1;

        current++;

        if(current >= testimonials.length){

            current = 0;

        }

    },400);

}

showTestimonial();

setInterval(showTestimonial,5000);
Now your folder should look like this
Out-of-the-Box/

index.html

style.css

script.js

images/

    hero.jpg

    logo.png

    gallery1.jpg

    gallery2.jpg

    gallery3.jpg

    gallery4.jpg

    gallery5.jpg

    gallery6.jpg

    gallery7.jpg

    gallery8.jpg

    gallery9.jpg

    gallery10.jpg
