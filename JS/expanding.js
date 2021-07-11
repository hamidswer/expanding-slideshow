const container=document.querySelectorAll(".image-span");
const images=document.querySelectorAll(".images");
console.log(container);
console.log(images);

container.forEach(e=> {
        e.addEventListener("click", ()=> {
                container.forEach(e=> {
                        if (e.classList.contains("pre-active") || e.classList.contains("active")) {
                            e.classList.remove("pre-active");
                            e.classList.remove("active");
                            e.classList.add("deactive");
                        }
                        
                    });
                    e.classList.remove("deactive");
                    e.classList.add("active");

            });
    });