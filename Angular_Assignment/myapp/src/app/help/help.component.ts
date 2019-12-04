import { Component } from '@angular/core';

@Component({
    selector : 'app-help',
    templateUrl : 'help.component.html',
    styleUrls : ['help.component.css']
})


export class HelpComponent {
    col = 'red';
    col1 = 'yellow';
    isActive = false;
constructor() {
    setInterval(() => {
        this.isActive = !this.isActive;
    }, 200);
 }
}
