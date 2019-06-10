import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public articulosService: ArticulosService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articulosService.buscarArticulosCategoria( params['codigoCategoria']);
    });
  }

}
