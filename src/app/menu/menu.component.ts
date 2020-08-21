import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  public items = [
    {
      title: 'Reserva de sala',
      icon: 'assets/images/salas.svg',
      status: 'visible',
    },
    {
      title: 'Reporte de problemas ',
      icon: 'assets/images/problemas.svg',
      status: 'visible',
    },
    {
      title: 'Mi equipo',
      icon: 'assets/images/equipo.svg',
      status: 'visible',
    },
    {
      title: 'Comunicados',
      icon: 'assets/images/comunicados.svg',
      status: 'visible',
    },
    {
      title: 'Ficha de sintomatología ',
      icon: 'assets/images/ficha.svg',
      status: 'visible',
    }
  ];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    // this.service.getItems().subscribe((e) => {
    //   console.log(e);
    // });
  }

  ngAlert(e): void{
    alert(`Soy ${e}`);
  }
}
