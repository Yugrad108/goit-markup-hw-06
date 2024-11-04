// <body>
//   <!-- Вся твоя розмітка, включно з розміткою модалки -->
//
//   <!-- Ставимо перед закриваючим тегом body -->
//   <script src="./js/modal.js"></script>
// </body >

// <!-- Скрипт, який необхідно скопіювати і вставити у файл modal.js. -->



(() => {
    const refs = {
        // Додати атрибут data-modal-open на кнопку відкриття
        // 136:<button type="button" data-modal-open class="hero-button">
        openModalBtn: document.querySelector("[data-modal-open]"),
        // 720: Додати атрибут data-modal-close на кнопку закриття
        // <button type="button" data-modal-close class="modal-close-button">
        closeModalBtn: document.querySelector("[data-modal-close]"),
        // Додати атрибут data-modal на бекдроп модалки
        // 718: <div class="backdrop" data-modal>
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
        refs.modal.classList.toggle("is-open");
    }
})();