// Coding for download CV!
let aTag = document.getElementById("aTag");
console.log(aTag);

function downloadCV() {
  if (confirm("We are redirecting you to GitHub, are you sure ?")) {
    aTag.href = "https://github.com/rajani555/RESUME-PDF";
  } else {
    return false;
  }
}

// Coding for Our Service!
let myButton = document.querySelectorAll(".myButton");
// console.log(myButton);

myButton.forEach((element, index) => {
  // console.log(element, index);

  element.addEventListener("click", () => {
    // console.log(element);
    // console.log(element.attributes.id);
    console.log(element.attributes.id.value);

    if (element.attributes.id.value == "all") {
      document.getElementById("java-card").style.display = "block";
      document.getElementById("spring-boot-card").style.display = "block";
      document.getElementById("web-dev-card").style.display = "block";
    }

    if (element.attributes.id.value == "java") {
      document.getElementById("java-card").style.display = "block";
      document.getElementById("spring-boot-card").style.display = "none";
      document.getElementById("web-dev-card").style.display = "none";
    }

    if (element.attributes.id.value == "spring-boot") {
      document.getElementById("java-card").style.display = "none";
      document.getElementById("spring-boot-card").style.display = "block";
      document.getElementById("web-dev-card").style.display = "none";
    }

    if (element.attributes.id.value == "web-dev") {
      document.getElementById("java-card").style.display = "none";
      document.getElementById("spring-boot-card").style.display = "none";
      document.getElementById("web-dev-card").style.display = "block";
    }
  });
});

// Coding for Our Work!
let myServiceBtn = document.querySelectorAll(".service-btn");
// console.log(myServiceBtn);

let myServiceAncher = document.querySelectorAll(".service-ancher");
// console.log(myServiceAncher);

myServiceBtn.forEach((element, index) => {
  // console.log(element, index);

  element.addEventListener("click", () => {
    if (confirm("We are redirecting you to GitHub, are you sure ?")) {
      myServiceAncher[0].href = "https://github.com/rajani555/Our-Service-Docs";

      myServiceAncher[1].href = "https://github.com/rajani555/Our-Service-Docs";

      myServiceAncher[2].href = "https://github.com/rajani555/Our-Service-Docs";
    } else {
      return false;
    }
  });
});

// Coding for Our Work!
let myWorkBtn = document.querySelectorAll(".work-btn");
// console.log(myWorkBtn);

let myWorkAncher = document.querySelectorAll(".work-ancher");
// console.log(myWorkAncher);

myWorkBtn.forEach((element, index) => {
  // console.log(element);

  element.addEventListener("click", () => {
    if (confirm("We are redirecting you to GitHub, are you sure ?")) {
      myWorkAncher[0].href =
        "https://github.com/rajani555/Ecommerce_Application";

      myWorkAncher[1].href =
        "https://github.com/rajani555/Hospital_Management_System";

      myWorkAncher[2].href =
        "https://github.com/rajani555/School_Management_System";
    } else {
      return false;
    }
  });
});

// Coding for Contact!
let submitBtn = document.getElementById("submit");
// console.log(submitBtn);

submitBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textarea = document.getElementById("msg").value;

  if (name == "" || email == "" || textarea == "") {
    alert("Please fill all details!");
  } else {
    alert("Thanks for connecting...");
  }
});
