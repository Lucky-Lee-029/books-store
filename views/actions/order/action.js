import { ADD_ORDER, REMOVE_ORDER,  CHANGE_STATUS} from "./types";
export const changeStatus = (id) => ({
    type: CHANGE_STATUS,
    payload: {id: id}
  });

export const deleteOrder = (id) => ({
    type: REMOVE_ORDER, 
    payload: {id: id}
  });
export const addOrder = (item) => {
  item.id = Math.floor(Math.random()*10000000000);
  return {
      type: ADD_ORDER,
      payload: item
    }
}