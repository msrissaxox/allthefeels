const sectionOne = document.querySelector('.section1');

const options = { };


const observer =
 new IntersectionObserver(function(entries, observer) {
entries.forEach(entry=> {
    console.log(entry.target);
});
 }, options);

 observer.observe(sectionOne);

 //Using video: https://www.youtube.com/watch?v=T8EYosX4NOo
 