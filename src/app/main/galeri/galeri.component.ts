import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeri',
  imports: [],
  templateUrl: './galeri.component.html',
  styleUrl: './galeri.component.css'
})
export class GaleriComponent {

    currentAngle = 0;
  autoSpinInterval: any;
  isAutoSpinning = true;


  images = [
    { src: 'carousel/galleria1.jpg', alt: '', angle: 0 },
    { src: 'carousel/galleria2.jpg', alt: '', angle: -45 },
    { src: 'carousel/galleria3.jpg', alt: '', angle: -90 },
    { src: 'carousel/galleria4.jpg', alt: '', angle: -135 },
    { src: 'carousel/galleria5.jpg', alt: '', angle: -180 },
    { src: 'carousel/galleria6.jpg', alt: '', angle: -225 },
    { src: 'carousel/galleria7.jpg', alt: '', angle: -270 },
    { src: 'carousel/galleria8.jpg', alt: '', angle: -315 }
  ];

constructor(private route:Router){

}


  ngOnInit() {
    this.startAutoSpin();
  }

  ngOnDestroy() {
    this.stopAutoSpin();
  }

  startAutoSpin() {
    this.stopAutoSpin(); // Önce varsa eski interval'i temizle
    this.autoSpinInterval = setInterval(() => {
      if (this.isAutoSpinning) {
        this.spin('');
      }
    }, 2000); // 2 saniyede bir
  }

  stopAutoSpin() {
    if (this.autoSpinInterval) {
      clearInterval(this.autoSpinInterval);
    }
  }

  spin(sign: string) {
    if (!sign) {
      this.currentAngle += 45;
    } else {
      this.currentAngle -= 45;
    }
  }

  toggleAutoSpin() {
    this.isAutoSpinning = !this.isAutoSpinning;
    if (this.isAutoSpinning) {
      this.startAutoSpin();
    } else {
      this.stopAutoSpin();
    }
  }

  gotoMain(){
    this.route.navigateByUrl("/main")
  }


}
