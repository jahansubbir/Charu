import { Component, OnInit } from '@angular/core';
import { LdbService } from '../ldb.service';
import { Root } from '../models/root';
import { MatTable } from '@angular/material/table';
import { ContainerInfo } from '../models/container-info';

@Component({
  selector: 'app-rail',
  templateUrl: './rail.component.html',
  styleUrls: ['./rail.component.scss']
})
export class RailComponent implements OnInit {

  constructor(private ldbService: LdbService) { }
  displayedColumns: string[] = ['containerNumber', 'timeStamp', 'currentLocation', 'eventName', 'transportMode', 'cycleName',];
  root?: Root;
  containerInfos: ContainerInfo[] = [];
  containerNo: string = "";
  searchString?: string;
  filterInput:string="";
  tableHeaderClass="bg-info"

  ngOnInit(): void {
  //  this.getRailLag("MRKU0439532,MSKU3148738");
  }
  getRailLag(containerNo: string) {
    if (containerNo.length > 0) {
      var containerArray = containerNo.split(',');

      this.ldbService.getMultipleContainer(containerArray).
        subscribe((data: Root) => this.root = data);
      this.root?.object.containerFormList.forEach(container => {

      });

    }
  }

  filter(str:string){
    if(str.length>0){
      
    }else{

    }
  }
}
