import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input()
  mobileNavbar!: boolean;

  public isCollapsed: boolean = true;

  public bsModalRef!: BsModalRef;
  public form = this.fb.group({
    email: this.fb.control(null, [Validators.required, Validators.email]),
    message: this.fb.control(null, [Validators.required]),
  });

  constructor(private fb: FormBuilder, private modalService: BsModalService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public openContactModal(template: TemplateRef<any>): void {
    this.bsModalRef = this.modalService.show(template, Object.assign({}, {
      class: 'modal-lg'
    }));
  }

  public submit(): void {
    if (this.form.valid) {

    } else {
      this.toastr.error("Form is invalid.");
    }
  }

}
