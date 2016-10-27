"use strict";
var router_1 = require('@angular/router');
var note_type_list_component_1 = require('./components/note-type/note-type-list.component');
var note_type_add_component_1 = require('./components/note-type/note-type-add.component');
var note_type_detail_component_1 = require('./components/note-type/note-type-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/note-type',
        pathMatch: 'full'
    },
    {
        path: 'note-type',
        component: note_type_list_component_1.NoteTypeListComponent
    },
    {
        path: 'note-type/add',
        component: note_type_add_component_1.NoteTypeAddComponent
    },
    {
        path: 'note-type/edit/:id',
        component: note_type_add_component_1.NoteTypeAddComponent
    },
    {
        path: 'note-type/detail/:id',
        component: note_type_detail_component_1.NoteTypeDetailComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map