let selectedImage = "";

const sampleCars = [
    {
        brand: "BMW",
        model: "320d",
        year: 2018,
        price: 28500,
        mileage: 180000,
        fuel: "Дизел",
        gearbox: "Автоматична",
        power: "190 к.с.",
        color: "Черен",
        extras: "Навигация, кожен салон, парктроник, климатроник",
        description: "Автомобилът е обслужен и готов за каране.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
    },
    {
        brand: "Audi",
        model: "A4",
        year: 2017,
        price: 26500,
        mileage: 165000,
        fuel: "Дизел",
        gearbox: "Ръчна",
        power: "150 к.с.",
        color: "Сив",
        extras: "Климатроник, темпомат, LED фарове, мултимедия",
        description: "Икономичен автомобил, подходящ за всекидневна употреба.",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80"
    },
    {
        brand: "Mercedes",
        model: "C220",
        year: 2019,
        price: 39500,
        mileage: 140000,
        fuel: "Дизел",
        gearbox: "Автоматична",
        power: "194 к.с.",
        color: "Бял",
        extras: "Камера за заден ход, навигация, подгрев на седалки",
        description: "Луксозен автомобил с богато оборудване.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
    },
    {
        brand: "Volkswagen",
        model: "Golf 7",
        year: 2016,
        price: 18500,
        mileage: 190000,
        fuel: "Бензин",
        gearbox: "Ръчна",
        power: "125 к.с.",
        color: "Син",
        extras: "Климатик, парктроник, Bluetooth, лети джанти",
        description: "Практичен автомобил с нисък разход.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        price: 33500,
        mileage: 85000,
        fuel: "Хибрид",
        gearbox: "Автоматична",
        power: "122 к.с.",
        color: "Червен",
        extras: "Камера, адаптивен круиз контрол, асистент за лента",
        description: "Надежден хибриден автомобил с нисък разход.",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2015,
        price: 13500,
        mileage: 210000,
        fuel: "Бензин",
        gearbox: "Ръчна",
        power: "125 к.с.",
        color: "Сребрист",
        extras: "Климатик, подгрев на стъкла, USB, Bluetooth",
        description: "Удобен автомобил за градско и извънградско шофиране.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80"
    }
];

function getCars() {
    const storedCars = JSON.parse(localStorage.getItem("cars")) || [];

    if (!localStorage.getItem("sampleCarsLoaded")) {
        localStorage.setItem("cars", JSON.stringify(sampleCars));
        localStorage.setItem("sampleCarsLoaded", "true");
        return sampleCars;
    }

    return storedCars;
}

function saveCars(cars) {
    localStorage.setItem("cars", JSON.stringify(cars));
}

function formatPrice(price) {
    return Number(price).toLocaleString("bg-BG");
}

function formatMileage(mileage) {
    return Number(mileage).toLocaleString("bg-BG");
}

function displayCars(carList) {
    const carsContainer = document.getElementById("carsContainer");

    if (!carsContainer) {
        return;
    }

    carsContainer.innerHTML = "";

    if (carList.length === 0) {
        carsContainer.innerHTML = `<p class="empty-message">Няма намерени автомобили.</p>`;
        return;
    }

    carList.forEach(function(car, index) {
        const carCard = document.createElement("div");
        carCard.className = "car-card";

        const imageContent = car.image
            ? `<img src="${car.image}" alt="${car.brand} ${car.model}">`
            : `<span>${car.brand}</span>`;

        carCard.innerHTML = `
            <div class="car-image">
                ${imageContent}
            </div>

            <div class="car-info">
                <h3>${car.brand} ${car.model}</h3>
                <p class="price">${formatPrice(car.price)} лв.</p>

                <p><strong>Година:</strong> ${car.year}</p>
                <p><strong>Пробег:</strong> ${formatMileage(car.mileage)} км.</p>
                <p><strong>Гориво:</strong> ${car.fuel}</p>
                <p><strong>Скоростна кутия:</strong> ${car.gearbox}</p>
                <p><strong>Мощност:</strong> ${car.power}</p>
                <p><strong>Цвят:</strong> ${car.color}</p>
                <p><strong>Екстри:</strong> ${car.extras}</p>
                <p><strong>Описание:</strong> ${car.description}</p>

                <button class="delete-btn" onclick="deleteCar(${index})">Изтрий обявата</button>
            </div>
        `;

        carsContainer.appendChild(carCard);
    });
}

function filterCars() {
    const cars = getCars();

    const searchText = document.getElementById("searchText").value.toLowerCase();
    const brandFilter = document.getElementById("brandFilter").value;
    const fuelFilter = document.getElementById("fuelFilter").value;
    const gearboxFilter = document.getElementById("gearboxFilter").value;
    const maxPriceFilter = document.getElementById("maxPriceFilter").value;
    const minYearFilter = document.getElementById("minYearFilter").value;

    const filteredCars = cars.filter(function(car) {
        const textMatch =
            car.brand.toLowerCase().includes(searchText) ||
            car.model.toLowerCase().includes(searchText) ||
            car.extras.toLowerCase().includes(searchText);

        const brandMatch = brandFilter === "" || car.brand === brandFilter;
        const fuelMatch = fuelFilter === "" || car.fuel === fuelFilter;
        const gearboxMatch = gearboxFilter === "" || car.gearbox === gearboxFilter;
        const priceMatch = maxPriceFilter === "" || Number(car.price) <= Number(maxPriceFilter);
        const yearMatch = minYearFilter === "" || Number(car.year) >= Number(minYearFilter);

        return textMatch && brandMatch && fuelMatch && gearboxMatch && priceMatch && yearMatch;
    });

    displayCars(filteredCars);
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

function deleteCar(index) {
    const cars = getCars();
    cars.splice(index, 1);
    saveCars(cars);
    displayCars(cars);
}

function setupHomePage() {
    const carsContainer = document.getElementById("carsContainer");

    if (!carsContainer) {
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
    const carForm = document.getElementById("carForm");
    const imageInput = document.getElementById("imageInput");
    const imagePreview = document.getElementById("imagePreview");
    const successMessage = document.getElementById("successMessage");

    if (!carForm) {
        return;
    }

    imageInput.addEventListener("change", function() {
        const file = imageInput.files[0];

        if (!file) {
            selectedImage = "";
            imagePreview.style.display = "none";
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {
            selectedImage = event.target.result;
            imagePreview.src = selectedImage;
            imagePreview.style.display = "block";
        };

        reader.readAsDataURL(file);
    });

    carForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const cars = getCars();

        const newCar = {
            brand: document.getElementById("brand").value,
            model: document.getElementById("model").value,
            year: Number(document.getElementById("year").value),
            price: Number(document.getElementById("price").value),
            mileage: Number(document.getElementById("mileage").value),
            fuel: document.getElementById("fuel").value,
            gearbox: document.getElementById("gearbox").value,
            power: document.getElementById("power").value || "Няма данни",
            color: document.getElementById("color").value || "Няма данни",
            extras: document.getElementById("extras").value || "Няма данни",
            description: document.getElementById("description").value || "Няма описание",
            image: selectedImage
        };

        cars.push(newCar);
        saveCars(cars);

        carForm.reset();
        selectedImage = "";
        imagePreview.style.display = "none";

        successMessage.textContent = "Автомобилът беше добавен успешно.";

        setTimeout(function() {
            window.location.href = "index.html";
        }, 1200);
    });
}

setupHomePage();
setupAddCarPage();