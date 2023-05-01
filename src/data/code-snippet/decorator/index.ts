// Component interface
interface TextBox {
	text: string;
	fontStyle: string;
	fontSize: number;
	fontColor: string;
	backgroundColor: string;
}

// Base component
class SimpleTextBox implements TextBox {
	constructor(
		public text: string,
		public fontStyle: string,
		public fontSize: number,
		public fontColor: string,
		public backgroundColor: string
	) {}
}

// Decorator classes
class BoldDecorator implements TextBox {
	constructor(private textBox: TextBox) {}

	get text() {
		return this.textBox.text;
	}

	set text(text: string) {
		this.textBox.text = text;
	}

	get fontStyle() {
		return `${this.textBox.fontStyle} bold`;
	}

	set fontStyle(fontStyle: string) {
		this.textBox.fontStyle = fontStyle;
	}

	get fontSize() {
		return this.textBox.fontSize;
	}

	set fontSize(fontSize: number) {
		this.textBox.fontSize = fontSize;
	}

	get fontColor() {
		return this.textBox.fontColor;
	}

	set fontColor(fontColor: string) {
		this.textBox.fontColor = fontColor;
	}

	get backgroundColor() {
		return this.textBox.backgroundColor;
	}

	set backgroundColor(backgroundColor: string) {
		this.textBox.backgroundColor = backgroundColor;
	}
}

class FontSizeDecorator implements TextBox {
	constructor(private textBox: TextBox, private _fontSize: number) {}

	get text() {
		return this.textBox.text;
	}

	set text(text: string) {
		this.textBox.text = text;
	}

	get fontStyle() {
		return this.textBox.fontStyle;
	}

	set fontStyle(fontStyle: string) {
		this.textBox.fontStyle = fontStyle;
	}

	get fontSize() {
		return this._fontSize;
	}

	set fontSize(fontSize: number) {
		this._fontSize = fontSize;
	}

	get fontColor() {
		return this.textBox.fontColor;
	}

	set fontColor(fontColor: string) {
		this.textBox.fontColor = fontColor;
	}

	get backgroundColor() {
		return this.textBox.backgroundColor;
	}

	set backgroundColor(backgroundColor: string) {
		this.textBox.backgroundColor = backgroundColor;
	}
}

// Client code
const textBox = new SimpleTextBox('Hello, world!', 'normal', 16, 'black', 'white');
const largeTextBox = new FontSizeDecorator(textBox, 24);

// Applying multiple decorators
const boldAndLargeTextBox = new BoldDecorator(largeTextBox);

// Displaying the text box
console.log(boldAndLargeTextBox.text); // "Hello, world!"
console.log(boldAndLargeTextBox.fontStyle); // "normal bold"
console.log(boldAndLargeTextBox.fontSize); // 24
console.log(boldAndLargeTextBox.fontColor); // "black"
console.log(boldAndLargeTextBox.backgroundColor); // "white"
