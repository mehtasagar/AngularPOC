
import { Component } from '@angular/core';
import { GenericWebService } from '../generic-web-service/generic.web.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import 'rxjs/add/observable/throw'; //Todd, added this and fixed  'Observable_1.Observable.throw is not a function at CatchSubscriber.selector'


@Component({
    selector: 'fedex-sample-cool-gen',
  templateUrl: './sample-cool-gen.component.html',
  styleUrls: ['./sample-cool-gen.component.css']
})


export class SampleCoolGenComponent  {  
  public coolGenOrigin: String = "DEN";
  public coolGenDate: String = "20170411";
  public coolGenSeq: String = "107";
  
  public testUpdateRet: any = {};
  errorMessage: string = '';
  errorMessageCoolGen: string = '';
  isLoading: boolean = true;

  
  constructor(private router: Router, private webSvcCall: GenericWebService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      //     this.github.getDenis("").subscribe(repoDetails => {
      //         this.repoDetails = repoDetails;
      //       });

    });
  }

  callCoolGenPRE(origParm: string, dateParm: string, seqParm: string) {

    this.callCoolGen("pre", origParm, dateParm, seqParm);
  }
    callCoolGenPEND(origParm: string, dateParm: string, seqParm: string) {

    this.callCoolGen("pend", origParm, dateParm, seqParm);
  }
    callCoolGenDISP(origParm: string, dateParm: string, seqParm: string) {

    this.callCoolGen("disp", origParm, dateParm, seqParm);
  }
    callCoolGenVIEW(origParm: string, dateParm: string, seqParm: string) {

    this.callCoolGen("view", origParm, dateParm, seqParm);
  }

  callCoolGen(funcparm: string, origParm: string, dateParm: string, seqParm: string) {
    console.log("Function ="+funcparm + "   Orig=" + origParm + "   Date=" + dateParm + "  seq=" + seqParm);
    let url : string = "http://localhost:8082/" + funcparm + "/" + origParm + "/" + dateParm + "/" + seqParm;
    this.webSvcCall.callLocalSpringBoot(url).subscribe(p => {
      console.log("Succcess - Called Spring Boot to request CoolGen Screen<PRE>");
      this.errorMessageCoolGen = "Success";
    }, e => {
      console.log("Exception");
      //this.errorMessageCoolGen = "Exception Calling CoolGen fucntion="+funcparm+ "  " + e + "\nurl=" + url;
      this.errorMessageCoolGen = "\nurl=" + url;
    });
  }

}



