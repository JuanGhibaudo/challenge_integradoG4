const shopControllers = {
    
    shop: (req, res) => res.send("Página de shop con get"),
    itemget: (req, res) => res.send("Página de item con get"),
    itempost: (req, res) => res.send("Página de item con post"),
    cartget: (req, res) => res.send("Página carrito con get"),
    cartpost: (req, res) => res.send("Página carrito con post"),
   
}

module.exports = shopControllers; 