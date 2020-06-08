import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArgumentService } from 'src/app/commons/argument/argument.service';
import { Argument } from 'src/app/commons/argument/argument';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.css']
})
export class ArgumentComponent implements OnInit {

  //objects
  argumentObj: Argument;

  constructor(private argument: ArgumentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.argument.getArgument(id).subscribe(data => {
      this.argumentObj = data;
    });
  }

}
