import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';

@Component({
  selector: 'modals',
  styleUrls: ['./modals.scss'],
  templateUrl: './modals.html'
})
export class Modals {

  constructor(private modalService: NgbModal) {}

  lgModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'پنجره بزرگ';
  }
  smModalShow(): void {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'پنجره کوچک';
  }

  staticModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm',
                                                              backdrop: 'static'});
    activeModal.componentInstance.modalHeader = 'پنجره استاتیک ';
    activeModal.componentInstance.modalContent = `این یک پنجره ثابت است.کلیک بر روی پس زمینه باعث بسته شدن آن نمی‌شود
    بر روی کلید x و یا کلید ذخیره کلیک کنید تا بسته شود.`;
  }

  childModalShow() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'sm'});
    activeModal.componentInstance.modalHeader = 'پنجره فرزند';
    activeModal.componentInstance.modalContent = `این یک پنجره فرزند است . از کامپوننت مادر باز شده است!`;
  }
}
