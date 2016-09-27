export class Base {
    constructor(
        public id: string,
        public createdBy: string,
        public updatedBy: string,
        public createdAt: Date,
        public updatedAt: Date) { }
}