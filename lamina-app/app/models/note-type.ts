import {Base} from './base';

export class NoteType extends Base {
    constructor(
        public label: string,
        public description: string) {
        super('', '', '', new Date(), new Date())
    }
}