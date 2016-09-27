"use strict";
var router_1 = require('@angular/router');
var note_type_list_component_1 = require('./components/note-type/note-type-list.component');
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
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map