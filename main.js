let dino1 = {
    name: 'T. rex',
    era: 'Cretaceous'
}

let dino2 = {
    name: 'Allosaurus',
    era: 'Jurassic'
}

let dino3 = {
    name: 'Velociraptor',
    era:  'Creataceous'
}


let carnivores = [dino1, dino2, dino3]

let list = document.getElementById('carnivores')

for(let i = 0; i < carnivores.length; i++) {
    let item = document.createElement('li')
    item.textContent = `${carnivores[i].name} (${carnivores[i].era})`
    list.append(item)
}