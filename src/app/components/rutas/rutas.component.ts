import { Component } from '@angular/core';
import { Ruta, RutasService } from 'src/app/servicios/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {
  rutas:Ruta[]=[]

  ngOnInit(): void{

  this.rutas = this._rutasService.getRutas();
  }

  constructor(public _rutasService:RutasService, private router:Router){
   
  }
  
  verRuta(ob: Ruta){
    console.log(ob);
    this.router.navigate(['/heroe',this.rutas.indexOf(ob)]);
  }

}
