let linkTags = document.querySelectorAll(".link-tag");
linkTags.forEach((link) => {
    link.addEventListener("click", () => {
        linkTags.forEach((link) => link.classList.remove("active"))
        link.classList.add("active");  
    });
});

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar1');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('show');
    });
};

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('show');
    });
};
let Section4 = document.querySelector(".sec4-imgs");
let Lunch = document.querySelector("#lunch");
let Special = document.querySelector("#special");
let Breakfast = document.querySelector("#breakfast");
let Dinner = document.querySelector("#dinner");

let Image1 = document.querySelector(".img1");
let Image2 = document.querySelector(".img2");
let Image3 = document.querySelector(".img-1");
let Image4 = document.querySelector(".img-2");

Special.addEventListener("click", (e) => {
    e.preventDefault(); 

    Image1.style.background = "url('Images/gallery1.png.webp')";
    Image1.style.backgroundSize = "cover";
    Image1.style.backgroundPosition = "center";
    Image1.style.backgroundRepeat = "no-repeat";

    Image2.style.background = "url('Images/gallery2.png.webp')";
    Image2.style.backgroundSize = "cover";
    Image2.style.backgroundPosition = "center";
    Image2.style.backgroundRepeat = "no-repeat";
})

Lunch.addEventListener("click", (e) => {
    e.preventDefault(); 

    Image1.style.background = "url('Images/gallery2.png.webp')";
    Image1.style.backgroundSize = "cover";
    Image1.style.backgroundPosition = "center";
    Image1.style.backgroundRepeat = "no-repeat";

    Image2.style.background = "url('Images/gallery1.png.webp')";
    Image2.style.backgroundSize = "cover";
    Image2.style.backgroundPosition = "center";
    Image2.style.backgroundRepeat = "no-repeat";

    Image3.style.background = "url('Images/gallery3.png.webp')";
    Image3.style.backgroundSize = "cover";
    Image3.style.backgroundPosition = "center";
    Image3.style.backgroundRepeat = "no-repeat";

    Image4.style.background = "url('Images/gallery4.png.webp')";
    Image4.style.backgroundSize = "cover";
    Image4.style.backgroundPosition = "center";
    Image4.style.backgroundRepeat = "no-repeat";

})

Breakfast.addEventListener("click", (e) => {
    e.preventDefault(); 

    Image1.style.background = "url('Images/gallery1.png.webp')";
    Image1.style.backgroundSize = "cover";
    Image1.style.backgroundPosition = "center";
    Image1.style.backgroundRepeat = "no-repeat";

    Image2.style.background = "url('Images/gallery2.png.webp')";
    Image2.style.backgroundSize = "cover";
    Image2.style.backgroundPosition = "center";
    Image2.style.backgroundRepeat = "no-repeat";

    Image3.style.background = "url('Images/gallery3.png.webp')";
    Image3.style.backgroundSize = "cover";
    Image3.style.backgroundPosition = "center";
    Image3.style.backgroundRepeat = "no-repeat";

    Image4.style.background = "url('Images/gallery4.png.webp')";
    Image4.style.backgroundSize = "cover";
    Image4.style.backgroundPosition = "center";
    Image4.style.backgroundRepeat = "no-repeat";

})

Dinner.addEventListener("click", (e) => {
    e.preventDefault(); 

    Image1.style.background = "url('Images/gallery3.png.webp')";
    Image1.style.backgroundSize = "cover";
    Image1.style.backgroundPosition = "center";
    Image1.style.backgroundRepeat = "no-repeat";

    Image2.style.background = "url('Images/gallery4.png.webp')";
    Image2.style.backgroundSize = "cover";
    Image2.style.backgroundPosition = "center";
    Image2.style.backgroundRepeat = "no-repeat";

    Image3.style.background = "url('Images/gallery1.png.webp')";
    Image3.style.backgroundSize = "cover";
    Image3.style.backgroundPosition = "center";
    Image3.style.backgroundRepeat = "no-repeat";

    Image4.style.background = "url('Images/gallery2.png.webp')";
    Image4.style.backgroundSize = "cover";
    Image4.style.backgroundPosition = "center";
    Image4.style.backgroundRepeat = "no-repeat";

})




