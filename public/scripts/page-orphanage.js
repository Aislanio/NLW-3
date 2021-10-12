// tipos de dados
// String ""
// Number 01 
// Object {}
//boolean true or false
// Array []


const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom:false,
    zoomControl:false
}
//get value from html span
const lat =  document.querySelector('span[data-lat]').dataset.lat;
const lng =  document.querySelector('span[data-lng]').dataset.lng;


const map = L.map('mapid', options).setView([lat,lng], 15);
//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2 ]
})

//creat and add marker

L.marker([lat,lng], {icon})
.addTo(map)
/*image gallery */
function selectImage(event){
    const button = event.currentTarget
    //remove todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    //Selecionar o container de image
    const image = button.children[0]
    const imagecontainer = document.querySelector(".orphanage-details > img")
    //atualizar o cotainer de image
    imagecontainer.src = image.src
    //adcionar a classe .active para este botao
    button.classList.add('active')
}



