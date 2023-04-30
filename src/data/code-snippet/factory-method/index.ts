type GridTemplateType = 'template_1' | 'template_2' | 'template_3';
export class GridTemplateFactory {
	static createTemplate(type: GridTemplateType) {
		switch (type) {
			case 'template_1':
				return new GridTemplate1();
			case 'template_2':
				return new GridTemplate2();
			case 'template_3':
				return new GridTemplate3();
			default:
				throw new Error(`Invalid template type: ${type}`);
		}
	}
}

// Template classes
class GridTemplate1 {
	// code to generate basic template
}

class GridTemplate2 {
	// code to generate premium template
}

class GridTemplate3 {
	// code to generate custom template
}
