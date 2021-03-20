import axios from 'axios';


export const getAllCases = () => axios.get(`https://disease.sh/v3/covid-19/countries`);