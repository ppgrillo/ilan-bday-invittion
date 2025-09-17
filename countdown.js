// Selecciona los elementos del DOM
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const todayMessage = document.getElementById("today-message");
const timerElement = document.getElementById("timer"); // Añadido para ocultarlo

// Configura la fecha objetivo (¡USA UNA FECHA FUTURA!)
const targetDate = new Date("2025-10-22T23:59:59"); // <-- CAMBIA ESTA FECHA

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // Si la fecha objetivo ya pasó, muestra el mensaje
        if (timerElement) timerElement.classList.add("hidden");
        if (todayMessage) todayMessage.classList.remove("hidden");
        clearInterval(countdownInterval); // Detiene el intervalo
        return;
    }

    // Calcula días, horas, minutos y segundos restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Actualiza los valores en el DOM
    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
}

// Llama a la función una vez al inicio para evitar el retraso de 1 segundo
updateCountdown();

// Actualiza el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);