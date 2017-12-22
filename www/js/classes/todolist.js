class TodoList extends Base{

	constructor(app){
		super();
		this.app = app;
		this.items = [];
		
		// this.render('.todo-list');
	}

	addItem(){
		let value = $('.item-name');
		if (value.val().length > 0) {
			this.items.unshift(new ListItem(this, value.val()));
			this.app.render();
		}
	}

	removeByItem(item){
		let itemIndex = this.items.indexOf(item);
		if(itemIndex < 0){ return; }
		app.doneList.add(this.items.splice(itemIndex, 1)[0]);
		this.app.render();
	}

	removeFromTodo(item){
		let itemIndex = this.items.indexOf(item);
		if(itemIndex < 0){ return; }
		this.items.splice(itemIndex, 1);
		this.app.render();
	}

	moveDown(item){
		let index = this.items.indexOf(item);
		if (index + 1 < this.items.length) {
			this.items[index] = this.items[index + 1];
			this.items[index + 1] = item;
		}
		this.app.render();
	}

	moveUp(item){
		let index = this.items.indexOf(item);
		if (index > 0) {
			this.items[index] = this.items[index - 1];
			this.items[index - 1] = item;
		}
		this.app.render();
	}


	template(){
		let html = `<div class="row">
									<div class="col mt-5 itemList">
										<h2>To Do</h2>
				        	<ul class="list-group input-list">`;

		for(let item of this.items){
			html += item.html();
		}

    html += `</ul>
      	</div>
    </div>
    `;
    return html;
	}

}














