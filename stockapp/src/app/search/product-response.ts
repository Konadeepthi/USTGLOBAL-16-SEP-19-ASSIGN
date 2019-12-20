export class ProductResponse {
    constructor(
        public name: string,
        public category: string,
        public company: string,
        public quantity: number,
        public price: number
    ) {}
}
