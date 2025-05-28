import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { App_Service_Config } from '../../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RoomsService {

  roomList: RoomList[] = [];

  constructor(@Inject(App_Service_Config) private Config: AppConfig, private http: HttpClient) {
    console.log(this.Config.apiEndpoint);
    
  }



  getRooms(){
    return this.http.get<RoomList[]>(this.Config.apiEndpoint);
  }
}
