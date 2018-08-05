import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html'
})

export class DefaultModal implements OnInit {

  modalHeader: string;
  modalContent: string = `لورم ایپسوم متن 
  ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده 
  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و 
  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
  را می طلبد تا با نرم افزارها شناخت بیشتری را برای 
  طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو 
  در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت .`;

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }
}
