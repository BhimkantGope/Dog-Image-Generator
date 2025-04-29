let img = document.querySelector("#result");
let btn = document.querySelector("button");
let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () => {
    let link = await getFacts();
    img.setAttribute("src", link);
})
async function getFacts() {
    try {
        let response = await axios.get(url2);
        return response.data.message;
    } catch (error) {
        console.log("ERROR - ", error);
        return "image not found";
    }
}