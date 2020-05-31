import { Component, OnInit } from '@angular/core';
import { ArgumentService } from 'src/app/commons/argument/argument.service';
import { Argument } from 'src/app/commons/argument/argument';

@Component({
  selector: 'app-argument-list',
  templateUrl: './argument-list.component.html',
  styleUrls: ['./argument-list.component.css']
})
export class ArgumentListComponent implements OnInit {

  //objects
  argumentObj: Argument;

  constructor(private argument: ArgumentService) { }

  ngOnInit(): void {
    this.argument.getAllArgument().subscribe(data => {
      this.argumentObj = data;
    });
  }

}
