import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OurProfessionalsService } from '../services/our-professionals.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-our-professional-detail',
  templateUrl: './our-professional-detail.component.html',
  styleUrls: ['./our-professional-detail.component.css']
})
export class OurProfessionalDetailComponent implements OnInit {
  agents: any[] = [];
  memberProperties: any = null;
  agent: any = "";
  memberKeyNumeric: string = '';
  officeKeyNumeric: string = '';
  public isDescriptionMore: boolean = false;
  page: number = 1;
  itemsPerPage = 6;
  totalItems : any; 
  meetingType: string = 'InPerson'
  contactForm: FormGroup = new FormGroup({
    meetingType: new FormControl(this.meetingType),
    fullName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    scheduleTime: new FormControl(''),
    comment: new FormControl(''),
    isAgreeTermCondition: new FormControl(false),
  });
  reviewSubmitForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    rating: new FormControl(0),
    email: new FormControl(''),
    review: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private _agentService: OurProfessionalsService, private fb: FormBuilder) {    
    this.route.params.subscribe(params => {
      this.memberKeyNumeric = params['id'].split('-')[0];
      this.officeKeyNumeric = params['id'].split('-')[1];
    });
   }

  ngOnInit(): void {
    this.resetContactform();
    this.resetReviewform();
    this.agentDetail();
    this.agentProperties();
  }

  agentDetail() {

    this._agentService.getAgentDetailByKey(this.memberKeyNumeric).subscribe(data => {
      this.agent = data;
    });
  }
  agentProperties() {

    this._agentService.GetMemberPropertyList(this.memberKeyNumeric,this.officeKeyNumeric).subscribe(data => {
      this.memberProperties = data;
    });
  }
  gty(page: any){
    this._agentService.GetMemberPropertyList(this.memberKeyNumeric,this.officeKeyNumeric).subscribe((data: any) => {
      this.memberProperties = data;
      this.totalItems = data.properties.lenght;
    })
  }
  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }
  resetContactform() {
    this.contactForm = this.fb.group({
      meetingType: [this.meetingType, Validators.required],
      fullName: ['', Validators.required],
      phone: ['',[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/), Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      scheduleTime: ['', Validators.required],
      comment: [''],
      isAgreeTermCondition: [false, Validators.requiredTrue],
      MemberKeyNumeric: [this.memberKeyNumeric],
      OfficeKeyNumeric: [this.officeKeyNumeric]
    });
  }
  resetReviewform() {
    this.reviewSubmitForm = this.fb.group({
      fullName: ['', Validators.required],
      rating: [0,[Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      review: [''],
      MemberKeyNumeric: [this.memberKeyNumeric],
      OfficeKeyNumeric: [this.officeKeyNumeric]
    });
  }
  submitContactForm() {
    this.contactForm.patchValue({"meetingType": this.meetingType});
    if (this.contactForm.invalid) {
      return;
    }
    this._agentService.SaveClientContactInfo(this.contactForm.value).subscribe((data: any) => {
      this.resetContactform();
    })
  }
  submitReviewForm() {
    if (this.reviewSubmitForm.invalid) {
      return;
    }
    this._agentService.SubmitMemberReview(this.reviewSubmitForm.value).subscribe((data: any) => {
      this.resetReviewform();
    })
  }
}
