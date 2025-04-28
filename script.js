document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
        { name: 'Charlie Brown Jr', image: 'img/artista-charlie-brown-Jr.jpg' },
        { name: 'Drops Ina', image: 'img/artista-drops-ina.jpg' },
        { name: 'H.E.R', image: 'img/artista-her.jpg' },
        { name: 'Jonathan Ogden', image: 'img/artista-jonathan-ogden.jpg' },
        { name: 'Forrest Frank', image: 'img/artista-forrest-frank.jpg' },
        { name: 'Sondae', image: 'img/artista-sondae.jpg' },
    ];

    const albumsData = [
        { title: "Here Begin", artist: "Andrea Marie", image: "img/album-here begin.jpg" },
        { title: "Sunrise", artist: "John Mark Pantana", image: "img/album-sunrise.jpg" },
        { title: "Discovery", artist: "Rivers & Robots", image: "img/album-discovery.jpg" },
        { title: "To the Searching the Lost and the Found", artist: "Riders", image: "img/album-to the searching the lost and the found.jpg" },
        { title: "Wonder", artist: "Hillsong", image: "img/album-wonder.jpg" },
        { title: "Doomsday", artist: "MF DOOM", image: "img/album-doomsday.jpg" }
    ];

    const artistGrid = document.querySelector(".artist-grid");
    const albumsGrid = document.querySelector(".albums-grid");

    artistsData.forEach(artist => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("artist-card");

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="Imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");

        albumCard.innerHTML = `
    <img src="${album.image}" alt="Imagem do álbum ${album.title}">
    <h3>${album.title}</h3>
    <p>${album.artist}</p>
`;


        albumsGrid.appendChild(albumCard);
    });
});
