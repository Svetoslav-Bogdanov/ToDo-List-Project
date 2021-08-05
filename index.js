function onButtonClick() {
    var task = document.getElementById("newTask").value.trim();
    
    if(task.length === 0){
        alert("Полето е задължително!");
    }else{
        var node = document.createElement("li");
        var textnode = document.createTextNode(task);
        node.appendChild(textnode);
        
        
        var itemsContainers = document.getElementById("listItems");
        itemsContainers.appendChild(node);
        
        document.getElementById("newTask").value = "";
    }
}