import {Base} from './base';
import {NoteType} from './note-type';

export class Note extends Base {
    constructor(
        title: string,
        content: string,
        noteType: NoteType) {
        super('', '', '', new Date(), new Date())
    }
}