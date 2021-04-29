export const initialState={
    selected:"none"
};


const reducer= (state,action)=>{

    switch(action.type){
        case "SET":
            return {
                ...state,
                selected:action.name
            }
    }
};

export default reducer;