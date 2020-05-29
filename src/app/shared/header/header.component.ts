import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { ArgumentService } from 'src/app/commons/argument/argument.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private argument: ArgumentService) { }

  ngOnInit(): void {
    this.searchForm = this.formbuilder.group({
      argumentSearch: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.argument.search(this.searchForm.value);
  }

}
