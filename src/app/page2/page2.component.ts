import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(public telemetryService: TelemetryService) { }

  ngOnInit(): void {
    this.telemetryService.impression('page2');

  }

}
