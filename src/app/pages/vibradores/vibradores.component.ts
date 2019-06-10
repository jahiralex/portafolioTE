import { Component, OnInit } from '@angular/core';
import { VibradoresService } from '../../services/vibradores.service';

@Component({
  selector: 'app-vibradores',
  templateUrl: './vibradores.component.html',
  styleUrls: ['./vibradores.component.css']
})
export class VibradoresComponent implements OnInit {

  constructor( public vibradoresService: VibradoresService ) { }

  ngOnInit() {
  }

}
