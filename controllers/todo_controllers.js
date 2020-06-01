const mongoRepo = require("../repositories/mongo");

exports.addTask = async (req) => {
    resp = mongoRepo.addTask(req)
    if (resp) {
        return resp
    }
    return false
    // await res.send(JSON.stringify(data))
}

exports.getUserTasks = async (req, res) => {
    tasks = await mongoRepo.getTasks(req.user._id)
    return (tasks.tasks)
}

exports.getSingleTask = async (req, res, next) => {
    if (req.user._id) {
        task = await mongoRepo.searchTaskById(req.params._id);
        req.task = task;
        next();
    }
}

exports.getTask = (data) => {
    console.log(data.user.tasks)
    index = data.user.tasks.findIndex(x => x._id === data.params._id);
    if(index>=0){
        return data.user.tasks[index]
    }
    return false
}