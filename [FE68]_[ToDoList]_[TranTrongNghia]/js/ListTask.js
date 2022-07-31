function ListTask(){
    this.arr = [];

    ListTask.prototype.addTask  = function(task){
        this.arr.push(task);
    };

    ListTask.prototype.timViTri = function(id){
        return this.arr.findIndex(function(lT){
            return id === lT.id;
        });
    };
    ListTask.prototype.deleteToDo = function(id){
        var viTri = this.timViTri(id);
        if(viTri !== -1){
            this.arr.splice(viTri, 1);
        }
    };
    ListTask.prototype.getTaskById = function (id) {
        var viTri = this.timViTri(id);
        if (viTri !== -1) return this.arr[viTri];
    };
    
    ListTask.prototype.updateTask = function (task) {
        var viTri = this.timViTri(task.id);
        if (viTri !== -1) {
            this.arr[viTri] = task;
        };
    };
}