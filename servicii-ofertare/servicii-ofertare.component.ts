import { Component, OnInit } from '@angular/core';
import { ServiciiService } from './Services/servicii.servise';
import { Serviciu } from './Services/serviciu.model';

declare const window: any;
@Component({
  selector: 'app-servicii-ofertare',
  templateUrl: './servicii-ofertare.component.html',
  styleUrls: ['./servicii-ofertare.component.css'],
})
export class ServiciiOfertareComponent implements OnInit {
  servicii: Serviciu[] = [];
  p: any; //Pentru paginator
  popupModal: any; //Pentru modal

  constructor(private serviciiServices: ServiciiService) {}

  ngOnInit(): void {
    //Functia de fetch folosita din 'Service'
    this.servicii = this.serviciiServices.getServicii();
    this.serviciiServices.serviciiChanged.subscribe((servicii: Serviciu[]) => {
      this.servicii = servicii;
    });
    //Functia de fetch folosita din 'Service'

    this.popupModal = new window.bootstrap.Modal(
      document.getElementById('myDeleteModal')
    );
  }

  //Functiile de update si delete, folosite din 'Service'
  updateTable() {
    return this.serviciiServices.update();
  }

  deleteTableServiciu(id: string) {
    this.serviciiServices.delete(id);
    this.closeDeleteModal();
  }
  //Functiile de update si delete, folosite din 'Service'

  // Functiile modalului
  openDeleteModal() {
    this.popupModal.show();
  }

  closeDeleteModal() {
    this.popupModal.hide();
  }
  // Functiile modalului
}
