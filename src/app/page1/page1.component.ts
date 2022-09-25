import { Component, OnInit } from '@angular/core';
import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(public telemetryService: TelemetryService) { }

  ngOnInit(): void {
    this.telemetryService.impression('page1');
  }
}
