const defaultState = {
	loading:null,
	data:[],
	error:null,
}
const reducer = function(state=defaultState,action){
	switch(action.type){
		case 'RECORDS_PENDING':{
	      return {
	        ...state,
	        loading: true,
	        error: false
	      }
	    }
	    case 'RECORDS_FULLFILLED':{
	      return {
	        ...state,
	        loading: false,
	        data: action.payload,
	        error: true,
	      }

	    }
	    case 'RECORDS_REJECTED':{
	      return {
	        ...state,
	        loading: false,
	        error: true
	      }
	    }
	}
}

export default reducer;