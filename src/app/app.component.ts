import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SlidesComponent } from './slides/slides.component';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, SlidesComponent, LoginComponent]
})

export class AppComponent {
  title = 'Pagina_Angular';
}
