function onButtonClick() {
    var task = document.getElementById("newTask").value.trim();
    
    if(task.length === 0){
        alert("Полето е задължително!");
    }else{
        var itemsContainers = document.getElementById("listItems");
        itemsContainers.insertAdjacentHTML("beforeend", '<li>'+ task +'</li>');
        document.getElementById("newTask").value = "";
    }
}