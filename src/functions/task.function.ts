import { Task } from "../models/schemas";
import { TaskData } from "../models/interfaces";
const createAndSaveTask = async (reqBody: TaskData) => {
  return await save({
    name: reqBody.name,
  });
};

const save = async (userObj: TaskData) => {
  try {
    const task = new Task(userObj);
    await task.save((err: Error) => {
      if (err) {
        console.log(err);
      }
    });
    return task._doc;
  } catch (error) {
    return error;
  }
};

export { createAndSaveTask };
