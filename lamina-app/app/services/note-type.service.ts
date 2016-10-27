import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { NoteType } from '../models/note-type';
import { Note } from "../models/note";
import { NoteService } from "../services/note.service";

@Injectable()
export class NoteTypeService {
    private url = 'app/noteTypes';
    private urlNotes = 'app/notes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http,
        private noteService: NoteService
    ) { }

    public getItems(): Promise<NoteType[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as NoteType[])
            .catch(this.handleError);
    }

    public getItemsWithNotesCount(): Promise<NoteType[]> {
        let allItems: NoteType[] = [];
        const promise = new Promise<NoteType[]>(resolve => {
            this.getItems().then(items => {
                allItems = items;
                return this.noteService.getItems();
            }).then(allNotes => {
                allItems.forEach(item => {
                    let notes = allNotes.filter(n => n.noteType.id == item.id);
                    item.nbOfNotes = notes.length;
                });
                resolve(allItems);
            });
        });
        return promise;
    }

    getItem(id: string): Promise<NoteType> {
        return this.getItems().then(items => items.find(item => item.id === id));
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
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
