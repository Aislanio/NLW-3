// tipos de dados
// String ""
// Number 01 
// Object {}
//boolean true or false
// Array []






const map = L.map('mapid').setView([-9.4222469,-40.5079437], 15);
//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create and add amrker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)

});


//adicionar o campos de fotos
function addPhotoField() {
    //pegar o contairne de fotos #images
  const container =   document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer =  document.querySelectorAll('.new-upload')
    //tealizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)


    //verificar se o campo esta vazio, se sim, nao adicionar conteiner de image
      const input =         newFieldContainer.children[0]

      if(input.value == "") {
          return
      }

    
    // limmpa o campo antes de adicionar ao container de images
        input.value = ""


    // adicionar o clone ao  container de #images
    container.appendChild(newFieldContainer)
};

function deleteField(event) {
     const span = event.currentTarget

     const fieldsContainer =  document.querySelectorAll('.new-upload')

     if(fieldsContainer.length < 2){
         //limpar o valor do campos
         span.parentNode.children[0].value = ""
         return
     } 

     //deletar o campos
     span.parentNode.remove()
}
//seleção sim ou nao
function toggleSelect(event) {
      // retirar a class .active (dos botoes)
        document.querySelectorAll('.button-select button')
        .forEach(button =>button.classList.remove('active'))
      // colocar a class .active nesse botao clicado
            const button = event.currentTarget
            button.classList.add('active')


     //atualizar o meu input hidden com o valor selecionado

     const input = document.querySelector('[name="open_on_weekends"]')
     //verifica sim ou nao 
        input.value = button.dataset.value
}
/*function validate(event){
    const inpuntlat = document.querySelector('[name="lat"]');
    const inpuntlng = document.querySelector('[name="lng"]');
    if(inpuntlat.value == "" & inpuntlng.value == ""){
        event.preventDefault();
        alert("Selecinar o ponto no mapa")
    }

}*/