
document.getElementById('toggle').addEventListener('change', function() {
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        price.textContent = this.checked ? price.dataset.annual : price.dataset.monthly;
    });
});
