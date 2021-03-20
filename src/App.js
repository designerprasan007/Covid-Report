import {useEffect, useState} from 'react';
import {CovideReport} from './controller/CovidReportController';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import './App.css';

const App = () =>{
	const [searchinput, setSearchInput] = useState('');
	const dispatch = useDispatch();
	let report = useSelector((state) =>state.CovidReport);

	useEffect(() =>{
		dispatch(CovideReport);
	    }, [dispatch])
		

    if(searchinput.length){
    	report = report.filter(function (e) {
    		let country = e.country.toLowerCase();
    		let search = searchinput.toLowerCase(); 

		    return country.includes(search);
		});
    }

	return(
			<div className="bg-dark">
				<div className="container-fluid pt-5">
					<input type="text" value={searchinput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search By Country" />
					<div className="row">
						{report.length > 0 ? report.map((output, key) =>{
							return(
									<div key={key} className="col-md-3 col-6 py-3">
										<div className="countryName">
											<p className="text-center pt-4">
												{output.country}
											</p>
										</div>
										<div className="card text-center">
										<div className="card-body">
											<p className="card-text">TodayCase:<span className="text-primary px-3">{output.todayCases}</span></p>
											<p className="card-text">TodayRecover:<span className="text-success px-3">{output.todayRecovered}</span></p>
											<p className="card-text">TodayDeath:<span className="text-danger px-3">{output.todayDeaths}</span></p>
											<p className="card-text">TotalCases:<span className="text-primary px-3">{output.cases}</span></p>
											<p className="card-text">TotalRecovery:<span className="text-success px-3">{output.recovered}</span></p>
											<p className="card-text">TotalDeaths:<span className="text-danger px-3">{output.deaths}</span></p>
										</div>
										</div>
									</div>
								)
						}):(
						<p className="pt-3 text-danger">No Country found</p>
						)}
					</div>
				</div>
			</div>
		)
}	


export default App