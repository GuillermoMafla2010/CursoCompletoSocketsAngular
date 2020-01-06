import { Lugar } from './../interfaces/lugar';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {


  @ViewChild('map',{static:true}) mapaElement:ElementRef;
  map:google.maps.Map;


  marcadores:google.maps.Marker[]=[];

  infoWindows:google.maps.InfoWindow[]=[]

  


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


  this.map.addListener('click',(cors)=>{
    const nuevoMarcador:Lugar={
      nombre:'Nuevo Lugar',
      lat:cors.latLng.lat(),
      lng:cors.latLng.lng(),
      id:new Date().toISOString()
    }

    this.agregarMarcador(nuevoMarcador)
  })


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


  const contenido=`<b>${marcador.nombre}</b>`

  const infoWindow=new google.maps.InfoWindow({
    content:contenido
  })

  this.infoWindows.push(infoWindow)

  google.maps.event.addDomListener(marker,'click',(cors)=>{
    this.infoWindows.forEach(infoW=>infoW.close())
    infoWindow.open(this.map,marker)
  })

  google.maps.event.addDomListener(marker,'dblclick',(cors)=>{

    marker.setMap(null)
  })

  google.maps.event.addDomListener(marker,'drag',(cors)=>{
    const nuevoMarcador={
      lat:cors.latLng.lat(),
      lng:cors.latLng.lng(),
      nombre:marcador.nombre
    }

    console.log(nuevoMarcador)
  })


}

}
