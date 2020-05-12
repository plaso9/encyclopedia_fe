import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ArgumentNewService } from './argument-new.service';

@Component({
  selector: 'app-argument-new',
  templateUrl: './argument-new.component.html',
  styleUrls: ['./argument-new.component.css']
})
export class ArgumentNewComponent implements OnInit {

  argumentTitle: string;
  argumentDescription: string;

  constructor(private as: ArgumentNewService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.as.addArgument(this.argumentTitle, this.argumentDescription).subscribe((data) => {
      // console.log("Arguent added");
    });
  }

}
