import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
 clients=["client1","client2","client3","client4","client5"];
 employees=["employees1","employees2","employees3","employees4","employees5"];

}
