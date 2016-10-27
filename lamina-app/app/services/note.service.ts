import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from '../models/note';

@Injectable()
export class NoteService {
    private url = 'app/notes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    public getItems(): Promise<Note[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Note[])
            .catch(this.handleError);
    }

    getItem(id: string): Promise<Note> {
        return this.getItems()
            .then(items => items.find(item => item.id === id));
    }

    update(item: Note): Promise<Note> {
        const url = `${this.url}/${item.id}`;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(() => item)
            .catch(this.handleError);
    }

    create(note: Note): Promise<Note> {
        return this.http
            .post(this.url, JSON.stringify(note), { headers: this.headers })
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
