let cartQuantity = 0;

document.getElementById('show').addEventListener('click', () => {
    document.getElementById('showQ').textContent = cartQuantity
});

document.getElementById('add').addEventListener('click', () => {
    cartQuantity += 1;
    document.getElementById('showQ').textContent = cartQuantity
});

document.getElementById('addTwo').addEventListener('click', () => {
    cartQuantity += 2;
    document.getElementById('showQ').textContent = cartQuantity
});

document.getElementById('addThree').addEventListener('click', () => {
    cartQuantity += 3;
    document.getElementById('showQ').textContent = cartQuantity
});

document.getElementById('reset').addEventListener('click', () => {
    cartQuantity = 0;
    document.getElementById('showQ').textContent = cartQuantity
});