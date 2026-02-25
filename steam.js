fetch("https://corsproxy.io/?https://store.steampowered.com/api/featuredcategories/?cc=AR&l=spanish")
.then(respuesta => respuesta.json())
.then(datos => {
    const elementos = datos.specials.items;
    console.log(elementos);
    const juegosFree = elementos.filter(juego => {
    return juego.discount_percent === 100 && juego.discounted === true;
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
        img.src = element.large_capsule_image;
        grid.appendChild(card)
        card.appendChild(p)
        card.appendChild(img)
        console.log(datos)
    });    
    });