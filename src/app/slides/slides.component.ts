import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.css'
})
export class SlidesComponent {

  images: string[] = ["assets/slider/1.png", "assets/slider/2.png", "assets/slider/3.png"];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia la imagen cada 5 segundos
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
