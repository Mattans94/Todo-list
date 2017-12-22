class ListItem extends Base {

	constructor(myList, item){
		super();
		this.myList = myList;
		this.item = item;
		// this.render('.input-list');
	}

	template(){
		let result = `
		<div class="">
			<li class="list-group-item items">${this.item}</li>`

		if (this.myList == app.todoList) {
			result += `<button class="btn btn-warning float-right moveToDone ml-1"><i class="far fa-arrow-alt-circle-right moveToDone"></i></button>`;
			// result += `<button class="btn btn-warning float-right remove ml-1">X</button>`;
			result += `<button class="btn btn-warning float-left moveDown mr-2"><i class="far fa-arrow-alt-circle-down moveDown"></i></button>`;
			result += `<button class="btn btn-warning float-left moveUp"><i class="far fa-arrow-alt-circle-up moveUp"></i></button>`;
		}
		else if (this.myList == app.doneList){
			result += `<button class="btn btn-warning float-right remove">X</button>`;
		}
		result += `</div>`;
		return result;

	}


	click(el){
		if(el.hasClass('moveToDone')){
			this.myList.removeByItem(this);
		} else if (el.hasClass('moveDown')){
			this.myList.moveDown(this);
		} else if (el.hasClass('moveUp')){
			this.myList.moveUp(this);
		} else if(el.hasClass('remove')){
			this.myList.removeByItem(this);
		}
	
	}


}