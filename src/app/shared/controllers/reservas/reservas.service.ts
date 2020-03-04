import { Global } from './../global';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from 'src/app/entities/Empresa';
import { EmpresaService } from '../empresa.service';
import { Reserva } from 'src/app/entities/Reserva';


@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  public url: string;
  public empresaSeleccionada: Empresa;
  public empresas: Empresa[];
  public onEmpresasChanged: BehaviorSubject<any>;
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(
    private http: HttpClient,
    private empresaService: EmpresaService,
  ) {
    this.empresaSeleccionada = new Empresa();
    this.url = Global.url;
    this.onEmpresasChanged = new BehaviorSubject([]);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {

      Promise.all([
        // this.listarEmpresas()
        this.empresaService.listarEmpresas()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }


  registrarReserva(reserva: Reserva) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post(this.url + 'reservas/crear', reserva, { headers }).subscribe(data => {
      console.log("ReservasService -> data", data)

    })
  }

  listarReservas(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.url + 'reservas', { headers });
  }

  actualizarReserva(reservas: Reserva): Observable<any> {
    const params = JSON.stringify(reservas);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.url + `reservas/${reservas.id}`, params, { headers });
  }

  eliminarReserva(idReserva: number) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.delete(this.url + `reservas/${idReserva}`, { headers });
  }

}





