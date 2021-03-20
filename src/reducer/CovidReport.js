
export const CovidReport = (state=[], action) =>{

	switch(action.type){
		case 'GET_ALL_COUNTRY':
			return [...state, ...action.payload];
		default:
			return state
	}

}