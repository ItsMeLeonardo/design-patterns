// Abstract Factory interface
interface StoreTemplateFactory {
	createHeader(): Header;
	createFooter(): Footer;
	createProductList(): ProductList;
}

// Light Color Scheme Factory
class LightStoreTemplateFactory implements StoreTemplateFactory {
	createHeader(): Header {
		return new LightHeader();
	}
	createFooter(): Footer {
		return new LightFooter();
	}
	createProductList(): ProductList {
		return new LightProductList();
	}
}

// Dark Color Scheme Factory
class DarkStoreTemplateFactory implements StoreTemplateFactory {
	createHeader(): Header {
		return new DarkHeader();
	}
	createFooter(): Footer {
		return new DarkFooter();
	}
	createProductList(): ProductList {
		return new DarkProductList();
	}
}

// Product Components
interface Header {
	render(): void;
}

class LightHeader implements Header {
	render(): void {
		console.log('Rendering light header...');
	}
}

class DarkHeader implements Header {
	render(): void {
		console.log('Rendering dark header...');
	}
}

interface Footer {
	render(): void;
}

class LightFooter implements Footer {
	render(): void {
		console.log('Rendering light footer...');
	}
}

class DarkFooter implements Footer {
	render(): void {
		console.log('Rendering dark footer...');
	}
}

interface ProductList {
	render(): void;
}

class LightProductList implements ProductList {
	render(): void {
		console.log('Rendering light product list...');
	}
}

class DarkProductList implements ProductList {
	render(): void {
		console.log('Rendering dark product list...');
	}
}

// Usage example
const colorScheme = getUserSelectedColorScheme(); // assume this returns 'light' or 'dark'
let factory: StoreTemplateFactory;

if (colorScheme === 'light') {
	factory = new LightStoreTemplateFactory();
} else {
	factory = new DarkStoreTemplateFactory();
}

const header = factory.createHeader();
const footer = factory.createFooter();
const productList = factory.createProductList();

header.render();
productList.render();
footer.render();
