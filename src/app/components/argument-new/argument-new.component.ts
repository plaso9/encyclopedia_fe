import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ArgumentNewService } from './argument-new.service';

@Component({
  selector: 'app-argument-new',
  templateUrl: './argument-new.component.html',
  styleUrls: ['./argument-new.component.css']
})
export class ArgumentNewComponent implements OnInit {

  insertForm: FormGroup;
  submitted = false;

  constructor(private as: ArgumentNewService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.insertForm = this.formbuilder.group({
      argumentTitle: ['', [Validators.required]],
      argumentDescription: ['', [Validators.required]],
    });
  }
  get title() { return this.insertForm.get('argumentTitle'); }
  get description() { return this.insertForm.get('argumentDescription'); }

  onReset() {
    this.submitted = false;
    this.insertForm.reset();
  }
  onSubmit() {
    this.submitted = true;
    if (this.insertForm.invalid) return;
    this.as.addArgument(this.insertForm.value).subscribe((data) => {
      console.log("Arguent added");
    });
  }
}
