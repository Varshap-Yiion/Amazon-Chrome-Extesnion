import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class LayoutService {

  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  notificationMsg: any;
  notification: BehaviorSubject<any> = new BehaviorSubject(this.notificationMsg);
  service_provide_type_selection: BehaviorSubject<number> = new BehaviorSubject(0);
  company_logo: BehaviorSubject<string> = new BehaviorSubject(null);
  logoutSub: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  hideLoading() {
    this.loading.next(false);
  }

  showLoading() {
    this.loading.next(true);
  }
  
  updateNotification(notification) {
    this.notification.next(notification);
  }

  updateServiceType(servicetype: number) {
    this.service_provide_type_selection.next(servicetype);
  }
}
