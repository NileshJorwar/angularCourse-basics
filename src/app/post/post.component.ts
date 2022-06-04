import {
  Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  @Input('img') postImg = ''
  @Output() imageSelected = new EventEmitter<string>();

  //first function to run
  constructor() {
    //get called during initialization of our component
    console.log('constructor called', this.postImg)
    //runs once 

  }

  //another hook when our comp is initialized with data
  ngOnInit() {

    console.log('ngOnInit called', this.postImg)
    //runs after binding has occurred
    //should be used when data is available from parent to child
    //runs once 

  }

  ngOnChanges() {

    console.log('ngOnChanges called', this.postImg)
    //runs whenever changes made to the compo
    //guaranteed to run once in our comp

  }

  ngDoCheck() {

    console.log('ngDoCheck called', this.postImg)
    //runs after change detection cycle has occurred
    //for performing changes when angular dont want to
  }

  ngAfterContentInit() {
      //runs once 

    console.log('ngAfterContentInit called')
    //hook refers to the projected content from parent comp
    //runs after content has been initialized
    //expr and bindings have been processed 
    // at this point projected content is inserted into child comp  
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')
    //runs after content has been checked for the changes
 
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
      //runs once 

    //runs when comp template has been initialized
  } 
  
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')  
          //runs when comp template has been checked
  }
}
