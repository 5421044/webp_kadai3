export async function fetchImages(name) {
    const response = await fetch(
        `https://www.amiiboapi.com/api/amiibo/?name=${name}`
    );
    const data = await response.json();
    return data.amiibo;
}