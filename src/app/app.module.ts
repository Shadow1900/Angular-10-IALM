import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarMascotasComponent } from './listar-mascotas/listar-mascotas.component';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { AdoptarComponent } from './adoptar/adoptar.component';
import { VetenrinariaComponent } from './vetenrinaria/vetenrinaria.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListarMascotasComponent,
    AgregarMascotaComponent,
    AdoptarComponent,
    VetenrinariaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
