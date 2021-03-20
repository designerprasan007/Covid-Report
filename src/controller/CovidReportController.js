import * as api from '../api';


export const CovideReport = async(dispatch) =>{
	try
	{
		const report = await api.getAllCases()
		dispatch({type:'GET_ALL_COUNTRY', payload:report.data});
	}
	catch(e) {
		console.log(e)
	}
}



