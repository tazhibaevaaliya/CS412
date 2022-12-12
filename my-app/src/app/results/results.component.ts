import { Component } from '@angular/core';
import { Input } from '@angular/core'; // First, import Input
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() item = ''; // decorate the property with @Input()

}
