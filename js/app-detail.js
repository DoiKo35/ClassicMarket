function getAppId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

const detailContainer = document.getElementById("app-detail");

function showAppDetail() {
    const id = getAppId();
    const app = games.find(g => g.id === id);
    // 🔥 Меняем favicon на иконку приложения
    const favicon = document.getElementById("dynamic-favicon");

    if (favicon && app.img) {
        favicon.href = app.img;
    }

    if (!app) {
        detailContainer.innerHTML = `<p style="padding:20px;">Приложение не найдено 😕</p>`;
        document.title = "ClassicMarket"; // fallback
        return;
    }

    // 🚀 Меняем title страницы
    document.title = `ClassicMarket — ${app.title}`;

    detailContainer.innerHTML = `
        <div class="app-full-detail">

            <div class="app-header-box">
                <img src="${app.img}" alt="${app.title} icon" class="app-icon-detail">
                <div class="app-main-info">
                    <h1>${app.title}</h1>
                    <div class="subline">Автор: ${app.author}</div>
                    <div class="subline">Жанр: ${app.genre}</div>
                </div>
            </div>

            <div class="app-buttons-row">
                <button class="btn-install-full" onclick="window.open('${app.fileUrl}','_blank')">
                    Установить
                </button>
                <div class="subline">Версия: ${app.version} | Android: ${app.minAndroid}+</div>
            </div>
             
            <div class="app-buttons-row">
                <div class="subline">Оценка: ★ ${app.rating}</div>
            </div>

            <div class="app-screens-list">
                ${app.screenshots.map(s => `<img src="${s}" alt="Screenshot">`).join("") || "Скриншоты отсутствуют."}
            </div>

            <div class="review-box">
                <strong>Описание:</strong><br>
                ${app.desc || "Описание отсутствует."}
            </div>

        </div>
    `;
}


// запускаем
document.addEventListener("DOMContentLoaded", showAppDetail);
