import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  progress = 0;
  timer: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.startTraining();
  }

  startTraining(){
    this.timer = setInterval(() =>{
      this.progress < 100 ? this.progress += 5: clearInterval(this.timer);
    },1000)
  }

  onStop(){
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent)
    .afterClosed()
    .subscribe((response:boolean) =>{
      response === true ? clearInterval(this.timer) : this.startTraining()
    })
  }

}
