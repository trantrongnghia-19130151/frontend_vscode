var taskService = new TaskService();
var validator = new Validator();
// var getELe = function(id){
//     return document.getElementById(id);
// }

function renderTaskList() {
    taskService
        .getListTask()
        .then(function (res) {
            var contentToDo = "",
                contentCompleted = "";
            (getEle('todo').innerHTML = ""),
                (getEle('completed').innerHTML = ""),
                res.data &&
                    res.data.length > 0 &&
                    res.data.forEach(function (task) {
                        "todo" === task.status ? ((contentToDo += renderHtml(task)), (getEle('todo').innerHTML = contentToDo)) : "completed" === task.status && ((contentCompleted += renderHtml(task)), (getEle('completed').innerHTML = contentCompleted));
                    });
        })
        .catch(function (err) {
            console.log(err);
        });
}
function renderHtml(task) {
    return `<li>  
    <span>${task.taskName}</span>    
    <div class="buttons">     
        <button class="remove" onclick="deleteToDo(${task.id})">        
            <i class="fa fa-trash-alt"></i>      
        </button>     
        <button class="complete"onclick="changeStatus(${task.id})">        
            <i class="far fa-check-circle"></i>       
            <i class="fas fa-check-circle"></i>     
        </button>  
    </div>  
    
    </li>
    `;
}
// var validateInput = function (taskName) {
//     taskService.getListTask()
//     .then(function(res){
//         var arrTask = res.data;
//         var isValid = true;
//         isValid &= validator.kiemTraRong(taskName, 'notiInput', 'Task không được để trống') 
//         &&
//         validator.kiemTraTrung(taskName, arrTask, 'notiInput', 'Trùng tên task');
//         isLoading(false);
//     return isValid;
//     })
    
    

    
// };
function deleteToDo(id) {
    isLoading(true);
    taskService
        .deleteTask(id)
        .then(function () {
            isLoading(false);
            alert('Xóa thành công'), renderTaskList();
            
        })
        
        .catch(function (err) {
            console.log(err);
        });
}
function changeStatus(id) {
    isLoading(true);
    taskService
        .getTaskById(id)
        .then(function (res) {
            var task = res.data;
            return (task.status = "todo" === task.status ? "completed" : "todo", taskService.updateTask(id,task));
        })
        .then(function () {
            alert("Thay đổi trang thái thành công"), renderTaskList();
            isLoading(false);
        });
}
function getEle(id) {
    return document.getElementById(id);
}
renderTaskList(),
    getEle("addItem").addEventListener("click", function () {
     isLoading(true);
     taskService.getListTask()
     .then(function(res){
        var taskName = getEle('newTask').value;
        var arrTask = res.data;
        var isValid = true;
        isValid &= validator.kiemTraRong(taskName, 'notiInput', 'Task không được để trống') 
        &&
        validator.kiemTraTrung(taskName, arrTask, 'notiInput', 'Trùng tên task');
    
        if (!isValid){
            isLoading(false); 
            return;
        }
        var status = "todo";
        var task = new Task(taskName, status);
        taskService
            .addTask(task)
            .then(function () {
                alert("Thêm Task thành công"), renderTaskList(), (getEle('newTask').value = "");
                isLoading(false);
            })
            .catch(function (err) {
                console.log(err);
            });
        })
        .catch(function(err){
            console.log(err);
        })  
    });
    
    function isLoading(isLoad){
        return isLoad ? getEle('loader').style.display = 'block': getEle('loader').style.display = 'none';
    }
