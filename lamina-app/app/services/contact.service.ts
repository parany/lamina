import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
    private contactsUrl = 'app/contacts';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    public getContacts(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(response => response.json().data as Contact[])
            .catch(this.handleError);
    }

    getHero(id: number): Promise<Contact> {
        return this.getContacts()
            .then(contacts => contacts.find(contact => contact.id === id));
    }

    update(contact: Contact): Promise<Contact> {
        const url = `${this.contactsUrl}/${contact.id}`;
        return this.http
            .put(url, JSON.stringify(contact), { headers: this.headers })
            .toPromise()
            .then(() => contact)
            .catch(this.handleError);
    }

    create(name: string): Promise<Contact> {
        return this.http
            .post(this.contactsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        let url = `${this.contactsUrl}/${id}`;
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
