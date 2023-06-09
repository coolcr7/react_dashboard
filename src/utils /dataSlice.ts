import { createSlice } from '@reduxjs/toolkit'
import { DataProp } from '../pages/Contact';
import generateUUID from './idGenrator';
interface State {
    value:DataProp ;
  }
  
interface DeleteElementAction {
    type: string;
    payload: {
      id: string;
  }
}
interface UpdateElementAction {
    type: string;
    payload: DataProp[0];
  }


export const counterSlice = createSlice({
    name: 'dataSlice',
    initialState:{
        value:[{
            firstName:"Saurabh",
            LastName:"Jha",
            active:true,
            id:generateUUID()
        },]
    },
    reducers: {
      increment: (state,action) => {
        state.value.push(action.payload) 
      },
      update:(state:State,action:UpdateElementAction)=>{
        console.log(action.payload,"update reducer")
        return {
            value: state.value.map(item =>{ 
                if (item.id === action.payload.id){
                  return action.payload
                }
                return item
            }),
          
          
        };
      },
      deleteUpdate:(state:State,action:DeleteElementAction)=>{
    
        return {
            ...state,
            value: state.value.filter(item => item.id !== action.payload.id),
          };
          
        }

    },  
  })
  
export const { increment,update,deleteUpdate } = counterSlice.actions
export default counterSlice.reducer