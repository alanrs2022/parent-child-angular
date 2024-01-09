import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataModel } from '../app.component';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnInit {


  @Input() dataSet!:DataModel[];
  @Output() messageEvent = new EventEmitter<DataModel>();
  @ViewChild('messageText1') messageText1!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }
  addMessage(text:any){
   
    this.messageEvent.emit({message:text,userType:1})
    //this.dataSet.push()
    this.messageText1.nativeElement.value = ''
  }

}
