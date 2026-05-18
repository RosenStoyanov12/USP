let selectedImages = [];
let currentGalleryIndex = 0;

const sampleCars = [
    {
    id: 1,
    brand: "BMW",
    model: "320d",
    year: 2018,
    price: 14500,
    mileage: 180000,
    fuel: "Дизел",
    gearbox: "Автоматична",
    power: "190 к.с.",
    color: "Черен",
    extras: "Навигация, кожен салон, парктроник, климатроник",
    description: "BMW 320d Touring в много добро състояние. Автомобилът е подходящ както за градско, така и за извънградско шофиране. Разполага с автоматична скоростна кутия, икономичен дизелов двигател, просторен багажник и комфортен интериор.",
    image: "images/bmw-320d/1.png",
    images: [
        "images/bmw-320d/1.png",
        "images/bmw-320d/2.png",
        "images/bmw-320d/3.png",
        "images/bmw-320d/4.png",
        "images/bmw-320d/5.png",
        "images/bmw-320d/6.png"
    ],
    owner: "system"
},
    {
    id: 2,
    brand: "Audi",
    model: "A4",
    year: 2017,
    price: 13500,
    mileage: 165000,
    fuel: "Дизел",
    gearbox: "Автоматична",
    power: "150 к.с.",
    color: "Сив",
    extras: "Навигация, парктроник, климатроник, темпомат, мултимедия, лети джанти, борд компютър",
    description: "Audi A4 Avant в добро състояние, подходящо за семейно и ежедневно ползване. Автомобилът разполага с автоматична скоростна кутия, комфортен интериор, голям багажник и икономичен дизелов двигател.",
    image: "images/audi-a4/1.png",
    images: [
        "images/audi-a4/1.png",
        "images/audi-a4/2.png",
        "images/audi-a4/3.png",
        "images/audi-a4/4.png",
        "images/audi-a4/5.png",
        "images/audi-a4/6.png"
    ],
    owner: "system"
},
    {
    id: 3,
    brand: "Mercedes-Benz",
    model: "C 220 d 4MATIC",
    year: 2019,
    price: 23900,
    mileage: 168000,
    fuel: "Дизел",
    gearbox: "Автоматична",
    power: "194 к.с.",
    color: "Бял",
    extras: "4MATIC, навигация, LED светлини, парктроник, климатроник, темпомат, мултифункционален волан, ел. багажник, лети джанти",
    description: "Mercedes-Benz C 220 d 4MATIC комби в много добро визуално състояние. Просторен и комфортен автомобил с икономичен дизелов двигател, автоматична скоростна кутия и практичен багажник. Подходящ както за градско, така и за дълъг път.",
    image: "images/mercedes-c220d/1.png",
    images: [
        "images/mercedes-c220d/1.png",
        "images/mercedes-c220d/2.png",
        "images/mercedes-c220d/3.png",
        "images/mercedes-c220d/4.png",
        "images/mercedes-c220d/5.png",
        "images/mercedes-c220d/6.png"
    ],
    owner: "system"
},
    {
    id: 4,
    brand: "Volkswagen",
    model: "Golf 7",
    year: 2016,
    price: 9450,
    mileage: 190000,
    fuel: "Бензин",
    gearbox: "Ръчна",
    power: "125 к.с.",
    color: "Син",
    extras: "Климатик, парктроник, Bluetooth, мултимедия, лети джанти, борд компютър, темпомат",
    description: "Volkswagen Golf 7 в добро техническо и визуално състояние. Практичен и икономичен автомобил, подходящ за градско шофиране и дълъг път. Колата е удобна, лесна за поддръжка и с нисък разход.",
    image: "images/volkswagen-golf-7/1.webp",
    images: [
        "images/volkswagen-golf-7/1.webp",
        "images/volkswagen-golf-7/2.webp",
        "images/volkswagen-golf-7/3.webp",
        "images/volkswagen-golf-7/4.webp",
        "images/volkswagen-golf-7/5.webp",
        "images/volkswagen-golf-7/6.webp"
    ],
    owner: "system"
},
    {
    id: 5,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    price: 17100,
    mileage: 85000,
    fuel: "Хибрид",
    gearbox: "Автоматична",
    power: "122 к.с.",
    color: "Червен",
    extras: "Камера за заден ход, адаптивен круиз контрол, асистент за лента, климатроник, мултимедия, Bluetooth, парктроник",
    description: "Toyota Corolla Hybrid в отлично състояние. Надежден и икономичен автомобил с автоматична скоростна кутия и хибридно задвижване. Подходящ за ежедневно ползване, градско шофиране и извънградски пътувания.",
    image: "images/toyota-corolla/1.webp",
    images: [
        "images/toyota-corolla/1.webp",
        "images/toyota-corolla/2.webp",
        "images/toyota-corolla/3.webp",
        "images/toyota-corolla/4.webp",
        "images/toyota-corolla/5.webp",
        "images/toyota-corolla/6.webp"
    ],
    owner: "system"
},
    {
    id: 6,
    brand: "Ford",
    model: "Focus",
    year: 2015,
    price: 6900,
    mileage: 210000,
    fuel: "Бензин",
    gearbox: "Ръчна",
    power: "125 к.с.",
    color: "Сребрист",
    extras: "Климатик, подгрев на стъкла, USB, Bluetooth, мултимедия, борд компютър, ел. стъкла",
    description: "Ford Focus в добро състояние, подходящ за градско и извънградско шофиране. Автомобилът е удобен, практичен и с нормален разход. Подходящ избор за първа кола или ежедневна употреба.",
    image: "images/ford-focus/1.webp",
    images: [
        "images/ford-focus/1.webp",
        "images/ford-focus/2.webp",
        "images/ford-focus/3.webp",
        "images/ford-focus/4.webp",
        "images/ford-focus/5.webp",
        "images/ford-focus/6.webp"
    ],
    owner: "system"
}
];

