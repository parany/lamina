import { Base } from './base';
import { NoteType } from './note-type';

export class Note extends Base {
    constructor(
        public title: string = null,
        public content: string = '',
        public noteType: NoteType = new NoteType()) {
        super('', '', '', new Date(), new Date())
    }
}