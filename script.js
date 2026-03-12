function generateImage(){

const prompt = document.getElementById("prompt").value

const img = document.createElement("img")

const query = prompt.trim().replace(/\s+/g, ",")

img.src = "https://loremflickr.com/600/400/" + query

const container = document.getElementById("image-container")

container.innerHTML = ""

container.appendChild(img)

}
