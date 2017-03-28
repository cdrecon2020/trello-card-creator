// trello api key 
// 720ffeb378d4ec592d4c2ffa9b8f9dc7

const cardButton = $('#card-button');
const project = $('#project');

// authentication

var authenticationSuccess = function() { 
	console.log('Successful authentication'); 
};
var authenticationFailure = function() { 
	console.log('Failed authentication'); 
};

Trello.authorize({
  type: 'popup',
  name: 'AW Trello Card Creator',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});



function makeCard() {
	var myList = '58956480a99fc2e3a97efe3d';
  
	var creationSuccess = function(data) {
  		console.log('Card created successfully. Data returned:' + JSON.stringify(data));
	};
 

	var newCard = {
  		name: 'test', 
  		desc: 'This is the description of our new card.',
  		// Place this card at the top of our list 
  		idList: myList,
  		pos: 'top'
	};
	Trello.post('/cards/', newCard, creationSuccess);
};

cardButton.click(makeCard);








