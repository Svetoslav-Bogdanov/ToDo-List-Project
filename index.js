function onDeleteClick(deleteIcon) {
    var taskText = deleteIcon.parentNode.getElementsByClassName("item__text")[0].innerText;
    if (confirm("Сигурни ли сте, че искате да задачата:\r\n\r\n" + taskText)) {

        var itemNode = deleteIcon.parentNode.parentNode;
        itemNode.parentNode.removeChild(itemNode);
    }
}

function filter(text){
    return text.trim();
}

function isInvalid(text){
    return text.length === 0
}

function createNewItem(text){
    var node = document.createElement("li");

    node.innerHTML = `
        <span class="item">
            <span class="item__text">${text}</span>
            <span class="item__delete material-icons" onclick="onDeleteClick(this);">delete_forever</span>
        </span>
    `;

    return node;
}

function addItemToList(node){
    var itemsContainers = document.getElementById("listItems");
    itemsContainers.appendChild(node);
}

function resetForm(){
    document.getElementById("newTask").value = "";
    document.getElementById("newTask").focus();
}

function onFormSubmit(event) {
    event.preventDefault();
    var task = document.getElementById("newTask").value;
    task = filter(task);

    if (isInvalid(task)) {
        alert("Полето е задължително!");
    } else {
        var node = createNewItem(task);
        
        addItemToList(node);
        resetForm();
    }
}