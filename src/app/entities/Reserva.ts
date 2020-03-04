export class Reserva {
  id?: number;
  horaInicio: string;
  horaSalida: string;
  reservaId: number;
  tarjetaId: number;

  constructor(reserva?) {
    {
      reserva = reserva || {};
      this.id = reserva.id || '';
      this.horaInicio = reserva.horaInicio || '';
      this.horaSalida = reserva.horaSalida || '';
      this.reservaId = reserva.reservaId || '';
      this.tarjetaId = reserva.tarjetaId || '';
    }
  }
}
