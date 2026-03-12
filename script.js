document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault()

const prompt = document.getElementById("prompt").value

const img = document.createElement("img")

img.src = "https://dummyimage.com/512x512/000/fff&text=" + encodeURIComponent(prompt)

document.getElementById("image-container").appendChild(img)

})