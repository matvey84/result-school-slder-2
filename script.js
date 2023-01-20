const slideButtons = document.querySelectorAll(".slide-button");
const sideBar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");

const container = document.querySelector(".container");

function createSlider() {
  const sideBarData = [
    {
      title: "Minneapolis, MN, USA",
      paragraph: "Kevin Nalty",
      src: "https://images.unsplash.com/photo-1610599083971-83a1abb23a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      gradient: "221.87deg, #130b05 1%, #4d2c15 128%",
    },
    {
      title: "New York, United States",
      paragraph: "Andre Benz",
      src: "https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      gradient: "221.87deg, #230710 1%, #561127 128%",
    },
    {
      title: "New York, United States",
      paragraph: "Andre Benz",
      src: "https://images.unsplash.com/photo-1512864733469-8c0d7cc3ccf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      gradient: "221.87deg, #280307 1%, #640712 128%",
    },
    {
      title: "El Acebo, Spagna",
      paragraph: "Daniele Colucci",
      src: "https://images.unsplash.com/photo-1597739239353-50270a473397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      gradient: "221.87deg, #293540 1%, #516a81 128%",
    },
    {
      title: "Seoul, South Korea",
      paragraph: "Ciaran O'Brien",
      src: "https://images.unsplash.com/photo-1552481219-727716e58e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      gradient: "221.87deg, #222429 1%, #444851 128%",
    },
  ];
  sideBarData.forEach((data) => {
    const sideBarItem = document.createElement("div");
    const sideBarItemTitle = document.createElement("h1");
    const sideBarItemPargarph = document.createElement("p");

    sideBarItem.classList.add("sidebar-item");

    sideBarItemTitle.innerText = data.title;
    sideBarItemPargarph.innerText = data.paragraph;

    sideBarItem.style.background = `linear-gradient(${data.gradient})`;
    sideBarItem.append(sideBarItemTitle);
    sideBarItem.append(sideBarItemPargarph);
    
    sideBar.append(sideBarItem);
  });
  createSliderImage(sideBarData)
}

createSlider();

function createSliderImage(sideBarData) {
  sideBarData.reverse().forEach((data) => {
  const sliderImage = document.createElement("div");
  sliderImage.classList.add("slider-image");
  sliderImage.style.backgroundImage = `url(${data.src})`;
  mainSlide.append(sliderImage);
  })
}

const sideBarItemAmount = document.querySelectorAll(".sidebar-item").length;
const slidesItemAmount = document.querySelectorAll(".slider-image").length;
const initialSideBarPosition = `-${(sideBarItemAmount-1) * 100}vh`;
let currentSlideIndex = 0;
sideBar.style.top = initialSideBarPosition;

function moveSlide(e) {
  if (
    e.target.classList.contains("up-button") ||
    e.target.classList.contains("fa-arrow-up")
  ) {
    currentSlideIndex++;
    if (currentSlideIndex === slidesItemAmount) {
      currentSlideIndex = 0;
    }
  }
  if (
    e.target.classList.contains("down-button") ||
    e.target.classList.contains("fa-arrow-down")
  ) {
    
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slidesItemAmount - 1;
    } 
    
  }

  const containerHight = container.clientHeight;
  mainSlide.style.transform = `translateY(-${
    currentSlideIndex * containerHight
  }px)`;
  sideBar.style.transform = `translateY(${
    currentSlideIndex * containerHight
  }px)`;
}

slideButtons.forEach((button) => button.addEventListener("click", moveSlide));
