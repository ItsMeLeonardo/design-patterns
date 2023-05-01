// Component interface
interface MenuItem {
	label: string;
	icon: string;
	action: () => void;
}

// Leaf component
class SimpleMenuItem implements MenuItem {
	constructor(public label: string, public icon: string, public action: () => void) {}
}

// Composite component
class Menu implements MenuItem {
	public children: MenuItem[] = [];

	constructor(public label: string, public icon: string) {}
	action() {
		console.log('Menu action');
	}

	addAction(action: () => void) {
		// Add the action to all child components recursively
		this.children.forEach((child) => {
			if (child instanceof Menu) {
				child.addAction(action);
			} else {
				child.action = action;
			}
		});
	}

	addMenuItem(item: MenuItem) {
		this.children.push(item);
	}

	getLabel() {
		return this.label;
	}

	getIcon() {
		return this.icon;
	}

	setLabel(label: string) {
		this.label = label;
	}

	setIcon(icon: string) {
		this.icon = icon;
	}
}

// Client code
const menu = new Menu('Main Menu', 'menu-icon');
const submenu1 = new Menu('Submenu 1', 'submenu-icon');
const submenu2 = new Menu('Submenu 2', 'submenu-icon');
const item1 = new SimpleMenuItem('Item 1', 'item-icon', () => {
	console.log('Item 1');
});
const item2 = new SimpleMenuItem('Item 2', 'item-icon', () => {
	console.log('Item 2');
});
const item3 = new SimpleMenuItem('Item 3', 'item-icon', () => {
	console.log('Item 3');
});
submenu1.addMenuItem(item1);
submenu1.addMenuItem(item2);
submenu2.addMenuItem(item3);
menu.addMenuItem(submenu1);
menu.addMenuItem(submenu2);
