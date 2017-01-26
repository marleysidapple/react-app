import dispatcher from "../dispatcher/dispatcher";


export function fetchCompetition(){
	dispatcher.dispatch({
		type: "FETCH_COMPETITION"
	});
}


export function anotherOne(){
	
}