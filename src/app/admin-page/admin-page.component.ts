import { Component } from '@angular/core';
import { ProviderService } from '../services/providerService';
import { Provider } from '../models/Provider';
import { CreateProviderComponent } from './create-provider/create-provider.component';

@Component({
  moduleId: module.id,
  selector: 'app-admin-page',
  templateUrl: 'admin-page.component.html',
  styleUrls: ['admin-page.component.css'],
  directives: [ CreateProviderComponent ]
})

export class AdminPageComponent {

  private providers:Array<Provider>;
  
  private creationCardVisible: boolean = false;
 
  
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  fixedCols: number = 4;
  fixedRowHeight: number = 100;
  ratioGutter: number = 1;
  fitListHeight: string = '400px';
  ratio: string = '4:1';

  addTileCols() { this.tiles[2].cols++; }
  
  constructor(private providerService: ProviderService) {
    this.providerService.getProviders().subscribe(
      providers => {
        this.providers = providers;
      },
      err => {
        console.log('errrororooror');
      });
  }
  
  public showCreationCard() {
    this.creationCardVisible = true;
  }
  
  public hideCreationCard() {
    this.creationCardVisible = false;
  }
  

}
