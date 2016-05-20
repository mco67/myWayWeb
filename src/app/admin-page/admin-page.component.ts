import { Component } from '@angular/core';
import { ProviderService } from '../services/providerService';
import { Provider } from '../models/Provider';

@Component({
  moduleId: module.id,
  selector: 'app-admin-page',
  templateUrl: 'admin-page.component.html',
  styleUrls: ['admin-page.component.css']
})

export class AdminPageComponent {

  constructor(private providerService: ProviderService) {
    this.providerService.getProviders().subscribe(
      providers => {
        console.log(providers);
      },
      err => {
        console.log('errrororooror');
      });
  }

}
