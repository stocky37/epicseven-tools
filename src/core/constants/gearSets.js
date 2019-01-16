import {atkPerc, ca, chc, chd, defPerc, dmg, eff, efr, hpPerc, ls, spdPerc} from './stats';

export const attack = Object.freeze({
	id: 'attack',
	label: 'Attack Set',
	stat: atkPerc.id,
	value: 35,
	required: 4,
});

export const critical = Object.freeze({
	id: 'critical',
	label: 'Critical Set',
	stat: chc.id,
	value: 12,
	required: 2,
});

export const health = Object.freeze({
	id: 'health',
	label: 'Health Set',
	stat: hpPerc.id,
	value: 15,
	required: 2,
});

export const lifesteal = Object.freeze({
	id: 'lifesteal',
	label: 'Lifesteal Set',
	stat: ls.id,
	value: 20,
	required: 4,
});

export const hit = Object.freeze({
	id: 'hit',
	label: 'Hit Set',
	stat: eff.id,
	value: 20,
	required: 2,
});

export const speed = Object.freeze({
	id: 'speed',
	label: 'Speed Set',
	stat: spdPerc.id,
	value: 25,
	required: 4,
});

export const destruction = Object.freeze({
	id: 'destruction',
	label: 'Destruction Set',
	stat: chd.id,
	value: 40,
	required: 4,
});

export const counter = Object.freeze({
	id: 'counter',
	label: 'Counter Set',
	stat: ca.id,
	value: 20,
	required: 4,
});

export const resist = Object.freeze({
	id: 'resist',
	label: 'Resist Set',
	stat: efr.id,
	value: 20,
	required: 2,
});

export const defense = Object.freeze({
	id: 'defense',
	label: 'Defense Set',
	stat: defPerc.id,
	value: 15,
	required: 2,
});

export const rage = Object.freeze({
	id: 'rage',
	label: 'Rage Set',
	stat: dmg.id,
	value: 30,
	required: 4,
});

export const gearSets = Object.freeze([
	attack,
	critical,
	destruction,
	speed,
	health,
	defense,
	lifesteal,
	hit,
	resist,
	counter,
	rage,
]);

export const gearSetsById = Object.freeze({
	attack,
	critical,
	destruction,
	speed,
	health,
	defense,
	lifesteal,
	hit,
	resist,
	counter,
	rage,
});

export default gearSets;