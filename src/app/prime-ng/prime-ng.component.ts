import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNGComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  navigate_to(page:String){
    this.route.navigate([`primeng/${page}`]);
  }
}
