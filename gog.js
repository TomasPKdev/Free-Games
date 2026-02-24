fetch('https://corsproxy.io/?https://www.gog.com/games/ajax/filtered?mediaType=game&sort=popularity&page=1')
    .then(respuesta => respuesta.json())
    .then(datos => {
        const elementos = datos.products;
        const juegosFree = elementos.filter(juego => {
    return juego.price.discountPercentage === 100 && juego.price.isDiscounted === true;
    });
    if (juegosFree.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay juegos gratis disponibles en este momento.";
    document.querySelector(".games-grid").appendChild(mensaje);
    return;
}
    juegosFree.forEach(element => {
        const grid = document.querySelector(".games-grid")
        const card =document.createElement("article");
        card.className = "card-gog";
        const p = document.createElement ("p");
        p.textContent = element.title;
        const img = document.createElement ("img");
        img.src = 'https:' + element.image + '_product_card_v2_mobile_slider_639.jpg'
        grid.appendChild(card)
        card.appendChild(p)
        card.appendChild(img)
        console.log(datos)
    });
    });