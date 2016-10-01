import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NoteType } from '../models/note-type';

@Injectable()
export class NoteTypeService {
    private url = 'app/noteTypes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    public getItems(): Promise<NoteType[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as NoteType[])
            .catch(this.handleError);
    }

    getItem(id: string): Promise<NoteType> {
        return this.getItems()
            .then(items => items.find(item => item.id === id));
    }

    update(item: NoteType): Promise<NoteType> {
        const url = `${this.url}/${item.id}`;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    create(item: NoteType): Promise<NoteType> {
        item.id = Date.now().toString();
        return this.http
            .post(this.url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        let url = `${this.url}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
