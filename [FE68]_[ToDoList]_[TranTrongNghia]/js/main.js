var listTask = new ListTask();
var validator = new Validator();
var getEle = function(id){
    return document.getElementById(id);

};

var renderTaskList = function(listTask){
    var contentToDo = '',
        contentCompleted = '';
        (getEle('todo').innerHTML = ''),
        (getEle('completed').innerHTML = ''),
        listTask.forEach(function(lT){
            "todo" === lT.status ? ((contentToDo += renderListLi(lT)), (getEle("todo").innerHTML = contentToDo)) : "completed" === lT.status && ((contentCompleted += renderListLi(lT)), (getEle("completed").innerHTML = contentCompleted));
        });

}
function renderListLi(listTask){
    return `
                <li>
                    <span>${listTask.taskName}</span>
                    
                    <div class="buttons">
                        <button class="remove" onclick="deleteToDo(${listTask.id})">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" onclick="changeStatus(${listTask.id})">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            
            `;
}

var validateInput = function (taskName) {
    var isValid = true;
    isValid &= validator.kiemTraRong(taskName, 'notiInput', 'Task không được để trống') &&
    validator.kiemTraTrung(taskName, listTask.arr, 'notiInput', 'Trùng tên task');
    return isValid;
};
getLocalStorage();
function deleteToDo(id){
    listTask.deleteToDo(id);
    renderTaskList(listTask.arr);
    alert('Xóa task thành công');
    setLocalStorage();

};
function changeStatus(id) {
    listTask.getTaskById(id).status = "todo" === listTask.getTaskById(id).status ? "completed":"todo", listTask.updateTask(listTask.getTaskById(id));
    
   renderTaskList(listTask.arr);
   alert('Thay đổi trạng thái thành công');
   setLocalStorage();
}


getEle('addItem').onclick = function(){
   var status = "todo" ;
    var taskName = getEle('newTask').value;
    if (!validateInput(taskName)) return;

    var id = Math.floor(Math.random()*1000);
    
    var task = new Task(id, taskName, status);
    
    listTask.addTask(task);
    renderTaskList(listTask.arr);
    getEle("newTask").value = "";
    alert('Thêm task thành công');
    setLocalStorage();
    
};
function getLocalStorage(){
    if(localStorage.getItem('listTask')){
    listTask.arr = JSON.parse(localStorage.getItem('listTask'));
    renderTaskList(listTask.arr);
    }
}

function setLocalStorage(){
    localStorage.setItem('listTask', JSON.stringify(listTask.arr));
};