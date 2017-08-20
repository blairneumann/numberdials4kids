import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { NumberGroup, minDigits, maxDigits } from '../model/number-groups';
import { trigger, state, style, animate, transition } from '@angular/animations';

/*
declare var $: any;
declare var AWS: any;
declare var ChattyKathy: any;
*/

@Component({
  selector: 'number-group',
  templateUrl: './number-group.component.html',
  styleUrls: [ './number-group.component.scss', ],
  animations: [
    trigger('dialOut', [
      state('*', 
        style({
          opacity: 1,
        })
      ),
      transition(':leave', [
        animate('200ms', style({
          transform: 'translateX(0) scale(0)',
          opacity: 0,
        })),
      ]),
    ])
  ],
})
export class NumberGroupComponent implements OnInit {

  private _group: NumberGroup;
  // private kathy: any;

  constructor() {
    this._group = new NumberGroup();
  }

  get group() {
    return this._group;
  }

  ngOnInit() {
    /*
    var awsCredentials = new AWS.Credentials("", "");
    var settings = {
        awsCredentials: awsCredentials,
        awsRegion: "us-west-2",
        pollyVoiceId: "Justin",
        textType: 'ssml',
        cacheSpeech: true
    }

    this.kathy = ChattyKathy(settings);
    */
  }

  /*
  playPause() {
    $('#playPause').removeClass('fa-play');
    $('#playPause').addClass('fa-pause');
      
    this.kathy.SpeakWithPromise(String(this._group.value)).then(() => {
      $('#playPause').removeClass('fa-pause');
      $('#playPause').addClass('fa-play');
    });
  }
  */
  
  increment() {
    if (this._group.length < maxDigits) {
      this._group.grow();
    }
  }

  decrement() {
    if (this._group.length > minDigits) {
      this._group.shrink();
    }
  }
}
