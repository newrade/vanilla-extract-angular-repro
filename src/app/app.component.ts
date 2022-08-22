import { Component } from '@angular/core';

import * as styles from './app.component.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vanilla-extract-angular';

  ngOnInit() {
    console.log(styles.base);
  }
}
