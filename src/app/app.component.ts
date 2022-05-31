import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  // template: `<p>Hello world!</p>`,
  templateUrl: './app.component.html',
  // styles:[],
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  name = 'Luis'
  imgUrl = "https://picsum.photos/200/300";
  
  getName(){
    return this.name;
  }
}