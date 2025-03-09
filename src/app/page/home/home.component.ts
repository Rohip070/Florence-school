import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { BannerComponent } from '../../banner/banner.component';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { ProgramComponent } from '../../program/program.component';
import { ContactUsComponent } from '../../contact-us/contact-us.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, BannerComponent, AboutUsComponent, ProgramComponent, ContactUsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',  
})
export class HomeComponent {

}
