import { Component } from '@angular/core';
import { RutasService } from 'src/app/servicios/rutas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  ruta:any={};
  constructor(private activatedRoute: ActivatedRoute, private _rutaService:RutasService){
  this.activatedRoute.params.subscribe(params =>{
    this.ruta= _rutaService.getRuta(params['id']);
    console.log(this.ruta);
  })

}
ngOnInit():void{
  window.scroll(0,0);
}
}
