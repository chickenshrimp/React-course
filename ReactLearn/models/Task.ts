import Realm from 'realm';

export class Task extends Realm.Object<Task> {
  id!: number;
  title!: string;
  completed!: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'Task',
    properties: {
      id: 'int',
      title: 'string',
      completed: 'bool',
    },
    primaryKey: 'id',
  };
}