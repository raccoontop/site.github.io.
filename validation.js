document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Запобігаємо відправці форми

    // Очищаємо помилки
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    let isValid = true;

    // Валідація логіна
    const username = document.getElementById('username').value;
    if (username.length < 5) {
        document.getElementById('usernameError').textContent = 'Логін має містити мінімум 5 символів.';
        isValid = false;
    }

    // Валідація імені
    const name = document.getElementById('name').value;
    if (!/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Ім\'я має містити лише літери.';
        isValid = false;
    }

    // Валідація email
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Невірний формат електронної пошти.';
        isValid = false;
    }

    // Валідація пароля
    const password = document.getElementById('password').value;
    if (!/(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}/.test(password)) {
        document.getElementById('passwordError').textContent = 'Пароль має містити мінімум 8 символів, одну велику літеру та цифру.';
        isValid = false;
    }

    // Валідація дати народження
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    if (dob >= today || isNaN(dob)) {
        document.getElementById('dobError').textContent = 'Дата народження не може бути у майбутньому.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('message').style.display = 'block';
    }
});
