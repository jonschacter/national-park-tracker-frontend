const DEV_URL = 'http://localhost:3001/';
const PROD_URL = 'https://nationalparktracker-api.herokuapp.com/';
export default process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;