import { Component,OnInit } from '@angular/core';

import { Contact } from './contact';

import { ContactService } from './';

@Component({
  selector: 'seed-about',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit{

      constructor(private contactService : ContactService){}

      contacts : Contact[];
      viewFormValue = false;
      contactIdValue = 0;
      contactNameValue = "";
      
      ngOnInit(): void {
        this.loadContacts();
      }

      get viewForm() {
        return this.viewFormValue;
      }
      set viewForm(value) {
        this.viewFormValue = value;
      }

      get contactId() {
        return this.contactIdValue;
      }
      set contactId(value) {
        this.contactIdValue = value;
      }

      get contactName() {
        return this.contactNameValue;
      }
      set contactName(value) {
        this.contactNameValue = value;
      }

      public deleteContact = (contact) => {  
        this.contactService.deleteContact(contact);
        this.loadContacts();
      }

      public showForm = () => {
        this.viewFormValue=true;
      }

      public createContact = () => {  
        this.viewFormValue=false;
        this.contactService.createContact(this.contactIdValue,this.contactNameValue);
        this.loadContacts();
        this.contactIdValue=0;
        this.contactNameValue="";
      }

      loadContacts(){
        this.contacts = this.contactService.getContacs();
      }

 }
