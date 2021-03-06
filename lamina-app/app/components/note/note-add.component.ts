import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Note } from '../../models/note';
import { NoteType } from '../../models/note-type';
import { NoteService } from '../../services/note.service';
import { NoteTypeService } from '../../services/note-type.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note/note-edit.component.html'
})
export class NoteAddComponent implements OnInit {
    constructor(
        private location: Location,
        private noteService: NoteService,
        private noteTypeService: NoteTypeService) {
    }

    item = new Note();
    id: string;
    operation: string = 'Add';
    noteTypes: NoteType[];

    ngOnInit(): void {
        this.noteTypeService.getItems().then(items => {
            this.noteTypes = items;
            this.item.noteType = items[0];
        });
    }

    onSubmit(): void {
        this.noteService.create(this.item).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}