import { Injectable } from '@angular/core';
import { LdbService } from './ldb.service';
import { ContainerInfo } from './models/container-info';
import { Root } from './models/root';

@Injectable({
  providedIn: 'root'
})
export class DataConversionService {

  constructor(private ldbService:LdbService) { }

  root?:Root;
getContainerInfo(containerNos:string[]):ContainerInfo[]{
 var  containerInfo:ContainerInfo[]=[];
  this.ldbService.getMultipleContainer(containerNos).
  subscribe((data: Root) => this.root = data);
  if(this.root){
for (let index = 0; index < this.root.object.containerFormList.length; index++) {
  const element = this.root.object.containerFormList[index];
  var container:ContainerInfo={
    containerNo:element.containerNumber,
    currentLocation:element.trackingInfoList[0].currentLocation,
    cycle:element.cycleName,
    dataTyp:element.trackingInfoList[0].datatyp,
    event:element.trackingInfoList[0].eventName,
    size:element.cntrSize,
    timeStamp:element.trackingInfoList[0].timestampTimezone,
    transportMode:element.trackingInfoList[0].transportmode,
    type:element.trackingInfoList[0].type,
    etd:element.trackingInfoList.find(a=>a.eventName=="EXPECTED VESSEL ARRIVAL")?.timestampTimezone,
    status:""

  };
  containerInfo.push(container);

}
}
return containerInfo;
}


}