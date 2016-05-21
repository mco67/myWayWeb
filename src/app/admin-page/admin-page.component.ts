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
  

}
