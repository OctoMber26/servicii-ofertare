import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServiciiService } from '../Services/servicii.servise';
import { Serviciu } from '../Services/serviciu.model';

declare const window: any;
@Component({
  selector: 'app-adaugare-serviciu',
  templateUrl: './adaugare-serviciu.component.html',
  styleUrls: ['./adaugare-serviciu.component.css'],
})
export class AdaugareServiciuComponent implements OnInit {
  @ViewChild('Denumire') DenumireRef: ElementRef;
  @ViewChild('Cantitate') CantitateRef: ElementRef;
  @ViewChild('Indice') IndiceRef: ElementRef;
  @ViewChild('Pret') PretRef: ElementRef;

  popupModal: any;
  serviciuForm: FormGroup;
  servicii: Serviciu[];

  constructor(
    private formBuilder: FormBuilder,
    private serviciiService: ServiciiService
  ) {}

  ngOnInit(): void {
    this.popupModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );

    this.serviciuForm = this.formBuilder.group({
      formDenumire: ['', Validators.required],
      formCantitate: ['', Validators.required],
      formIndice: ['', Validators.required],
      fomrPret: ['', Validators.required],
    });
  }

  onAddServiciu() {
    const srvDenumire = this.DenumireRef.nativeElement.value;
    const srvCantitate = this.CantitateRef.nativeElement.value;
    const srvIndice = this.IndiceRef.nativeElement.value;
    const srvPret = this.PretRef.nativeElement.value;

    let newServiciu = new Serviciu(
      srvDenumire,
      srvCantitate,
      srvIndice,
      srvPret
    );

    this.serviciiService.addServiciu(newServiciu);
    this.popupModal.hide();
    this.serviciuForm.reset();
  }

  openModal() {
    this.popupModal.show();
  }

  closeModal() {
    this.popupModal.hide();
  }
}
