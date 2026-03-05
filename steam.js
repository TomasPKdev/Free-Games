fetch("https://corsproxy.io/?https://store.steampowered.com/search/results/?maxprice=free&specials=1&json=1")
.then(respuesta => respuesta.json())
.then(datos => {
    const elementos = datos.items;
    console.log(elementos);
    if (!elementos || elementos.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No hay juegos gratis disponibles en este momento.";
        document.querySelector(".games-grid").appendChild(mensaje);
        return;
    }
    elementos.forEach(element => {
        const appid = element.logo.match(/apps\/(\d+)\//)[1];
        fetch(`https://corsproxy.io/?https://store.steampowered.com/api/appdetails?appids=${appid}`)
        .then(r => r.json())
        .then(detalle => {
            const juego = detalle[appid].data;
            const grid = document.querySelector(".games-grid")
            const card = document.createElement("article");
            card.className = "card-h";
            const p = document.createElement("p");
            p.textContent = element.name;
            const img = document.createElement("img");
            img.src = juego.capsule_imagev5;
            grid.appendChild(card)
            card.appendChild(p)
            card.appendChild(img)
            console.log(juego)
        });
    });
});
