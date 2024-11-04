// <body>
//   <!-- Вся твоя розмітка, включно з розміткою модалки -->
//
//   <!-- Ставимо перед закриваючим тегом body -->
//   <script src="./js/mobile-menu.js"></script>
// </body >
// не завжди вставляється в кінці, в залежності від потреби, 
// працювати він буде навіть якщо вставити і в іншому місці
// <!-- Скрипт, який необхідно скопіювати і вставити у файл mobile-menu.js. -->

(() => {
    const refs = {
        // 54:<button class="mobile-menu-button" type="button" data-menu-open>
        openModalBtn: document.querySelector("[data-menu-open]"),
        // 65:<button class="mobile-menu-close" type="button" data-menu-close>
        closeModalBtn: document.querySelector("[data-menu-close]"),
        //63: <div class="mobile-menu" data-menu>
        modal: document.querySelector("[data-menu]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
        refs.modal.classList.toggle("is-open");
    }
})();