import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'input-output';
  dataSet :DataModel[] =[{message:"Hi",userType:1},{message:"How are you?",userType:0},{message:"Fine!",userType:0}] 
  data:string = "Adfsdf"
  @ViewChild('messageText0') messageText0!: ElementRef;
  @ViewChild('messageText1') messageText1!: ElementRef;
  addMessage(user:number){
    if(user == 0){
     
      this.dataSet.push({message:this.messageText0.nativeElement.value,userType:user})
      this.messageText0.nativeElement.value = ''
    }else{
    
      this.dataSet.push({message:this.messageText1.nativeElement.value,userType:user})
      this.messageText1.nativeElement.value = ''
    }

  }

  addM(message: DataModel) {
    this.dataSet.push(message)
    }
}
export class DataModel{
  message!:string
  userType!:number
}
