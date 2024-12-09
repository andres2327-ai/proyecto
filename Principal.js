// Seleccionamos los elementos del DOM que vamos a utilizar
let overlay = document.querySelector("#overlay");
let menuHamburger = document.querySelector(".menu-hamburger");
let menuResponsive = document.querySelector(".menu-responsive");
let menuClose = document.querySelector(".btn-close-responsive");

// Cuando se hace clic en el botón de hamburguesa (menuHamburger)
menuHamburger.addEventListener('click', () => {
    // Mostramos el menú responsivo (menuResponsive)
    menuResponsive.classList.add('active');
    // Mostramos el overlay (overlay) para oscurecer el fondo
    overlay.style.display = 'block';
    // Impedimos el desplazamiento de la página
    document.body.style.overflow = 'hidden';
});

// Cuando se hace clic en el botón de cerrar (menuClose)
menuClose.addEventListener('click', () => {
    // Ocultamos el menú responsivo (menuResponsive)
    menuResponsive.classList.remove('active');
    // Ocultamos el overlay (overlay)
    overlay.style.display = 'none';
    // Habilitamos el desplazamiento de la página
    document.body.style.overflow = 'auto';
});



const acordeonButtons = document.querySelectorAll('.acordeon-button');
const padding = 10; // Define el padding deseado (en píxeles)

acordeonButtons.forEach(button => {
    button.addEventListener('click', function () {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }

        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.height) {
            // Si ya tiene una altura asignada, la colapsamos
            content.style.height = null;
            content.style.padding = '0px';
        } else {
            // Asignamos altura dinámica basada en su contenido
            content.style.height = content.scrollHeight + padding * 2 + 'px';
            content.style.padding = `${padding}px`;
        }
    });
});

const valueColor = document.querySelector('.value-color'); // Corregido el selector de clase
const colorButtons = document.querySelectorAll('.container-color'); // Corregido el selector de clase

colorButtons.forEach(button => {
    button.addEventListener('click', e => {

        colorButtons.forEach(btn => btn.classList.remove('selected'));


        e.currentTarget.classList.add('selected');


        const color = e.currentTarget.dataset.color;

        valueColor.innerText = color;
    });
});

const valueSizes = document.querySelector('#value-sizes'); // Elemento para mostrar la talla seleccionada
const sizeButtons = document.querySelectorAll('.btn-size'); // Botones de tallas

sizeButtons.forEach(button => {
    button.addEventListener('click', () => {

        sizeButtons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');
        valueSizes.innerText = button.innerText;
    });
});

const btnIncrement = document.querySelector('#btn-increment');
const btnDecrement = document.querySelector('#btn-decrement');
const countProduct = document.querySelector('#count-product');
const btnAddToCart = document.querySelector('.btn-add-to-cart');
const quantityProduct = document.querySelector('#quantity-product');
const totalPrice = document.querySelector('.price-total');
const pricePerProduct = 100.00; // Precio unitario del producto
const taxRate = 0.08; // Impuesto estimado (8%)

// Función para actualizar la cantidad y los precios
function updateTotals() {
    const quantity = parseInt(countProduct.textContent);
    const subtotal = pricePerProduct * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Actualizar cantidad en la sección de información
    quantityProduct.textContent = quantity;

    // Actualizar precios
    totalPrice.textContent = `$${total.toFixed(2)}`;
    document.querySelector('.value p:nth-child(1)').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.value p:nth-child(2)').textContent = `$${tax.toFixed(2)}`;
}

// Incrementar cantidad
btnIncrement.addEventListener("click", () => {
    const currentCount = parseInt(countProduct.textContent);
    countProduct.textContent = currentCount + 1;
    updateTotals();
});

// Decrementar cantidad (con validación)
btnDecrement.addEventListener("click", () => {
    const currentCount = parseInt(countProduct.textContent);
    if (currentCount > 1) { // Evitar números menores a 1
        countProduct.textContent = currentCount - 1;
        updateTotals();
    }
});

btnAddToCart.addEventListener('click',()=>{
totalProductsCart.textContent=parseInt(totalProductsCart.textContent)+
parseInt(countProduct.textContent);
});

