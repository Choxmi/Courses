const tasks = {
    tasks: [{
        text: 'Grocery shopping 1',
        completed: true
    },{
        text: 'Grocery shopping 2',
        completed: false
    },{
        text: 'Grocery shopping 3',
        completed: false
    }],
    getTaskToDo(){
        return this.tasks.filter((task) => !task.completed)
    }
}

console.log(tasks.getTaskToDo())