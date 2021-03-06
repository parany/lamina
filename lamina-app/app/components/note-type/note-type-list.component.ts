import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note-type/note-type-list.component.html',
    styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteTypeListComponent implements OnInit {
    items: NoteType[] = [];
    selectedItem: NoteType;
    private allItems: NoteType[];

    constructor(
        private router: Router,
        private noteTypeService: NoteTypeService,
        private noteService: NoteService) {}

    onSearch(filter: string): void {
        var regex = new RegExp(filter, 'i');
        this.items = this.allItems.filter(c => regex.test(`${c.title} ${c.description}`));
    }

    ngOnInit(): void {
        this.noteTypeService.getItemsWithNotesCount().then(items => {
            this.allItems = items;
            this.items = this.allItems;
            this.select(items[0]);
        });
    }

    gotoDetail(contact: NoteType): void {
        let link = ['/note', contact.id];
        this.router.navigate(link);
    }

    delete(item: NoteType): void {
        this.noteTypeService.delete(item.id).then(() => {
            this.allItems = this.allItems.filter(i => i.id != item.id);
            this.items = this.allItems;
        });
    }

    select(item: NoteType) {
        this.allItems.forEach(i => i.selected = false);
        item.selected = true;
        this.selectedItem = item;
    }
}