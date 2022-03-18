var input = document.getElementById('userinput');
var add = document.getElementById('additem');
var body = document.querySelector('body');
var list = document.querySelector('ul');
var container = document.querySelector('div');

function checkItemLength() {
	if (input.value.length > 0) {
		return true;
	}
	return false;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute('class', 'item');

	li.addEventListener('click', toggleItem);

	var del = document.createElement('button');
	del.appendChild(document.createTextNode('Delete'));
	del.setAttribute('class', 'delete-item');

	li.appendChild(del);
	list.appendChild(li);
	input.value = ''

	del.onclick = removeParent;
}

function removeParent(event) {
	event.target.parentNode.remove();
}

function addItemToList() {
	if (list === null) {
		list = document.createElement('ul');
		createListElement();
		container.appendChild(list);
	}
	else {
		createListElement();
	}
}

function addItemOnClick() {
	if (checkItemLength()) {
		addItemToList();
	}
}

function addItemOnPress(event) {
	if (checkItemLength() && event.key === 'Enter') {
		addItemToList();
	}
}

function toggleItem() {
	this.classList.toggle('done');
}


add.addEventListener('click', addItemOnClick)
input.addEventListener('keypress', addItemOnPress)