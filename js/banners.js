const bannerImgs = [
    "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/refs/heads/main/img/banners/banner1.PNG",
    "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/refs/heads/main/img/banners/banner2.PNG",
    "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/refs/heads/main/img/banners/banner3.PNG",
    "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/refs/heads/main/img/banners/banner4.PNG",
    "https://raw.githubusercontent.com/DoiKo35/ClassicMarket/refs/heads/main/img/banners/banner5.PNG"
];

let bidx = 0;
const banEl = document.getElementById("banner");

// создаём все картинки
bannerImgs.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    if (i === 0) img.classList.add("active");
    banEl.appendChild(img);
});

function nextBanner() {
    const images = banEl.querySelectorAll("img");
    images.forEach(img => img.classList.remove("active"));
    bidx = (bidx + 1) % images.length;
    images[bidx].classList.add("active");
}

setInterval(nextBanner, 5000);
