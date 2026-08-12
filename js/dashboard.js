const student = {
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    status: "Active Student",
    studentSince: "2026",
     enrolledClasses: [
        {
            name: "Dinghy Sailing 101",
            status: "Enrolled",
            description:
                "An introduction to the fundamentals of sailing a small dinghy.",
            buttonText: "Open Class",
            buttonUrl:
                "https://gerardogala.github.io/DinghySailing101/"
        }
    ]
};
document
    .getElementById("studentName")
    .textContent = student.name;

document
    .getElementById("profileName")
    .textContent = student.name;

document
    .getElementById("profileEmail")
    .textContent = student.email;

    const classLink =
    document.getElementById("dinghy101Link");

classLink.href =
    `https://gerardogala.github.io/DinghySailing101/?studentId=${encodeURIComponent(student.email)}&studentName=${encodeURIComponent(student.name)}`;