function generateImage(){

const prompt = document.getElementById("prompt").value

const container = document.getElementById("image-container")

container.innerHTML = "Generating image..."

const img = document.createElement("img")

// better image search
img.src = "https://source.unsplash.com/600x400/?" + encodeURIComponent(prompt)

img.onload = function(){
container.innerHTML = ""
container.appendChild(img)
}

img.onerror = function(){
container.innerHTML = "Image failed to load. Try another prompt."
}

}

}


