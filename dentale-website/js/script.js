const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


menuButton.addEventListener("click", function () {

    mainNav.classList.toggle("active");

});
const navLinks =
    mainNav.querySelectorAll("a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");

    });

});
const appointmentForm =
    document.getElementById("appointmentForm");

const formMessage =
    document.getElementById("formMessage");


appointmentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton =
        appointmentForm.querySelector("button[type='submit']");

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const privacy =
        document.getElementById("privacy").checked;


    if (!name || !phone) {

        formMessage.textContent =
            "Пожалуйста, заполните имя и телефон.";

        return;
    }


    if (!privacy) {

        formMessage.textContent =
            "Необходимо согласиться с обработкой персональных данных.";

        return;
    }


    submitButton.disabled = true;

    submitButton.textContent =
        "Отправляем...";


    const formData =
        new FormData(appointmentForm);


    try {

        const response = await fetch(
            appointmentForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            formMessage.textContent =
                "Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.";

            appointmentForm.reset();

        } else {

            formMessage.textContent =
                "Не удалось отправить заявку. Попробуйте ещё раз.";

        }

    } catch (error) {

        formMessage.textContent =
            "Произошла ошибка соединения. Попробуйте ещё раз.";

    }


    submitButton.disabled = false;

    submitButton.textContent =
        "Отправить заявку";

});