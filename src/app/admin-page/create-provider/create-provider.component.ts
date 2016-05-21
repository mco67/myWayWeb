import { Component } from '@angular/core';
import { FormBuilder, Control, ControlGroup, Validators, Validator } from '@angular/common';
import { Provider } from '../../models/provider';
import { ProviderService } from '../../services/providerService';

@Component({
	moduleId: module.id,
	selector: 'app-create-provider',
	templateUrl: 'create-provider.component.html',
	styleUrls: ['create-provider.component.css']
})

export class CreateProviderComponent {

	private providerForm: ControlGroup;
	private providerName: Control;
	private providerDesc: Control;
	private providerNameErrorMessage: string;
	private providerDescErrorMessage: string;

	constructor(private fb: FormBuilder, private providerService:ProviderService) {
		 
		// Create the providerName form control
		this.providerName = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
		this.providerName.valueChanges.subscribe((newValue) => { this.providerNameErrorMessage = ''; });

		// Create the password form control
		this.providerDesc = fb.control('', Validators.compose([Validators.required]));
		this.providerDesc.valueChanges.subscribe((newValue) => { this.providerDescErrorMessage = ''; });

		// Create the group
		this.providerForm = fb.group({ providerName: this.providerName, providerDesc: this.providerDesc });
	}
	
	public createProvider() {
		let provider = Provider.create(this.providerName.value, this.providerDesc.value);
		this.providerService.createProvider(provider);
	}

}
