import { Component } from '@angular/core';

@Component({
  selector: 'dynamics',
  templateUrl: './app.component.dynamics.html',
  styleUrl: '../app.component.css'
})
export class Dynamics {
    clickArray : string[] = [];
    showSecret : boolean = false;
    firstClick : string = ''

    addClicks() {
        let date = Date.now().toString();
        this.clickArray.push(date);
        if(this.clickArray.length < 2){
            this.firstClick = date;
        }
    }

    toggleDetails() {
        this.addClicks();
        this.showSecret = !this.showSecret;
    }
}
