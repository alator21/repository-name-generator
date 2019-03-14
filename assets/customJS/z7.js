'use strict';
/* global $ */

const adjectives = ['spiritual', 'amused', 'obscene', 'willing', 'smelly', 'bright', 'colossal', 'abstracted', 'understood', 'whispering', 'ignorant', 'momentous', 'black', 'agonizing', 'fluffy', 'regular', 'drunk', 'harsh', 'open', 'closed', 'entertaining', 'jobless', 'periodic', 'filthy', 'sick', 'nebulous', 'possible', 'complex', 'expensive', 'fat', 'psychotic', 'descriptive', 'safe', 'past', 'nasty', 'curvy', 'puny', 'five', 'obese', 'windy', 'dangerous', 'lovely', 'knowledgeable', 'magical', 'unique', 'outrageous', 'demonic', 'unhealthy', 'futuristic', 'whole', 'functional', 'heavy', 'damaging', 'silent', 'thirsty', 'absurd', 'tiny', 'dusty', 'chemical', 'married', 'plastic', 'juicy', 'gentle', 'lethal', 'general', 'careful', 'spiky', 'super', 'common', 'poor', 'unbiased', 'exotic', 'possessive', 'hilarious', 'fragile', 'exciting', 'deep', 'helpful', 'psychedelic', 'calm', 'flashy', 'teeny-tiny', 'fertile', 'thankful', 'fearless', 'lonely', 'adorable', 'wet', 'crowded', 'unused', 'tasteful', 'unbreakable', 'breakable', 'youthful'];
const seperators = ['-', '.', '_'];
const nouns = ['order', 'butter', 'ticket', 'smoke', 'birds', 'rock', 'wing', 'fog', 'sky', 'water', 'cream', 'bikes', 'shoes', 'vegetable', 'cow', 'fork', 'haircut', 'waves', 'dinosaurs', 'blood', 'servant', 'structure', 'party', 'clown', 'pen', 'throat', 'frogs', 'earthquake', 'card', 'toothpaste', 'spy', 'worm', 'activity', 'truck', 'potato', 'office', 'island', 'bottle', 'fairies', 'maid', 'needle', 'squirrel', 'cherry', 'stone', 'advertisement', 'bells', 'kittens', 'deer', 'hobbies', 'river', 'bubble', 'soup', 'cemetery', 'coal', 'crime', 'sugar', 'thunder', 'grandfather', 'ants', 'steam', 'aftermath', 'hair', 'respect', 'wound', 'ground', 'door', 'gold', 'wish', 'fire', 'ring', 'dogs', 'theory', 'watch', 'machine', 'soda', 'star', 'locket', 'name', 'berry', 'castle', 'reward', 'pollution', 'talk', 'school', 'reaction', 'celery', 'canvas', 'car', 'airplane', 'pet', 'cakes', 'grass', 'breath', 'hand'];


$(function () {
	generateNewWord();


	function setRepoName(repoName) {
		$('#repoName').text(repoName);
	}

	function getRandomWordFromArray(array1) {
		return array1[Math.floor(Math.random() * array1.length)];
	}

	function generateNewWord() {
		let randomAdjective = getRandomWordFromArray(adjectives);
		let randomSeperator = getRandomWordFromArray(seperators);
		let randomNoun = getRandomWordFromArray(nouns);
		let repoName = randomAdjective + randomSeperator + randomNoun;
		setRepoName(repoName);
	}

	$(document).on('click', '#refresh', function () {
		generateNewWord();
	});
	$('img').on('dragstart', function (event) {
		event.preventDefault();
	});
});



/*
	Thanks to https://www.randomlists.com/ for the random words. 
	Thanks to https://icons8.com for the refresh and user images.
*/