function seedUsers() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([
            {
                name: "Admin",
                username: "admin",
                password: "admin123"
            }
        ]));
    }
}

function seedCars() {
    if (!localStorage.getItem("sampleCarsLoaded")) {
        localStorage.setItem("cars", JSON.stringify(sampleCars));
        localStorage.setItem("sampleCarsLoaded", "true");
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getCars() {
    return JSON.parse(localStorage.getItem("cars")) || [];
}

function saveCars(cars) {
    localStorage.setItem("cars", JSON.stringify(cars));
}

function getCurrentUser() {
    return localStorage.getItem("currentUser");
}

function isLoggedIn() {
    return Boolean(getCurrentUser());
}

function getFavoritesKey() {
    return "favorites_" + getCurrentUser();
}

function getFavorites() {
    if (!isLoggedIn()) {
        return [];
    }

    return JSON.parse(localStorage.getItem(getFavoritesKey())) || [];
}

function saveFavorites(favorites) {
    if (isLoggedIn()) {
        localStorage.setItem(getFavoritesKey(), JSON.stringify(favorites));
    }
}

function formatPrice(price) {
    return Number(price).toLocaleString("bg-BG");
}

function formatMileage(mileage) {
    return Number(mileage).toLocaleString("bg-BG");
}

function getCarImages(car) {
    if (Array.isArray(car.images) && car.images.length > 0) {
        return car.images;
    }

    if (car.image) {
        return [car.image];
    }

    return [];
}

function updateNavigation() {
    const loginNav = document.getElementById("loginNav");
    const profileNav = document.getElementById("profileNav");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginNav) {
        loginNav.style.display = isLoggedIn() ? "none" : "inline-block";
    }

    if (profileNav) {
        profileNav.style.display = isLoggedIn() ? "inline-block" : "none";
    }

    if (logoutBtn) {
        logoutBtn.style.display = isLoggedIn() ? "inline-block" : "none";
        logoutBtn.onclick = function() {
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        };
    }
}

function protectPages() {
    const carForm = document.getElementById("carForm");
    const profileWelcome = document.getElementById("profileWelcome");

    if ((carForm || profileWelcome) && !isLoggedIn()) {
        window.location.href = "login.html";
    }
}

function goToDetails(id) {
    currentGalleryIndex = 0;
    window.location.href = "car-details.html?id=" + id;
}

function goToLogin() {
    window.location.href = "login.html";
}

function isFavoriteCar(id) {
    return getFavorites().includes(id);
}

function favoriteButton(car) {
    const activeClass = isLoggedIn() && isFavoriteCar(car.id) ? " active" : "";
    return `<button class="favorite-icon${activeClass}" onclick="favoriteClick(event, ${car.id})">♥</button>`;
}

function favoriteClick(event, id) {
    event.stopPropagation();

    if (!isLoggedIn()) {
        goToLogin();
        return;
    }

    toggleFavorite(id);
}

function toggleFavorite(id) {
    let favorites = getFavorites();

    if (favorites.includes(id)) {
        favorites = favorites.filter(function(item) {
            return item !== id;
        });
    } else {
        favorites.push(id);
    }

    saveFavorites(favorites);

    if (document.getElementById("carsContainer")) {
        filterCars();
    }

    renderProfile();
    renderDetailsPage();
}

function createCarCard(car, mode) {
    const card = document.createElement("div");
    card.className = "car-card";
    card.onclick = function() {
        goToDetails(car.id);
    };

    const images = getCarImages(car);
    const imageHtml = images.length > 0
        ? `<img src="${images[0]}" alt="${car.brand} ${car.model}">`
        : `<span>${car.brand}<br>${car.model}</span>`;

    let bottomButton = "";

    if (mode === "favorites") {
        bottomButton = `<button class="delete-btn" onclick="removeFavoriteClick(event, ${car.id})">Премахни от любими</button>`;
    }

    if (mode === "mine") {
        bottomButton = `<button class="delete-btn" onclick="deleteCarClick(event, ${car.id})">Изтрий обявата</button>`;
    }

    card.innerHTML = `
        ${favoriteButton(car)}
        <div class="car-image">${imageHtml}</div>
        <div class="car-info">
            <h3>${car.brand} ${car.model}</h3>
            <p class="price">${formatPrice(car.price)} €</p>
            <p><strong>Година:</strong> ${car.year}</p>
            <p><strong>Пробег:</strong> ${formatMileage(car.mileage)} км.</p>
            <p><strong>Гориво:</strong> ${car.fuel}</p>
            <p><strong>Скоростна кутия:</strong> ${car.gearbox}</p>
            <p><strong>Мощност:</strong> ${car.power}</p>
            <p><strong>Цвят:</strong> ${car.color}</p>
            <p><strong>Екстри:</strong> ${car.extras}</p>
            <p class="description"><strong>Описание:</strong> ${car.description}</p>
            ${bottomButton}
        </div>
    `;

    return card;
}

function createSimilarCard(car) {
    const card = document.createElement("div");
    card.className = "similar-card";
    card.onclick = function() {
        goToDetails(car.id);
    };

    const images = getCarImages(car);
    const imageHtml = images.length > 0
        ? `<img src="${images[0]}" alt="${car.brand} ${car.model}">`
        : `<span>${car.brand}<br>${car.model}</span>`;

    card.innerHTML = `
        <div class="similar-image">${imageHtml}</div>
        <div class="similar-info">
            <h3>${car.brand} ${car.model}</h3>
            <div class="similar-price">${formatPrice(car.price)} €</div>
            <p>${formatMileage(car.mileage)} км</p>
            <p>${car.year} г. | ${car.fuel}</p>
            <p>${car.gearbox}</p>
        </div>
    `;

    return card;
}

function removeFavoriteClick(event, id) {
    event.stopPropagation();

    const favorites = getFavorites().filter(function(item) {
        return item !== id;
    });

    saveFavorites(favorites);
    renderProfile();
}

function deleteCarClick(event, id) {
    event.stopPropagation();

    const cars = getCars().filter(function(car) {
        return car.id !== id;
    });

    saveCars(cars);

    getUsers().forEach(function(user) {
        const key = "favorites_" + user.username;
        const favorites = JSON.parse(localStorage.getItem(key)) || [];
        const updated = favorites.filter(function(item) {
            return item !== id;
        });

        localStorage.setItem(key, JSON.stringify(updated));
    });

    renderProfile();
}

function displayCars(cars) {
    const container = document.getElementById("carsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (cars.length === 0) {
        container.innerHTML = `<div class="empty-box">Няма намерени автомобили.</div>`;
        return;
    }

    cars.forEach(function(car) {
        container.appendChild(createCarCard(car, "home"));
    });
}

function filterCars() {
    const searchText = document.getElementById("searchText").value.trim().toLowerCase();
    const brandFilter = document.getElementById("brandFilter").value.trim().toLowerCase();
    const fuelFilter = document.getElementById("fuelFilter").value.trim().toLowerCase();
    const gearboxFilter = document.getElementById("gearboxFilter").value.trim().toLowerCase();
    const maxPriceFilter = document.getElementById("maxPriceFilter").value;
    const minYearFilter = document.getElementById("minYearFilter").value;

    const filtered = getCars().filter(function(car) {
        const brand = String(car.brand).trim().toLowerCase();
        const model = String(car.model).trim().toLowerCase();
        const extras = String(car.extras).trim().toLowerCase();
        const fuel = String(car.fuel).trim().toLowerCase();
        const gearbox = String(car.gearbox).trim().toLowerCase();

        const textMatch = searchText === "" || brand.includes(searchText) || model.includes(searchText) || extras.includes(searchText);
        const brandMatch = brandFilter === "" || brand === brandFilter;
        const fuelMatch = fuelFilter === "" || fuel === fuelFilter;
        const gearboxMatch = gearboxFilter === "" || gearbox === gearboxFilter;
        const priceMatch = maxPriceFilter === "" || Number(car.price) <= Number(maxPriceFilter);
        const yearMatch = minYearFilter === "" || Number(car.year) >= Number(minYearFilter);

        return textMatch && brandMatch && fuelMatch && gearboxMatch && priceMatch && yearMatch;
    });

    displayCars(filtered);
}

function clearFilters() {
    document.getElementById("searchText").value = "";
    document.getElementById("brandFilter").value = "";
    document.getElementById("fuelFilter").value = "";
    document.getElementById("gearboxFilter").value = "";
    document.getElementById("maxPriceFilter").value = "";
    document.getElementById("minYearFilter").value = "";

    displayCars(getCars());
}

function setupHomePage() {
    const container = document.getElementById("carsContainer");

    if (!container) {
        return;
    }

    displayCars(getCars());

    document.getElementById("searchBtn").addEventListener("click", filterCars);
    document.getElementById("clearBtn").addEventListener("click", clearFilters);
    document.getElementById("searchText").addEventListener("input", filterCars);
    document.getElementById("brandFilter").addEventListener("change", filterCars);
    document.getElementById("fuelFilter").addEventListener("change", filterCars);
    document.getElementById("gearboxFilter").addEventListener("change", filterCars);
    document.getElementById("maxPriceFilter").addEventListener("input", filterCars);
    document.getElementById("minYearFilter").addEventListener("input", filterCars);
}

function setupAddCarPage() {
    const form = document.getElementById("carForm");
    const input = document.getElementById("imageInput");
    const preview = document.getElementById("imagePreviewGrid");
    const success = document.getElementById("successMessage");

    if (!form) {
        return;
    }

    input.addEventListener("change", function() {
        const files = Array.from(input.files);
        selectedImages = [];
        preview.innerHTML = "";

        const readers = files.map(function(file) {
            return new Promise(function(resolve) {
                const reader = new FileReader();

                reader.onload = function(event) {
                    resolve(event.target.result);
                };

                reader.readAsDataURL(file);
            });
        });

        Promise.all(readers).then(function(images) {
            selectedImages = images;

            selectedImages.forEach(function(image) {
                const img = document.createElement("img");
                img.src = image;
                preview.appendChild(img);
            });
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const cars = getCars();

        const car = {
            id: Date.now(),
            brand: document.getElementById("brand").value.trim(),
            model: document.getElementById("model").value.trim(),
            year: Number(document.getElementById("year").value),
            price: Number(document.getElementById("price").value),
            mileage: Number(document.getElementById("mileage").value),
            fuel: document.getElementById("fuel").value,
            gearbox: document.getElementById("gearbox").value,
            power: document.getElementById("power").value.trim() || "Няма данни",
            color: document.getElementById("color").value.trim() || "Няма данни",
            extras: document.getElementById("extras").value.trim() || "Няма данни",
            description: document.getElementById("description").value.trim() || "Няма описание",
            image: selectedImages[0] || "",
            images: selectedImages,
            owner: getCurrentUser()
        };

        cars.push(car);
        saveCars(cars);

        form.reset();
        selectedImages = [];
        preview.innerHTML = "";
        success.textContent = "Автомобилът беше добавен успешно.";

        setTimeout(function() {
            window.location.href = "profile.html";
        }, 1000);
    });
}

function setupLoginPage() {
    const form = document.getElementById("loginForm");
    const error = document.getElementById("loginError");

    if (!form) {
        return;
    }

    if (isLoggedIn()) {
        window.location.href = "profile.html";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const user = getUsers().find(function(item) {
            return item.username === username && item.password === password;
        });

        if (user) {
            localStorage.setItem("currentUser", user.username);
            window.location.href = "profile.html";
        } else {
            error.textContent = "Грешно потребителско име или парола.";
        }
    });
}

function setupRegisterPage() {
    const form = document.getElementById("registerForm");
    const error = document.getElementById("registerError");
    const success = document.getElementById("registerSuccess");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const username = document.getElementById("registerUsername").value.trim();
        const password = document.getElementById("registerPassword").value;
        const repeat = document.getElementById("registerRepeatPassword").value;
        const users = getUsers();

        error.textContent = "";
        success.textContent = "";

        if (password.length < 4) {
            error.textContent = "Паролата трябва да бъде поне 4 символа.";
            return;
        }

        if (password !== repeat) {
            error.textContent = "Паролите не съвпадат.";
            return;
        }

        if (users.some(function(user) {
            return user.username === username;
        })) {
            error.textContent = "Потребителското име вече съществува.";
            return;
        }

        users.push({
            name: name,
            username: username,
            password: password
        });

        saveUsers(users);
        success.textContent = "Регистрацията е успешна.";

        setTimeout(function() {
            window.location.href = "login.html";
        }, 900);
    });
}

