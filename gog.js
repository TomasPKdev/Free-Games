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
    card.className = "card-h";
    const p = document.createElement ("p");
    p.textContent = element.title;
    const img = document.createElement ("img");
    img.src = element.keyImages[1].url
    const fechaFin = new Date(element.price.lineOffers[0].appliedRules[0].endDate);
    const fechaHoy = new Date();
    const timedownMilisegundos = fechaFin - fechaHoy
    const timedownDias = Math.floor(timedownMilisegundos / 86400000);
    const timedownHoras = Math.floor ((timedownMilisegundos % 86400000)/3600000)
    const timedown = document.createElement ("p")
    timedown.textContent = `${timedownDias} Días y ${timedownHoras} Horas`
    grid.appendChild(card)
    card.appendChild(timedown)
    card.appendChild(p)
    card.appendChild(img)

});
});
