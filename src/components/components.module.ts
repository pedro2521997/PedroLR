import { NgModule } from '@angular/core';
import { InfoPersonasComponent } from './info-personas/info-personas';
import { ListasComponent } from './listas/listas';
@NgModule({
	declarations: [InfoPersonasComponent,
    ListasComponent],
	imports: [],
	exports: [InfoPersonasComponent,
    ListasComponent]
})
export class ComponentsModule {}
