//nav bar hide and show
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

//scroll through JS on single page
// const homeLink = document.getElementById("home-l");
// const workLink = document.getElementById("work-l");
// const blogLink = document.getElementById("blog-l");
// const aboutLink = document.getElementById("about-l");

const homePageDiv = document.getElementById("home-p");
const workPageDiv = document.getElementById("work-p");
const blogPageDiv = document.getElementById("blog-p");
const aboutPageDiv = document.getElementById("about-p");

// homeLink.addEventListener("click", e => {
//   e.preventDefault();
//   homePageDiv.scrollIntoView();
// });

// workLink.addEventListener("click", e => {
//   e.preventDefault();
//   workPageDiv.scrollIntoView();
// });

// blogLink.addEventListener("click", e => {
//   e.preventDefault();
//   blogPageDiv.scrollIntoView();
// });

// aboutLink.addEventListener("click", e => {
//   e.preventDefault();
//   aboutPageDiv.scrollIntoView();
// });

var clickCheck = document.getElementById("navbar");
clickCheck.addEventListener('click', e => {
  e.preventDefault();

  if(e.target.id == "home-l"){
    homePageDiv.scrollIntoView();

  }else if(e.target.id == "work-l"){
    workPageDiv.scrollIntoView();

  }else if(e.target.id == "blog-l"){
    blogPageDiv.scrollIntoView();

  }else if(e.target.id == "about-l"){
    aboutPageDiv.scrollIntoView();

  }
  // switch (e.target.id) {
  //   case "home-l":
  //     homePageDiv.scrollIntoView();
  //     break;
  //   case "work-l":
  //     workPageDiv.scrollIntoView();
  //     break;
  //   case "blog-l":
  //     blogPageDiv.scrollIntoView();
  //     break;
  //   case "about-l":
  //     aboutPageDiv.scrollIntoView();
  //     break;
  //   default:
  //     break;
  // }
});