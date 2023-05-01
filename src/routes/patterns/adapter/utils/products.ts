export class Product {
	constructor(
		public name: string,
		public price: number,
		public category: string,
		public color: string
	) {}
}

type ResponseCategory = {
	id: number;
	name: string;
};

export class ResponseProduct {
	constructor(
		public product_name: string,
		public product_price: number,
		public product_category: ResponseCategory,
		public product_color: string
	) {}
}

export class ProductAdapter {
	constructor(private productResponse: ResponseProduct[]) {}

	getProducts(): Product[] {
		return this.productResponse.map((product) => {
			return new Product(
				product.product_name,
				product.product_price,
				product.product_category.name,
				product.product_color
			);
		});
	}
}
