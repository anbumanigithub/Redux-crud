import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
 
const initialState={
tasksList:[],
selectedTask:{},
isLoading:false,
error:""

}


const BASE_URL="http://localhost:4000/tasks"
//get


export const getTastsFromServer=createAsyncThunk(


    "tasks/getTastsFromServer",
    async(_,{rejectWithValue})=>{
        const response=await fetch(BASE_URL)
        if(response.ok){
            const jsonResponse=await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error:"no task Found"})
        }
    
    }
)

//post


export const addTaskToServer = createAsyncThunk(
    "tasks/addTaskToServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch( BASE_URL,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Added'})
        }
    }
)



//PATCH 
export const updateTaskInServer = createAsyncThunk(
    "tasks/updateTaskInServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'PATCH',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch( BASE_URL + '/' + task.id,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Updated'})
        }
    }
)



//DELETE 
export const deleteTaskFromServer = createAsyncThunk(
    "tasks/deleteTaskFromServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'DELETE',
        }
        const response = await fetch(BASE_URL + '/' + task.id,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Deleted'})
        }
    }
)














const tasksSlice=createSlice(

    {

        name:"tasksSlice",
        initialState,
        reducers:{


            addTaskToList:(state,action)=>{
                const id = Math.random() * 100
                let task={...action.payload,id}
                state.tasksList.push(task)
            },


            removeFromList:(state,action)=>{

                   state.tasksList=state.tasksList.filter((task)=>task.id !==action.payload.id)


            },

            updateTaskInList:(state,action)=>{
                state.tasksList=state.tasksList.map((task)=>task.id===action.payload.id ? action.payload:task)
            },



            setselectedTask:(state,action)=>{
                state.selectedTask=action.payload
            }


        },



        extraReducers:(builder)=>{
            builder
            .addCase(getTastsFromServer.pending,(state)=>{
            state.isLoading=true
            })
            .addCase(getTastsFromServer.fulfilled,(state,action)=>{
                state.isLoading=false
                state.error=""
                state.tasksList=action.payload
            })
            
            .addCase(getTastsFromServer.rejected,(state,action)=>{
                 
                state.error=action.payload.error
                state.isLoading=false
                state.tasksList=[]
            })

        }
    })

export const{addTaskToList,removeFromList,updateTaskInList,setselectedTask}=tasksSlice.actions
export default tasksSlice.reducer