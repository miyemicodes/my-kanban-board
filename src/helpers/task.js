
import { v4 as uuidv4 } from 'uuid';

export const generateTask = (label) => {
    const taskStatusColumnData = {
      id: uuidv4(),
      label,
      tasks: [],
    };
    return taskStatusColumnData;
  }

  export const addNewTask = (prevFullStoreData, columnName) => {
    const columnData = generateTask(columnName);
    // speead the previous data and add the new column data
    return [...prevFullStoreData, columnData];
  }