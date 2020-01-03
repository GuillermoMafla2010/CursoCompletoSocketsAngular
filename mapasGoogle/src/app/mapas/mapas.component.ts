import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Lugar } from '../interfaces/lugar';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {


  @ViewChild('map',{static:true}) mapaElement:ElementRef;
  map:google.maps.Map;


  marcadores:google.maps.Marker[]=[];

  lugares:Lugar[]=[{
    nombre:'Encebollados',
    lat:-0.096194, 
    lng:-78.451854
  },

  {
    nombre:'Iglesia',
    lat:-0.096057, 
    lng:-78.452002
  },

  {
    nombre:'Policia',
    lat:-0.096019, 
    lng:-78.452646
  },
  {
    nombre:'Casa Cristian',
    lat:-0.096663, 
    lng:-78.451900
  }
  

]

  constructor() { }

  ngOnInit() {
    this.cargarMapa()
  }


  cargarMapa(){
    const latLng=new google.maps.LatLng(-0.096663,-78.451900);

    const mapaOpciones:google.maps.MapOptions={
      center:latLng,
      zoom:18,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  }

  this.map=new google.maps.Map(this.mapaElement.nativeElement,mapaOpciones);



  for(const lugar of this.lugares){
    this.agregarMarcador(lugar)
  }



}

agregarMarcador(marcador:Lugar){

  console.log(marcador)
  const latLng= new google.maps.LatLng(marcador.lat,marcador.lng);

  const marker=new google.maps.Marker({
    map:this.map,
    animation:google.maps.Animation.DROP,
    position:latLng,
    draggable:true
  })

  this.marcadores.push(marker)
}

}
