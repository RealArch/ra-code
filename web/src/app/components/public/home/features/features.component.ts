import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = [
    {
      title: `Diseño personalizado`,
      description: `Creamos sitios web que se adaptan a las 
      necesidades específicas de su negocio y reflejan la 
      identidad de su marca.`,
      icon: `emoji_objects`
    },
    {
      title: `Velocidad de carga rápida`,
      description: `Optimizamos el rendimiento de su sitio web para garantizar que se cargue rápidamente, mejorando la experiencia del usuario y el SEO.`,
      icon: `electric_bolt`
    },
    {
      title: `Diseño sencillo y elegante`,
      description: `Creamos diseños minimalistas y
      elegantes para hacer que su sitio web sea fácil de navegar y 
      atractivo para sus visitantes.`,
      icon: `local_florist`
    },
    {
      title: `Servicio al cliente excepcional`,
      description: `Estamos disponibles para responder preguntas y
       proporcionar soporte antes, durante y despues del proceso de desarrollo.`,
      icon: `support_agent`
    },
  ]
}
