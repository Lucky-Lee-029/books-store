import { ADD_ITEM, REMOVE_ITEM,  REMOVE_ALL_ITEMS} from "./types";
export const deleteAll = () => ({
    type: REMOVE_ALL_ITEMS
  });

export const deleteItem = (id) => ({
    type: REMOVE_ITEM, 
    payload: {id: id}
  });
export const addItem = (item) => {
  return {
      type: ADD_ITEM,
      payload: item
    }
}