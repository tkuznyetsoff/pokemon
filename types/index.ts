interface Ability {
	ability: {
		name: string;
	}
}

interface Stats {
	base_stat: number;
	stat: {
		name: string;
	}
}

export interface Pokemon {
	abilities: Array<Ability>;
	stats: Array<Stats>;
	name: string;
	sprites: {
		front_default: string;
	}
}