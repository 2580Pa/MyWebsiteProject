console.log("پنل‌ها فعال شدند");
// اینجا کد Drag-and-Drop اضافه می‌شه (مثال ساده)
let items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', () => console.log('درگ شروع شد'));
});
