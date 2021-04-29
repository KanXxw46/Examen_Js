import instanceAPI from './api';

const SWAPI = {
getPeople() {
return instanceAPI.get('people/');
},
getPeopleWithParams(search) {
return instanceAPI.get('people/', {parans: {search}});
},
getHome(id) {
return instanceAPI.get(`/S(id)`);
},
};

export default SWAPI;