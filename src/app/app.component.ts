import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'super-swol-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  selectedKeg = null;
  kegs: Keg[] =
  [
    new Keg("Swamp Swill", "Southern Swamps", 2.99, 14),
    new Keg("Almost Water", "Clearwater Brewers", 14.99, 0.10)
  ];

  editKeg(keg)
  {
    this.selectedKeg = keg;
  }
  doneEdittingKeg()
  {
    this.selectedKeg = null;
  }
  runningLow(keg)
  {
    if(keg.pints <= 10)
    {
      return "highBall";
    }
  }
  priceColor(keg)
  {
    if(keg.price <= 5)
    {
      return "lowBall";
    }
    else if(keg.price >= 5.01 && keg.price <= 14.99)
    {
      return "medBall";
    }
    else
    {
      return "highBall";
    }
  }
  contentColor(keg)
  {
    if(keg.alcoholContent <= 4)
    {
      return "weakSauce";
    }
    else if(keg.alcoholContent >= 4.01 && keg.alcoholContent <= 10)
    {
      return "booze";
    }
    else
    {
      return "PUREFIRE";
    }
  }
}
