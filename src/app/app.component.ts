import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-matarial';

  language:string="this.is multiLanguage"
  constructor() { 
    // translate.addLangs(["en", "es"]);
    // translate.setDefaultLang("en");
  }

  // switchLang(lang: string){
  //   this.translate.use(lang);
  // }
}
