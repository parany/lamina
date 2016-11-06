import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Note } from '../../models/note'
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note/note-list.component.html'
})
export class NoteListComponent implements OnInit {
    items: Note[] = [];
    selectedItem: Note;
    search = {
        title: '',
        dateFrom: new Date(),
        dateTo: new Date()
    };
    private allItems: Note[];

    constructor(
        private router: Router,
        private noteService: NoteService) { }

    onSearch(): void {
        var regex = new RegExp(this.search.title, 'i');
        this.items = this.allItems.filter(c => regex.test(`${c.title} ${c.content}`));
    }

    ngOnInit(): void {
        this.search.dateFrom = moment().subtract(14, 'day').toDate();
        this.noteService.getItems().then(items => {
            this.allItems = items;
            this.items = this.allItems;
        });
    }

    gotoDetail(note: Note): void {
        let link = ['/note', note.id];
        this.router.navigate(link);
    }

    delete(item: Note): void {
        this.noteService.delete(item.id).then(() => {
            this.allItems = this.allItems.filter(i => i.id != item.id);
            this.items = this.allItems;
        });
    }

    select(item: Note) {
        this.allItems.forEach(i => i.selected = false);
        item.selected = true;
        this.selectedItem = item;
    }

    onDateChange(field: string, value: string): void {
        this.search[field] = new Date(value);
    }
}