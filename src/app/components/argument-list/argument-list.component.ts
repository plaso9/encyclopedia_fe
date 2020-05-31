import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { ArgumentService } from 'src/app/commons/argument/argument.service';
import { Argument } from 'src/app/commons/argument/argument';

@Component({
  selector: 'app-argument-list',
  templateUrl: './argument-list.component.html',
  styleUrls: ['./argument-list.component.css']
})
export class ArgumentListComponent implements OnInit {
  searchForm: FormGroup;

  //objects
  argumentObj: Argument;

  constructor(private formbuilder: FormBuilder, private argument: ArgumentService) { }

  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      argumentSearch: ['', [Validators.required]],
    });
    this.argument.getAllArgument().subscribe(data => {
      this.argumentObj = data;
    });
  }

  onSubmit() {
    this.argument.search(this.searchForm.value);
  }

}
