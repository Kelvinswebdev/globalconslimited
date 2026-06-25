const reveals = document.querySelectorAll(
'.reveal-left, .reveal-right, .reveal-up'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('active');

}

});

},{
threshold:0.2
});

reveals.forEach(item=>{
observer.observe(item);
});