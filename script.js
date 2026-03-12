function generateImage(){

const prompt = document.getElementById("prompt").value

const container = document.getElementById("image-container")

container.innerHTML = "<p>Generating image...</p>"

const img = document.createElement("img")

// replace spaces with commas
const query = prompt.trim().replace(/\s+/g, ",")

// reliable image source
img.src = "https://source.unsplash.com/600x400/?" + query

img.onload = function(){
container.innerHTML = ""
container.appendChild(img)
}

img.onerror = function(){
container.innerHTML = "<p>Could not load image. Try another prompt.</p>"
}

}

