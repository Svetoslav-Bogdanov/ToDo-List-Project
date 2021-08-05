function onDeleteClick(deleteIcon) {
    var itemNode = deleteIcon.parentNode.parentNode;
    itemNode.parentNode.removeChild(itemNode);
}

function onButtonClick() {
    var task = document.getElementById("newTask").value.trim();
    
    if(task.length === 0){
        alert("Полето е задължително!");
    }else{
        var node = document.createElement("li");

        
        node.innerHTML = `
            <span class="item">
                <span class="item__text">${task}</span>
                <span class="item__delete material-icons" onclick="onDeleteClick(this);">delete_forever</span>
            </span>
        `;
        
        var itemsContainers = document.getElementById("listItems");
        itemsContainers.appendChild(node);
        
        document.getElementById("newTask").value = "";
    }
}