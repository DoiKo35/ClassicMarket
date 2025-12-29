const content = document.getElementById("content");
const search = document.getElementById("search");
const tabs = document.querySelectorAll(".tabs button");

// рендер листа
function renderList(filter="all", query=""){
    const list = games.filter(g =>
        (filter==="all" || g.section===filter) &&
        g.title.toLowerCase().includes(query.toLowerCase())
    );

    content.innerHTML = `<div class="games-grid"></div>`;
    const grid = content.querySelector(".games-grid");

    list.forEach(game => {
        const c = document.createElement("div");
        c.classList.add("game-card");

        c.innerHTML = `
            <img src="${game.img}" alt="${game.title}">
            <div class="info">
                <h3>${game.title}</h3>
                <div class="meta">★ ${game.rating} · Android: ${game.minAndroid}</div>
            </div>
        `;

        c.onclick = () => {
            window.location = `app.html?id=${game.id}`;
        };
        grid.appendChild(c);
});

}

search.addEventListener("input", () => {
    const active = document.querySelector(".tabs button.active")?.dataset.section || "all";
    renderList(active, search.value);
});

// табы
tabs.forEach(btn => {
    btn.onclick = () => {
        tabs.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        renderList(btn.dataset.section, search.value);
    }
});

// старт
document.addEventListener("DOMContentLoaded", () => {
    renderList();
    document.querySelector(".tabs button[data-section='all']").classList.add("active");
});

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffleArray(games); // перемешиваем массив один раз
