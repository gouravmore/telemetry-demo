import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  constructor(public telemetryService: TelemetryService) { }

  ngOnInit(): void {
    this.telemetryService.impression('page3');
  }

}
