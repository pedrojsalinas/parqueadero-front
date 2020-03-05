import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/shared/controllers/empresa.service';
import { Empresa } from 'src/app/entities/Empresa';
import { MatDialog } from '@angular/material';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';
import { FormGroup } from '@angular/forms';
import { ReservasService } from 'src/app/shared/controllers/reservas/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styles: ['reservas.component.css']
})
export class ReservasComponent implements OnInit {
  empresas: Empresa[];
  empresa: Empresa;
  dialogRef: any;
  espacios: [];
  mostrar = false;


  constructor(
    private empresaService: EmpresaService,
    private reservaService: ReservasService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.empresas = this.empresaService.empresas;
    console.log("ReservasComponent -> ngOnInit -> this.empresaService.empresas", this.empresaService.empresas)
  }
  reservar(empresa) {
    this.dialogRef = this.matDialog.open(ReservaFormComponent, {
      panelClass: 'contact-form-dialog',
      data: {
        action: 'new',
        empresa
      }
    });

    this.dialogRef.afterClosed()
      .subscribe((response: FormGroup) => {
        if (!response) {
          return;
        }
        console.log("TCL: EmpresasComponent -> response.getRawValue()", response.getRawValue())
        this.reservaService.registrarReserva(response.getRawValue())
      });
  }

  mostrarEspacios(empresa) {
    this.espacios = empresa.espacios;
    this.empresa = empresa;
    this.mostrar = true;
    console.log("ReservasComponent -> mostrarEspacios -> this.espacios", this.espacios)

  }
}
