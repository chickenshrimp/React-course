import Realm from 'realm';
import { Task } from '../models/Task';

const realmConfig: Realm.Configuration = {
  schema: [Task],
  path: 'tasks.realm',
};

export const getTasks = (): Task[] => {
  const realm = new Realm(realmConfig);
  const tasks = realm.objects<Task>('Task');
  const tasksArray = Array.from(tasks);
  realm.close();
  return tasksArray;
};

export const addTask = (title: string): void => {
  const realm = new Realm(realmConfig);
  realm.write(() => {
    realm.create('Task', {
      id: Date.now(),
      title,
      completed: false,
    });
  });
  realm.close();
};

export const updateTask = (id: number, completed: boolean): void => {
  const realm = new Realm(realmConfig);
  realm.write(() => {
    const task = realm.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      task.completed = completed;
    }
  });
  realm.close();
};

export const deleteTask = (id: number): void => {
  const realm = new Realm(realmConfig);
  realm.write(() => {
    const task = realm.objectForPrimaryKey<Task>('Task', id);
    if (task) {
      realm.delete(task);
    }
  });
  realm.close();
};