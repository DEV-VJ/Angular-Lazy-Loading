import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swimlane',
  templateUrl: './swimlane.component.html',
  styleUrls: ['./swimlane.component.css']
})
export class SwimlaneComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  navigate_to(page:String){
    this.route.navigate([`swimlane/${page}`]);
  }
}
