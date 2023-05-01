class EditorMemento {
	private content: string;

	constructor(content: string) {
		this.content = content;
	}

	getContent(): string {
		return this.content;
	}
}

class Editor {
	private content = '';

	type(words: string): void {
		this.content += words;
	}

	getContent(): string {
		return this.content;
	}

	save(): EditorMemento {
		return new EditorMemento(this.content);
	}

	restore(memento: EditorMemento): void {
		this.content = memento.getContent();
	}
}

const editor = new Editor();

editor.type('This is the first sentence. ');

const savedState = editor.save();

editor.type('This is the second sentence. ');

console.log(editor.getContent());
// Output: This is the first sentence. This is the second sentence.

editor.restore(savedState);

console.log(editor.getContent());
// Output: This is the first sentence.
