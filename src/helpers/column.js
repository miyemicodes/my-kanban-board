import { v4 as uuidv4 } from 'uuid';

export const generateNewColumn = (label) => {
    const taskStatusColumnData = {
      id: uuidv4(),
      label,
      tasks: [],
    };
    return taskStatusColumnData;
  }

  export const addNewColumn = (prevFullStoreData, columnName) => {
    const columnData = generateNewColumn(columnName);
    // speead the previous data and add the new column data
    return [...prevFullStoreData, columnData];
  }