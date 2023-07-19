import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas:Ruta[]=[
    {
      ciudadorigen: "Pasaje",
      ciudaddestino: "Machala",
      precioruta: "1",
      descripcion: "Transporte",
      tipo:"interno"
    },
    {
      ciudadorigen: "Pasaje",
      ciudaddestino: "Santa Rosa",
      precioruta: "2",
      descripcion: "Transporte",
      tipo:"interno"
    },
    {
      ciudadorigen: "Pasaje",
      ciudaddestino: "Cuenca",
      precioruta: "5",
      descripcion: "Transporte",
      tipo:"externo"
    },
    {
      ciudadorigen: "Machala",
      ciudaddestino: "Cuenca",
      precioruta: "4",
      descripcion: "Transporte",
      tipo:"externo"
    },
    {
      ciudadorigen: "Machala",
      ciudaddestino: "Quito",
      precioruta: "10",
      descripcion: "Transporte",
      tipo:"externo"
    },
    {
      ciudadorigen: "Pasaje",
      ciudaddestino: "Zamura",
      precioruta: "3",
      descripcion: "Transporte",
      tipo:"interno"
    },
    {
      ciudadorigen: "Pasaje",
      ciudaddestino: "Quito",
      precioruta: "11",
      descripcion: "Transporte",
      tipo:"externo"
    },
    {
      ciudadorigen: "Machala",
      ciudaddestino: "Santa Rosa",
      precioruta: "2",
      descripcion: "Transporte",
      tipo:"interno"
    },
    {
      ciudadorigen: "Machala",
      ciudaddestino: "Guayaquil",
      precioruta: "5",
      descripcion: "Transporte",
      tipo:"externo"
    }
  ];

  constructor() { }

  getRutas(){
    return this.rutas;
  }
  getRuta(idx: number):Ruta{
    return this.rutas[idx];
  }
}
export interface Ruta{
  ciudadorigen:string;
  ciudaddestino:string;
  precioruta:string;
  descripcion:string;
  tipo:string;
}