function renderProfileContainer(container, cars, mode, emptyText) {
    container.innerHTML = "";

    if (cars.length === 0) {
        container.innerHTML = `<div class="empty-box">${emptyText}</div>`;
        return;
    }

    cars.forEach(function(car) {
        container.appendChild(createCarCard(car, mode));
    });
}

function renderProfile() {
    const favoritesContainer = document.getElementById("favoritesContainer");
    const myListingsContainer = document.getElementById("myListingsContainer");

    if (!favoritesContainer || !myListingsContainer) {
        return;
    }

    const username = getCurrentUser();
    const users = getUsers();
    const user = users.find(function(item) {
        return item.username === username;
    });

    const cars = getCars();
    const favorites = getFavorites();

    const favoriteCars = cars.filter(function(car) {
        return favorites.includes(car.id);
    });

    const myCars = cars.filter(function(car) {
        return car.owner === username;
    });

    document.getElementById("profileWelcome").textContent = user ? "Здравей, " + user.name + "." : "Моят профил";
    document.getElementById("profileUsername").textContent = username || "-";
    document.getElementById("favoritesCount").textContent = favoriteCars.length + " автомобила";
    document.getElementById("myListingsCount").textContent = myCars.length + " обяви";

    renderProfileContainer(favoritesContainer, favoriteCars, "favorites", "Все още нямаш запазени любими автомобили.");
    renderProfileContainer(myListingsContainer, myCars, "mine", "Все още нямаш качени автомобилни обяви.");
}

