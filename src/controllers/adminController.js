const adminControllers = {
    
    admin: (req, res) => res.send("Página de admin con get"),
    createget: (req, res) => res.send("Página de Create con get"),
    createpost: (req, res) => res.send("Página Sobre create con post"),
    editget: (req, res) => res.send("Página de edit con get"),
    editput: (req, res) => res.send("Página edit con put"),
    deletedelete: (req, res) => res.send("Página de admin con delete")
}

module.exports = adminControllers; 