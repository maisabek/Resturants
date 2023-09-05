import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { FoodsComponent } from './components/foods/foods.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResturantDetailsComponent } from './components/resturant-details/resturant-details.component';
import { ResturantsComponent } from './components/resturants/resturants.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { PopoverModule } from 'ngx-popover';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgwWowModule } from 'ngx-wow';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent,
    ApplicationErrorComponent,
    CartComponent,
    MenuComponent,
    FoodsComponent,
    DrinksComponent,
    ChefsComponent,
    ResturantsComponent,
    FeedbacksComponent,
    LoadingScreenComponent,
    ResturantDetailsComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgwWowModule,
    NgxTypedJsModule,
    CarouselModule,
    // PopoverModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
