import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteType } from '../../models/note-type'
import { NoteTypeService } from '../../services/note-type.service';

@Component({
    selector: 'note-list',
    templateUrl: 'app/components/note-type/note-type-edit.component.html',
    styleUrls: ['app/components/note-type/note-type.css']
})
export class NoteTypeEditComponent implements OnInit {
    constructor(
        private router: Router,
        private location: Location,
        private route: ActivatedRoute,
        private noteTypeService: NoteTypeService) {
    }

    item = new NoteType();
    id: string;
    operation: string = 'Edit';

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => this.id = params['id']);
        this.noteTypeService.getItem(this.id).then(item => this.item = item);
    }

    onSubmit(): void {
        this.noteTypeService.update(this.item).then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}