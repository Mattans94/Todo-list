class App extends Base{

	constructor(){
		super();
		this.todoList = new TodoList(this);
		this.doneList = new DoneList(this);
		console.log(this);
	}

	render(el){
    // Call parent class method
    super.render(el);
    this.doneList.render('.done-list');
    this.todoList.render('.todo-list');
    // Also save the JSON after each render
    JSON._save('todo-list', {app: this});
  }


  click(el, event){
  	if (el.hasClass('add-item-last')){
  		this.todoList.addItem();
  	} else if (el.hasClass('add-item-first')){
  		this.todoList.addItemToTop();
  	} else if (el.hasClass('remove-item-last')){
  		this.todoList.removeLastItem();
  	} else if (el.hasClass('remove-item-first')){
  		this.todoList.removeFirstItem();
  	}
  }


	template(){
		return `
		<div class="row">
			<div class="col-12 mt-5">
				<div class="row">
					<div class="col-6 noPad">
						<div class="input-group">
		          <input type="text" class="form-control item-name" placeholder="Add 'Todo' to the Todolist">
		          <span class="input-group-btn">
		            <button class="btn btn-warning add-item-last" type="button">Add</button>
		          </span>
		        </div>
		      </div>
				</div>
			</div>

			<div class="col-6 col-md-6 todo-list"></div>
			<div class="col-6 col-md-6 done-list"></div>
		</div>`;
  }

}










