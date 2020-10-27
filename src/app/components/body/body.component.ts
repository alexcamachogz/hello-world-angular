import { Component } from '@angular/core'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.styl']
})
export class BodyComponent {
  show = true

  phrase = {
    message: 'Un gran poder requiere una gran responsabilidad.',
    author: '🕸 Ben Parker'
  }

  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus']
}
