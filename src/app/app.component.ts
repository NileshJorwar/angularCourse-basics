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
  name = 'nilesh jorwar'
  imgUrl = "https://picsum.photos/200/300";
  currentDate = new Date();
  cost = 1000;
  temperature = 23.368;
  pizza = {
    toppings:  ['bacon', 'paneer'],
    size: 'Large'
  };
  blueClass = false;


  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    // this.imgUrl = "https://picsum.photos/200" 
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImage(event: string){
      console.log(event);
  }
}