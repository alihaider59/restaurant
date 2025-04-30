AOS.init();

let linkTags = document.querySelectorAll(".link-tag");
linkTags.forEach((link) => {
  link.addEventListener("click", () => {
    linkTags.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar1");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("show");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}
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

  Image3.style.background = "url('Images/gallery3.png.webp')";
  Image3.style.backgroundSize = "cover";
  Image3.style.backgroundPosition = "center";
  Image3.style.backgroundRepeat = "no-repeat";

  Image4.style.background = "url('Images/gallery4.png.webp')";
  Image4.style.backgroundSize = "cover";
  Image4.style.backgroundPosition = "center";
  Image4.style.backgroundRepeat = "no-repeat";
});

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
});

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
});

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
});

const selected = document.querySelector(".custom-dropdown .selected");
const selectedContent = document.querySelector(
  ".custom-dropdown .selected-content"
);
const optionsContainer = document.querySelector(".custom-dropdown .options");
const optionsList = document.querySelectorAll(".custom-dropdown .options div");

selected.addEventListener("click", () => {
  optionsContainer.style.display =
    optionsContainer.style.display === "block" ? "none" : "block";
});

optionsList.forEach((option) => {
  option.addEventListener("click", () => {
    selectedContent.innerHTML = option.innerHTML;
    optionsContainer.style.display = "none";
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navsticky");
  const triggerHeight = window.innerHeight * 0.5;
  if (window.scrollY > triggerHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

window.addEventListener("scroll", function () {
  const btn = document.getElementById("btn");
  const triggerHeight = window.innerHeight * 0.5;
  if (window.scrollY > triggerHeight) {
    btn.classList.add("btnsty");
  } else {
    btn.classList.remove("btnsty");
  }
});

const fakeDate = document.getElementById("fakeDate");
const realDate = document.getElementById("realDate");
fakeDate.addEventListener("click", () => {
  realDate.showPicker();
});

realDate.addEventListener("change", () => {
  fakeDate.value = realDate.value;
});

const fakeTime = document.getElementById("fakeTime");
const realTime = document.getElementById("realTime");

fakeTime.addEventListener("click", () => {
  realTime.showPicker();
});

realTime.addEventListener("change", () => {
  fakeTime.value = realTime.value;
});




let email = document.getElementById("email");
let emailBtn = document.getElementById("emailbtn");
let bookBtn = document.getElementById("bookbtn");

let URL = "https://6810cfc727f2fdac2412e69c.mockapi.io/restuarant";

let emailURL = URL + "/Email";
let dataURL = URL + "/Data";

const postEmail = async () => {
  let emailValue = email.value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    email.placeholder = "Please enter an email!";
    return;
  }

  if (!emailPattern.test(emailValue)) {
    email.value = "";
    email.placeholder = "Invalid email format!";
    return;
  }
  try {
    let response = await fetch(emailURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
      }),
    });
    email.value = "";

    let data = await response.json();
    console.log(data);
    document.getElementById("msg2").innerText = "Successfully Posted";
  } 
  catch (error) {
    document.getElementById("msg2").innerText = "Unsuccessful Posting";
    console.error("Error:", error);
  }
};



const postBooking = async () => {
  let realDateValue = realDate.value;
  let realTimeValue = realTime.value;

  if (realDateValue === "") {
    fakeDate.placeholder = "Please set date!";
    return;
  }
  if (realTimeValue === "") {
    fakeTime.placeholder = "Please set time!";
    return;
  }

  try {
    let response = await fetch(dataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        persons: selectedContent.innerText,
        date: realDate.value,
        time: realTime.value,
      }),
    });
    realTime.value = "";
    realDate.value = "";
    fakeTime.value = "";
    fakeDate.value = "";

    let data = await response.json();
    console.log(data);
    document.getElementById("msg").innerText = "Successfully Posted";
  }
   catch (error) {
    document.getElementById("msg").innerText = "Unsuccessful Posting";
    console.error("Error:", error);
  }
};

emailBtn.addEventListener("click", postEmail);
bookBtn.addEventListener("click", postBooking);
