export class BookTransactionResponse {
    constructor(
        public bookid: number,
        public bookName: number,
        public issueDate: any,
        public returnDate: any,
        public fine: number,
    ) {}
}