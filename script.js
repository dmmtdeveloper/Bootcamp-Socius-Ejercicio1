const button = document.getElementById("cta")

const showMessage = (message) => {
    alert(message)
}

button.addEventListener("click", showMessage.bind(null, "Mensaje enviado"))

//bind: Evita que la alerta se ejecute automaticamente recibe 2 parametros



