import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public mySubject = new Subject<any>();

  constructor() {}

  updateData(data: any) {
    this.mySubject.next(data);
  }
}
