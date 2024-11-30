const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const ulEl = document.querySelector(".gallery");
const lightboxImgEl = document.querySelector(".lightbox__image");
const modalEl = document.querySelector(".lightbox");
const buttonEl = document.querySelector(
  '.lightbox__button[data-action="close-lightbox"]'
);
const overlayEl = document.querySelector(".lightbox__overlay");

function closeModal() {
  lightboxImgEl.src = "";
  lightboxImgEl.alt = "";
  modalEl.classList.remove("is-open");
}

for (let i = 0; i < galleryItems.length; i++) {
  const item = galleryItems[i];

  const liEl = document.createElement("li");
  liEl.classList.add("gallery__item");

  const aEl = document.createElement("a");
  aEl.classList.add("gallery__link");
  // aEl.href = item.original;

  const imgEL = document.createElement("img");
  imgEL.classList.add("gallery__image");
  imgEL.src = item.original;
  imgEL.alt = item.description;
  imgEL.dataset.source = item.original;

  aEl.append(imgEL);
  liEl.append(aEl);
  ulEl.append(liEl);
}

ulEl.addEventListener("click", (e) => {
  lightboxImgEl.src = e.target.src;
  lightboxImgEl.alt = e.target.alt;

  modalEl.classList.add("is-open");

  buttonEl.addEventListener("click", () => {
    closeModal();
  });

  overlayEl.addEventListener("click", () => {
    closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  buttonEl.removeEventListener("click", () => {
    closeModal();
  });

  overlayEl.removeEventListener("click", () => {
    closeModal();
  });

  document.removeEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
