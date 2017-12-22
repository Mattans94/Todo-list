class DoneList extends Base{

	constructor(app){
		super();
		this.app = app;
		this.items = [];
	}

	add(item){
		item.myList = this;
		this.items.unshift(item);
	}

	removeByItem(item){
		let itemIndex = this.items.indexOf(item);
		if(itemIndex < 0){ return; }
		this.items.splice(itemIndex, 1);
		this.app.render();
	}

	template(){
		let html = `
								<div class="col mt-5 itemList2">
								<h2>Done</h2>
					    	<div class="done">
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
