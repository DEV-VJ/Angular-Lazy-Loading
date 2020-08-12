import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Lazy loading';
  
  ngOnInit(){
    //Brand by VJ
		console.log("%c DEV - %cVJ","font-size:xx-large;font-family: auto;","color:teal;font-size:xx-large;font-family: auto;");
  }
}
