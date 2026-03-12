function generateImage(){

const prompt = document.getElementById("prompt").value

const container = document.getElementById("image-container")

const keyword = prompt.split(" ")[0]   // use first word only

const img = document.createElement("img")

img.src = "https://source.unsplash.com/600x400/?" + keyword

container.innerHTML = ""

container.appendChild(img)

}


