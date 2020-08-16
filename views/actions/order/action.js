import { ADD_ORDER, REMOVE_ORDER,  CHANGE_STATUS} from "./types";

export const deleteOrder = (id) => ({
    type: REMOVE_ORDER, 
    payload: {id: id}
  });
export const addOrder = (item) => {
  return {
      type: ADD_ORDER,
      payload: item
    }
}
export const changeStatus = (id, status) => {
  return {
      type: CHANGE_STATUS,
      payload: {id: id, status: status}
    }
}