const API_URL = "http://localhost:8081/api/search";

export async function search(keyword) {

    const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(keyword)}`
    );

    if (!response.ok) {
        throw new Error("Search failed");
    }

    return response.json();
}