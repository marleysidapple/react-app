import { EventEmitter } from "events";

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
}

const competitionStore = new CompetitionStore;

export default competitionStore;