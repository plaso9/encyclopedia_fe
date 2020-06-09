import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { ArgumentNewService } from './argument-new.service';
import { ArgumentService } from 'src/app/commons/argument/argument.service';
import { Argument } from 'src/app/commons/argument/argument';



@Component({
  selector: 'app-argument-new',
  templateUrl: './argument-new.component.html',
  styleUrls: ['./argument-new.component.css']
})
export class ArgumentNewComponent implements OnInit {

  //objects
  argumentObj: Argument;

  insertForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private argument: ArgumentService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const argumentId = params.get('id');
      if(argumentId) {
        this.argument.getArgument(argumentId).subscribe(data => {
          this.argumentObj = data;
          this.insertForm = this.formbuilder.group({
            argumentTitle: [this.argumentObj.title, [Validators.required]],
            argumentDescription: [this.argumentObj.description, [Validators.required]],
          });
        });
      }
    });

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
    if (this.route.snapshot.params.id) {
      this.argument.editArgument(this.insertForm.value, this.route.snapshot.params.id).subscribe((data) => {
        console.log("Arguent updated");
      });
    }
    if (!this.route.snapshot.params.id) {
      this.argument.addArgument(this.insertForm.value).subscribe((data) => {
        console.log("Arguent added");
      });
    }
    this.router.navigate(['/arguments']);
  }
}
