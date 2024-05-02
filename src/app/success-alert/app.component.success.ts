import { Component } from '@angular/core';

@Component({
  selector: 'success-alert',
  template: `
    <div class="alert alert-success alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Success!</strong> You read the warning!
    </div>
  `
})
export class SuccessAlert {

}
