const filterOptions = document.querySelectorAll(".filter button")

filterOptions.forEach(option => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        
        if(option.id === "brightness") {
            document.querySelector("#b-guide").classList.add("add");
            document.querySelector("#s-guide").classList.remove("add");
            document.querySelector("#i-guide").classList.remove("add");
            document.querySelector("#g-guide").classList.remove("add");
            document.querySelector("#r-guide").classList.remove("add");
            document.querySelector("#m-guide").classList.remove("add");
        } else if(option.id === "saturation") {
            document.querySelector("#b-guide").classList.remove("add");
            document.querySelector("#s-guide").classList.add("add");
            document.querySelector("#i-guide").classList.remove("add");
            document.querySelector("#g-guide").classList.remove("add");
            document.querySelector("#r-guide").classList.remove("add");
            document.querySelector("#m-guide").classList.remove("add");
        } else if(option.id === "inversion") {
            document.querySelector("#b-guide").classList.remove("add");
            document.querySelector("#s-guide").classList.remove("add");
            document.querySelector("#i-guide").classList.add("add");
            document.querySelector("#g-guide").classList.remove("add");
            document.querySelector("#r-guide").classList.remove("add");
            document.querySelector("#m-guide").classList.remove("add");
        } else if(option.id == "grayscale") {
            document.querySelector("#b-guide").classList.remove("add");
            document.querySelector("#s-guide").classList.remove("add");
            document.querySelector("#i-guide").classList.remove("add");
            document.querySelector("#g-guide").classList.add("add");
            document.querySelector("#r-guide").classList.remove("add");
            document.querySelector("#m-guide").classList.remove("add");
        }
        else if(option.id == "rotate") {
            document.querySelector("#b-guide").classList.remove("add");
            document.querySelector("#s-guide").classList.remove("add");
            document.querySelector("#i-guide").classList.remove("add");
            document.querySelector("#g-guide").classList.remove("add");
            document.querySelector("#r-guide").classList.add("add");
            document.querySelector("#m-guide").classList.remove("add");
        }
        else {
            document.querySelector("#b-guide").classList.remove("add");
            document.querySelector("#s-guide").classList.remove("add");
            document.querySelector("#i-guide").classList.remove("add");
            document.querySelector("#g-guide").classList.remove("add");
            document.querySelector("#r-guide").classList.remove("add");
            document.querySelector("#m-guide").classList.add("add");
        }
    });
});


