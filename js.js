var chars = '';

//Ready
$(function(){
	$('#keyChooser td').click(keysetClicked);
	$('input[placeholder="custom"]').focus()
	$('button[begin]').click(
		function() {
			selectedLists.forEach(function(key){
				if (charlists[key])
					chars = chars + charlists[key];
				else if (key === 'C')
					chars += $('[type="C"] input').val();
			});
			var text = '';
			for (var i = 0; i < 200; i++) {
				text += getChar();
			}
			$('#feed').val(text);
			$('#input').val('');
			$('#input').focus();
		}
	);
	$('button[finish]').click(
		function() {

		}
	)
});

function getChar() {
	return chars.charAt(Math.round(Math.random()*chars.length));
}

var charlists = {
	'a': ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	'0': '0123456789',
	',': '.,?\'"!:;',
	'+': '+-*/=<>',
	'$': '@#`~$%^&(){}[]\\|/'
};

var selectedLists = [];

function keysetClicked() {
	$(this).toggleClass('selected');

	var type = $(this).attr('type');
	var i;
	if ((i = selectedLists.indexOf(type)) !== -1) {
		selectedLists.splice(i,1);
	}
	else {
		selectedLists.push(type);
	}
}