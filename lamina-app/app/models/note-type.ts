import {Base} from './base';

export class NoteType extends Base {
    constructor(
        public id: string = null,
        public label: string = '',
        public description: string = '') {
        super(id, '', '', new Date(), new Date())
    }
}