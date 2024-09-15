async function getRandomCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        const imageUrl = data[0].url;
        document.getElementById('catImage').src = imageUrl;
    } catch (error) {
        console.error('Erro ao buscar imagem:', error);
    }
}

// Opcional: Carregar uma imagem ao iniciar a página
window.onload = getRandomCat;
