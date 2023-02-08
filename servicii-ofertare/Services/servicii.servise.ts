import { EventEmitter, Injectable } from '@angular/core';
import { Serviciu } from './serviciu.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiciiService {
  constructor(private http: HttpClient) {}

  serviciiChanged = new EventEmitter<Serviciu[]>();

  private servicii: Serviciu[] = [];

  getServicii() {
    //Get data from backend
    // var header = {
    // headers: new HttpHeaders()
    //.set('Authorization',  `Bearer ${this.authService.getToken()}`)
    // }
    // this.http.get<any>(this.appUrl + 'api/OfertareAccesoriiMontaj/', header).subscribe((data) => {
    //this.sessionData.ofertareAccesoriiMontaj = data;
    // });
    //Get data from backend

    return this.servicii.slice();
  }

  addServiciu(serviciu: Serviciu) {
    this.servicii.push(serviciu);
    this.serviciiChanged.emit(this.servicii.slice());

    //Add data to backend
    //   var header = {
    // headers: new HttpHeaders()
    // .set('Authorization',  `Bearer ${this.authService.getToken()}`)
    //}
    // this.http.post(this.appUrl + 'api/OfertareAccesoriiMontaj/', this.addAccesoriuModel, header).subscribe(
    //(response) => {
    // window.location.reload();
    // },
    // (error) => {
    // console.error('error caught in component')
    // this.message = "Eroare"
    // }
    //);
    //Add data to backend
  }

  update() {
    return this.servicii;
  }

  delete(index: any): void {
    this.servicii.splice(index, 1);
    this.serviciiChanged.next(this.servicii.slice());

    //Delete data from backend
    // var header = {
    //  headers: new HttpHeaders()
    //  .set('Authorization',  `Bearer ${this.authService.getToken()}`)
    //  }
    //this.http.delete(this.appUrl + 'api/OfertareAccesoriiMontaj/' + this.updateAccesoriuModel.id, header).subscribe(
    // (response) => {
    //  window.location.reload();
    //},
    // (error) => {
    //  console.error('error caught in component')
    // this.message = "Eroare"
    // }
    // );
    //Delete data from backend
  }
}
