"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./components/heroes/heroes.component');
var contact_list_component_1 = require('./components/contact/contact-list.component');
var contact_add_component_1 = require('./components/contact/contact-add.component');
var hero_detail_component_1 = require('./components/hero-detail/hero-detail.component');
var appRoutes = [
    {
        path: 'contact',
        component: contact_list_component_1.ContactListComponent
    },
    {
        path: '',
        redirectTo: '/contact',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'contact/add',
        component: contact_add_component_1.ContactAddComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map