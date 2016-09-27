import { Pipe } from '@angular/core';

const defaultLimit: number = 40;

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe {
    transform(val, args = defaultLimit) {
        if (val.length > args)
            return val.substring(0, args) + '...';

        return val;
    }
}