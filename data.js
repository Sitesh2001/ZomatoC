let select = document.getElementById("city")
async function cities(){
    const res = await fetch("./cities.json")
    const names = await res.json();
    for(let i in names){
        select.innerHTML += `<option value = ${names[i].name}>${names[i].name}</option>`
    }
}
cities()