const mainControllers = {
    home: (req, res) => res.send("Página de Home"),
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página Sobre Nosotros"),
    faqs: (req, res) => res.send("Página faqs")
}

module.exports = mainControllers; 