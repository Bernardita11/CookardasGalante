//Función auxiliar para generr la orden

const ordenGenerada = (nombre, email, teléfono, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            email: email,
            teléfono: teléfono,
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default ordenGenerada;