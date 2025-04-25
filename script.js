let linkTags = document.querySelectorAll(".link-tag");
linkTags.forEach((link) => {
    link.addEventListener("click", () => {
        linkTags.forEach((link) => link.classList.remove("active"))
        link.classList.add("active");  
    });
});


