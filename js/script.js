/* Const é igual ao Objeto Ícone */
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeader = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

/* Function Trocar Tema */
function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme","light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

}

toggleTheme.addEventListener("click", changeTheme);

/* Function Accordion */
accordionHeader.forEach(header => {
    header.addEventListener("click", () => {

        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");
        
        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

/* Deixar o item do menu ativo */
menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})

// Envio do Formulário com Limpeza dos Campos
const form = document.querySelector(".form-contato");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); //impede a atualização da Página.

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
        let response = await fetch(action, {
            method: "POST",
            body: formData,
            headers: {"Accept": "application/json"}
        });

        if (response.ok) {
            alert("Mensagem enviada com Sucesso!");
            form.reset();
        } 
        else {
            alert("Erro ao enviar a mensagem. Tente novamente.");
        }
    } catch (error) {
        alert("Erro de conexão. Verifique sua internet.");
    }
});


window.addEventListener('load', () => {
    AOS.init({  //instancia
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
    })
});