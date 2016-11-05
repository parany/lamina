import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note/note-detail.component.html',
    styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteDetailComponent implements OnInit {
    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private noteService: NoteService) {
    }

    item = new Note();
    id: string;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => this.id = params['id']);
        this.noteService.getItem(this.id).then(item => this.item = item);
    }

    goBack(): void {
        this.location.back();
    }
}