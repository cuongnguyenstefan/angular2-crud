import {Component} from 'angular2/core';
import {NavComponent} from './nav.component';

@Component({
    selector: 'my-app',
    directives: [NavComponent],
    template: `
        <nav-bar></nav-bar>
    `
})
export class AppComponent {
}