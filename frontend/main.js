// Mini script para marcar hábitos
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".habit-item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("done");
        });
    });
});
