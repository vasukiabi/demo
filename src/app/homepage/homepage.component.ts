import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {
  constructor() {}
  	 ngOnInit() {
	    sweetAlert({
          title: "Hi! Welcome to Car Pool",
          text: "- To see the user dashboard register with facePrep company and Login! \n \n"+
          "- To see company dashboard use Email:jhondoe@faceprep.com and Password:qwertyuiop",
          icon: "info",
        });
     }
}