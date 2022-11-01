import { Component } from '@angular/core';
import { Format } from './navigation.component';

interface Image {
  alt: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-example';
  format: Format = 'grid';

  public visible: boolean = false;

  public images: Image[] = [
    {
      url: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'brugje',
    },
    {
      url: 'https://images.pexels.com/photos/52526/sign-places-travel-information-52526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'wegwijzers',
    },
    {
      url: 'https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'rare eilanden',
    },
  ];

  public changeGrid(format: Format) {
    this.format = format;
    this.visible = !this.visible;
  }
}
