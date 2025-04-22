import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-trip',
  standalone: false,
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.css']
})
export class MyTripComponent implements OnInit {

  @Input() booking: any;

  imageArr = [
    { images: 'assets/bus1.jpg' },
    { images: 'assets/bus2.jpg' },
    // Add more if needed
  ];

  randomimage: string = '';

  ngOnInit(): void {
    const randomindex = Math.floor(Math.random() * this.imageArr.length);
    this.randomimage = this.imageArr[randomindex].images;
    console.log("Booking Data: ", this.booking); // Debug log
  }
}