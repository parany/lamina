"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var contact_service_1 = require('../../services/contact.service');
var ContactListComponent = (function () {
    function ContactListComponent(router, contactService) {
        this.router = router;
        this.contactService = contactService;
        this.contacts = [];
    }
    ContactListComponent.prototype.onSearch = function (filter) {
        var regex = new RegExp(filter, 'i');
        this.contacts = this.allContacts.filter(function (c) { return regex.test(c.firstName + " " + c.lastName); });
    };
    ContactListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts()
            .then(function (contacts) {
            _this.allContacts = contacts;
            _this.contacts = _this.allContacts;
        });
    };
    ContactListComponent.prototype.gotoDetail = function (contact) {
        var link = ['/contact', contact.id];
        this.router.navigate(link);
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/components/contact/contact-list.component.html',
            styleUrls: ['app/components/contact/contact.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, contact_service_1.ContactService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map