import { Base } from './base';

export class NoteType extends Base {
    constructor(
        public id: string = null,
        public title: string = '',
        public description: string = '',
        public nbOfNotes: number = 0) {
        super(id, '', '', new Date(), new Date())
    }
}