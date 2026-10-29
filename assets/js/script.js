// Чекаємо, поки весь DOM завантажиться
document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    
    // Знаходимо лічильник у шапці та всі кнопки "У кошик"
    const cartLink = document.querySelector(".cart-link a");
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Використовуємо стрілочну функцію для обробки кліку
    buyButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            cartCount++;
            
            // Оновлюємо текст у шапці сайту
            cartLink.textContent = `Кошик (${cartCount})`;

            // Невелика анімація або сповіщення
            button.textContent = "Додано ✓";
            button.style.backgroundColor = "#4CAF50";

            setTimeout(() => {
                button.textContent = "У кошик";
                button.style.backgroundColor = "#d96b30";
            }, 1000);

            console.log(`Товар #${index + 1} додано до кошика. Всього товарів: ${cartCount}`);
        });
    });
});