function setupProfilePage() {
    renderProfile();
}

function changeGalleryImage(index) {
    currentGalleryIndex = index;
    renderDetailsPage();
}

function changeGalleryDirection(event, direction) {
    event.stopPropagation();

    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const car = getCars().find(function(item) {
        return item.id === id;
    });

    const images = getCarImages(car);

    if (images.length === 0) {
        return;
    }

    currentGalleryIndex += direction;

    if (currentGalleryIndex < 0) {
        currentGalleryIndex = images.length - 1;
    }

    if (currentGalleryIndex >= images.length) {
        currentGalleryIndex = 0;
    }

    renderDetailsPage();
}

function renderDetailsPage() {
    const container = document.getElementById("carDetailsContainer");

    if (!container) {
        return;
    }

    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const cars = getCars();
    const car = cars.find(function(item) {
        return item.id === id;
    });

    if (!car) {
        container.innerHTML = `<div class="empty-box">Автомобилът не е намерен.</div>`;
        return;
    }

    const images = getCarImages(car);

    if (currentGalleryIndex >= images.length) {
        currentGalleryIndex = 0;
    }

    const mainImage = images.length > 0
        ? `<img src="${images[currentGalleryIndex]}" alt="${car.brand} ${car.model}">`
        : `<span>${car.brand}<br>${car.model}</span>`;

    let thumbs = "";

    if (images.length > 0) {
        images.forEach(function(image, index) {
            const active = index === currentGalleryIndex ? " active" : "";

            thumbs += `
                <div class="gallery-thumb${active}" onclick="changeGalleryImage(${index})">
                    <img src="${image}" alt="${car.brand} ${car.model}">
                </div>
            `;
        });
    } else {
        thumbs = `<div class="gallery-thumb active">${car.brand} ${car.model}</div>`;
    }

    const similar = cars
        .filter(function(item) {
            return item.id !== car.id && (item.brand === car.brand || item.fuel === car.fuel || item.gearbox === car.gearbox);
        })
        .slice(0, 10);

    container.innerHTML = `
        <div class="details-layout">
            <div class="details-main">
                <div class="details-back-row">
                    <a href="index.html" class="back-link">Назад</a>
                </div>

                <div class="gallery-main">
                    <div class="details-image">${mainImage}</div>
                    <button class="gallery-arrow gallery-prev" onclick="changeGalleryDirection(event, -1)">‹</button>
                    <button class="gallery-arrow gallery-next" onclick="changeGalleryDirection(event, 1)">›</button>
                </div>

                <div class="gallery-thumbnails">
                    ${thumbs}
                </div>

                <div class="details-title-box">
                    ${favoriteButton(car)}
                    <h2>${car.brand} ${car.model}</h2>
                    <p class="details-price">${formatPrice(car.price)} €</p>
                </div>

                <div class="details-grid">
                    <div class="details-item"><strong>Година</strong>${car.year}</div>
                    <div class="details-item"><strong>Пробег</strong>${formatMileage(car.mileage)} км.</div>
                    <div class="details-item"><strong>Гориво</strong>${car.fuel}</div>
                    <div class="details-item"><strong>Скоростна кутия</strong>${car.gearbox}</div>
                    <div class="details-item"><strong>Мощност</strong>${car.power}</div>
                    <div class="details-item"><strong>Цвят</strong>${car.color}</div>
                </div>

                <p><strong>Екстри:</strong> ${car.extras}</p>
            </div>

            <div class="details-side">
                <div class="details-side-card">
                    <h3>Автокъща</h3>
                    <p class="dealer-name">AutoFinder Premium Cars</p>
                    <p class="dealer-rating">★★★★★ Проверен търговец</p>
                    <p><strong>Адрес:</strong> гр. София, бул. България 100</p>
                    <p><strong>Работно време:</strong> Понеделник - Събота, 09:00 - 18:00</p>

                    <div class="contact-box">
                        <strong>Телефон</strong>
                        +359 888 123 456
                    </div>

                    <div class="contact-box">
                        <strong>Имейл</strong>
                        sales@autofinder.bg
                    </div>
                </div>

                <div class="details-side-card">
                    <h3>Описание</h3>
                    <p>${car.description}</p>
                    <p>Автомобилът може да бъде прегледан на място след предварителна уговорка.</p>
                </div>
            </div>
        </div>

        <div class="similar-section">
            <h2>Подобни автомобили</h2>
            <p>Още обяви със сходни характеристики.</p>
            <div id="similarContainer" class="similar-horizontal"></div>
        </div>
    `;

    const similarContainer = document.getElementById("similarContainer");

    if (similar.length === 0) {
        similarContainer.innerHTML = `<div class="empty-box">Няма подобни обяви.</div>`;
    } else {
        similar.forEach(function(item) {
            similarContainer.appendChild(createSimilarCard(item));
        });
    }
}

seedUsers();
seedCars();
updateNavigation();
protectPages();
setupHomePage();
setupAddCarPage();
setupLoginPage();
setupRegisterPage();
setupProfilePage();
renderDetailsPage();