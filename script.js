function openTab(evt, tabName) {
    let contents = document.getElementsByClassName("tab-content");
    for (let content of contents) {
        content.classList.remove("active");
    }

    let buttons = document.getElementsByClassName("tab-btn");
    for (let btn of buttons) {
        btn.classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// Al enviar el formulario de pedido
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Fuego! Recibimos tu solicitud. Jesús Aaron te escribirá pronto al WhatsApp para coordinar la entrega.');
});