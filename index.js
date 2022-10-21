let Jjb = document.getElementById('Jjb')
let Taewkondo = document.getElementById('Taewkondo')
let Judo = document.getElementById('Judo')
let Prenom = document.getElementById('Prenom')
let Age = document.getElementById('Age')
let submit = document.getElementById('submit')
let reponse = document.getElementById('reponse')

let data = []

submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (Jjb.checked === true){
        data.push(Jjb.name)
    }
    if(Taewkondo.checked === true){
        data.push(Taewkondo.name)
    }
    if(Judo.checked === true){
        data.push(Judo.name)
    }
    if(data.length > 0){
        if(data.length <=2){
            if(Age.value >= 13){
                if(Prenom.value.length <= 8){
                    if (Prenom.value[0] === "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z"){
                        reponse.textContent = (`Vous avez choisie ${data} comme sport`)
                    }else{
                        reponse.textContent = (`Vous avez choisie ${data} comme sport`)
                    }
                }else{
                    reponse.textContent = ("indiqué un prénom au maximum de 8 caractère")
                }
            }else{
                reponse.textContent = ("indiqué un nombre supérieur a 13")
            }
        }else{
            reponse.textContent = ("indiqué au maximum 2 sport")
        }
    }else{
        reponse.textContent = ("indiqué au minimum 1 sport")
    }
    data = []
})