import {Base} from './base';

export class NoteType extends Base {
    constructor(
        label: string,
        description: string) {
        super('', '', '', new Date(), new Date())
    }
}