document
    .getElementById("learnMoreButton")
    .addEventListener("click", () => {

        document
            .getElementById("main")
            .classList.add("d-none");

        document
            .getElementById("courseFrame")
            .classList.remove("d-none");

    });