// const images = document.querySelectorAll('.hero-image');
// const heading = document.getElementById('hero-heading');
// const paragraph = document.getElementById('hero-paragraph');

// const messages = [
//   {
//     title: "Your Trusted Recruitment Partner in Ghana.",
//     text: "With a strong operational framework and access to large pools of qualified professionals, we help foreign companies hire confidently and efficiently."
//   },
//   {
//     title: "Access Ghana’s Most  Reliable Skilled Workforce.",
//     text: "A trusted bridge between skilled labour and serious employers."
//   },
//   {
//     title: "Recruit Smarter From Ghana",
//     text: "Streamline your hiring process with insight-driven strategies and real human connection."
//   },
//   {
//     title: "Connect with our sourced, screened and ready Ghanaian workers",
//     text: "Connect with skilled Ghanaian workers without the stress of recruitment delays."
//   }
// ];

// let current = 0;

// function showNextImage() {
//   images[current].classList.remove('active');

//   current = (current + 1) % images.length;

//   images[current].classList.add('active');

//   heading.textContent = messages[current].title;
//   paragraph.textContent = messages[current].text;
// }

// setInterval(showNextImage, 5000);


const images = document.querySelectorAll(".hero-image");

const heading = document.getElementById("hero-heading");
const paragraph = document.getElementById("hero-paragraph");

const slides = [

{
title:"Engineering Excellence From Concept To Completion",
text:"From astro turf facilities to large-scale commercial and infrastructure developments, we build projects that stand the test of time."
},

{
title:"Building Ghana's Future Through World-Class Construction.",
text:"Delivering innovative construction solutions that support communities, businesses, and national development."
},

{
title:"Trusted Experts In Stadium & Sports Infrastructure.",
text:"Creating exceptional sports facilities that inspire athletes, communities, and future generations."
},

{
title:"Transforming Vision Into Lasting Structures.",
text:"Combining engineering expertise, quality craftsmanship, and modern technology to deliver outstanding results."
}

];

let current = 0;

setInterval(() => {

images[current].classList.remove("active");

current = (current + 1) % images.length;

images[current].classList.add("active");

heading.textContent = slides[current].title;
paragraph.textContent = slides[current].text;

}, 5000);