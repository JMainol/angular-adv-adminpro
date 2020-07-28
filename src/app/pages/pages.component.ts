import { Component, AfterViewChecked } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements AfterViewChecked {

  constructor( private settingsService: SettingsService ) { }

  ngAfterViewChecked(): void {
    customInitFunctions();
  }

}
