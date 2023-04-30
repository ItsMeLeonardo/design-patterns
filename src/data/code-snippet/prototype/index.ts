// Chart prototype interface
interface BlogCardType {
	clone(): BlogCardType;
}

// Concrete chart prototype
class BlogCardPrototype {
	private title = '';
	private description = '';

	constructor(title: string, description: string) {
		this.title = title;
		this.description = description;
	}

	clone(): BlogCardType {
		return new BlogCardPrototype(this.title, this.description);
	}

	setTitle(title: string) {
		this.title = title;
	}

	setDescription(description: string) {
		this.description = description;
	}

	getTitle() {
		return this.title;
	}

	getDescription() {
		return this.description;
	}
}

// Usage example
const chartPrototype = new BlogCardPrototype(
	'Blog Card 1',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
);

const chart1 = chartPrototype.clone() as BlogCardPrototype;
chart1.setDescription('Lorem ipsum dolor sit amet');

const chart2 = chartPrototype.clone() as BlogCardPrototype;

chart2.setTitle('Blog Card 2');

const chart3 = chartPrototype.clone() as BlogCardPrototype;

chart3.setTitle('Blog Card 3');
