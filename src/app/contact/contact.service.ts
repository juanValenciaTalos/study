import { Contact } from './contact';

export class ContactService {

    contacts : Contact[];
    constructor() {
        this.contacts = [
            new Contact(1, 'juan'),
            new Contact(13, 'mateo'),
            new Contact(15, 'daniela'),
            new Contact(15, 'johan'),
            new Contact(20, 'laura')
          ];
    }

    getContacs() { return this.contacts; }

    deleteContact = (contact) => {  
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i] == contact) {
                this.contacts.splice(i, 1); // At the current index, remove one element
            }
        }
    }

    createContact = (contactId: number, contactName: string) => {  
        this.contacts.push(new Contact(contactId,contactName));
    }

}