import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  wiki: any = []
  contribuidores: any = []

  constructor(public servicio: WikipediaService){}

  buscarWiki(){

    let input: any = document.getElementById('buscarWiki')

    let url = "https://es.wikipedia.org/w/api.php?action=opensearch&search=" + input.value + "&limit=10&namespace=0&format=json&origin=*";

    console.log(url)

    this.servicio.buscar(url).subscribe(wiki => {
      this.wiki = wiki;
      console.log(wiki);
    });


  }

  verContribuidores(wikipedia: any){

    console.log(wikipedia)

    let url = "https://es.wikipedia.org/w/api.php?action=query&prop=contributors&titles=" + wikipedia + "&format=json&origin=*";
    console.log(url)

    this.servicio.buscar(url).subscribe(contribuidores => {
      this.contribuidores = contribuidores;
      console.log(contribuidores);
    });

  }
}
