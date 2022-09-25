import { Component, HostListener, Output } from '@angular/core';
import { TelemetryService } from './telemetry.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'telemetry-demo';

  // @HostListener('document:TelemetryEvent', ['$event'])

  constructor(
    public telemetryService: TelemetryService,
  ) {
  }

  ngOnInit() {
    this.telemetryService.initialize({
      context: {
        mode: 'play',  // To identify preview used by the user to play/edit/preview
        authToken: '', // Auth key to make  api calls
        sid: '7283cf2e-d215-9944-b0c5-269489c6fa56', // User sessionid on portal or mobile
        did: '3c0a3724311fe944dec5df559cc4e006', // Unique id to identify the device or browser
        uid: 'anonymous', // Current logged in user id
        channel: '505c7c48ac6dc1edc9b08f21db5a571d', // Unique id of the channel(Channel ID)
        pdata: {// optional
          id: 'sunbird.portal', // Producer ID. For ex: For sunbird it would be "portal" or "genie"
          ver: '3.2.12', // Version of the App
          pid: 'sunbird-portal.contentplayer' // Optional. In case the component is distributed, then which instance of that component
        },
        contextRollup: { // Defines the content roll up data
          l1: '505c7c48ac6dc1edc9b08f21db5a571d'
        },
        tags: [ // Defines the tags data
          ''
        ],
        timeDiff: 0,  // Defines the time difference// Defines the object roll up data
        host: '', // Defines the from which domain content should be load
        endpoint: '',
        dispatcher: {
          dispatch(event) {
            console.log(`Events from dispatcher: ${JSON.stringify(event)}`);
          }
        }
      },
      config: {
      },
      // tslint:disable-next-line:max-line-length
      metadata: {
        identifier: 'do_31291455031832576019477',
        name: 'B301,B302_STD_1_TAMIL,ENGLISH_LANG_TERM 1_OPT'
      }
    });
    console.log('telemetry');
    this.telemetryService.start('1');
  }
}
