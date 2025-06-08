import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-main',
  standalone:true,
  imports: [FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    constructor(private route:Router){

    }

    gotoProfile(){
      this.route.navigateByUrl("/main/profile");
    }
     gotoGaleri(){
      this.route.navigateByUrl("/main/galeria");
    }
}
