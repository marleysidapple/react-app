import { EventEmitter } from "events";
import dispatcher from "../dispatcher/dispatcher";

class CompetitionStore extends EventEmitter {

	constructor() {
		super()
		this.competition = [
			{
				id: 1,
				title: "English Premier league",
			},
			{
				id: 2,
				title: "Champions League",
			},
			{
				id: 3,
				title: "Bundes Liga",
			},
			{
				id: 4,
				title: "Serie A",
			},
			{
				id: 5,
				title: "La Liga",
			},
		];

	}





	getAll(){
		return this.competition;
	}


	handleActions(action){
		//console.log("store recieved an action", action);
		switch(action.type){
			case "FETCH_COMPETITION":{
				this.getAll();
			}
		}
	}


}

const competitionStore = new CompetitionStore;
dispatcher.register(competitionStore.handleActions.bind(competitionStore))



export default competitionStore;