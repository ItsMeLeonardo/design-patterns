interface Observer {
	update(items: string[]): void;
}

class ItemList {
	private items: string[] = [];
	private observers: Observer[] = [];

	public addItem(item: string) {
		this.items.push(item);
		this.notifyObservers();
	}

	public removeItem(item: string) {
		const index = this.items.indexOf(item);
		if (index !== -1) {
			this.items.splice(index, 1);
			this.notifyObservers();
		}
	}

	public registerObserver(observer: Observer) {
		this.observers.push(observer);
	}

	public removeObserver(observer: Observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	private notifyObservers() {
		for (const observer of this.observers) {
			observer.update(this.items);
		}
	}
}

const itemList = new ItemList();

const observer1: Observer = {
	update(items: string[]) {
		console.log(`Observer 1: ${items}`);
	}
};

itemList.registerObserver(observer1);

itemList.addItem('item 1');
// Output: Observer 1: item 1
