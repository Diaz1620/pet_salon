function goToEdit(idx){
    location.href = "edit.html"
    console.log(idx);
    document.getElementById("petName").innerHTML = `<input class="form-control" type="text" name="petName" id="petName" value="${salon.pets[idx].name}">`
}

// function updatePet(idx){

// }