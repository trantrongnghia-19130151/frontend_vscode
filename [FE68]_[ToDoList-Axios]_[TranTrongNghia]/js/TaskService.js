function TaskService() {
}
    TaskService.prototype.getListTask = function () {
        return axios({ url: "https://60e023e56b689e001788c8f5.mockapi.io/Task",
        method: "GET" });
    },
    TaskService.prototype.addTask = function (task) {
            return axios({ url: "https://60e023e56b689e001788c8f5.mockapi.io/Task", 
            method: "POST", 
            data: task });
    },
    TaskService.prototype.deleteTask = function (id) {
        return axios({ url: `https://60e023e56b689e001788c8f5.mockapi.io/Task/${id}`, 
        method: "DELETE" });
    },
    TaskService.prototype.getTaskById = function (id) {
        return axios({ url: `https://60e023e56b689e001788c8f5.mockapi.io/Task/${id}`, 
        method: "GET" });
    },
    TaskService.prototype.updateTask = function (id, task) {
        return axios({ url: `https://60e023e56b689e001788c8f5.mockapi.io/Task/${id}`, 
        method: "PUT", 
        data: task });
    };

