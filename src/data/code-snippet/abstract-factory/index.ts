// Abstract Factory interface
interface ProductDetailFactory {
	createColorSelector(): Selector;
	createSizeSelector(): Selector;
	createBrandSelector(): Selector;
}

// Clothing Factory
class ClothingDetailFactory implements ProductDetailFactory {
	createColorSelector(): Selector {
		return new ClothingColorSelector();
	}
	createSizeSelector(): Selector {
		return new ClothingSizeSelector();
	}
	createBrandSelector(): Selector {
		return new ClothingBrandSelector();
	}
}

// Electronic Factory
class ElectronicDetailFactory implements ProductDetailFactory {
	createColorSelector(): Selector {
		return new ElectronicColorSelector();
	}
	createSizeSelector(): Selector {
		return new ElectronicSizeSelector();
	}
	createBrandSelector(): Selector {
		return new ElectronicBrandSelector();
	}
}

// Selector Components
interface Selector {
	render(): HTMLElement;
}

class ClothingColorSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>Red</option>
		<option>Green</option>
		<option>Blue</option>
		`;
		return selectElement;
	}
}

class ClothingSizeSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>Small</option>
		<option>Medium</option>
		<option>Large</option>
		`;
		return selectElement;
	}
}

class ClothingBrandSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>Adidas</option>
		<option>Nike</option>
		<option>Puma</option>
		`;
		return selectElement;
	}
}

class ElectronicColorSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>Black</option>
		<option>Silver</option>
		<option>White</option>
		`;
		return selectElement;
	}
}

class ElectronicSizeSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>16 GB</option>
		<option>32 GB</option>
		<option>64 GB</option>
		`;
		return selectElement;
	}
}

class ElectronicBrandSelector implements Selector {
	render(): HTMLElement {
		const selectElement = document.createElement('select');
		selectElement.innerHTML = `
		<option>Apple</option>
		<option>Samsung</option>
		<option>Sony</option>
		`;
		return selectElement;
	}
}

// Usage example

const getProductTypeFromUrl = (): string => {
	const random = Math.floor(Math.random() * 2);

	if (random === 0) {
		return 'electronic';
	}

	return 'clothing';
};

const productType = getProductTypeFromUrl();

let factory: ProductDetailFactory;

if (productType === 'clothing') {
	factory = new ClothingDetailFactory();
} else {
	factory = new ElectronicDetailFactory();
}

const colorSelector = factory.createColorSelector();
const sizeSelector = factory.createSizeSelector();
const brandSelector = factory.createBrandSelector();

const containerElement = document.getElementById('product-details');

containerElement?.appendChild(colorSelector.render());
containerElement?.appendChild(sizeSelector.render());
containerElement?.appendChild(brandSelector.render());
