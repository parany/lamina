import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../../models/note';
import { NoteType } from '../../models/note-type';
import { NoteService } from '../../services/note.service';
import { NoteTypeService } from '../../services/note-type.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note/note-edit.component.html'
})
export class NoteEditComponent implements OnInit {
    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private noteService: NoteService,
        private noteTypeService: NoteTypeService) {
    }

    item = new Note();
    id: string;
    operation: string = 'Edit';
    noteTypes: NoteType[];

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => this.id = params['id']);
        this.noteTypeService.getItems().then(items => {
            this.noteTypes = items;
            return this.noteService.getItem(this.id);
        }).then(item => {
            this.item = item;
            this.item.noteType = this.noteTypes.find(n => n.title == this.item.noteType.title);
            this.operation += ' - ' + item.title;
        });
    }

    onSubmit(): void {
        this.noteService.update(this.item).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}