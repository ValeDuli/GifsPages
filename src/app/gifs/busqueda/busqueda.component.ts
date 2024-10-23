import { Component, ElementRef, ViewChildren} from '@angular/core';
import { Validators } from '@angular/forms';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  
  @ViewChildren('txtBuscar') txtBuscar!:ElementRef;

  constructor(private gifsService:GifsService){

  }
  
  buscar(termino:string){

    if(termino.trim().length===0){
      return
    }

    this.gifsService.buscarGifs(termino);
   document.querySelector('input')!.value='';
  }
}
