import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from  "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";



@NgModule({
  imports: [
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class MaterialModule {
    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer){
        this.matIconRegistry.addSvgIcon(
            "instagram",
            this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram.svg`)
          );
        }
}