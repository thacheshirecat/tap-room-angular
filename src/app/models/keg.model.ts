export class Keg
{
  public isTapped: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {}

  tapKeg()
  {
    this.isTapped = true;
  }
  sellPint()
  {
    if(this.pints > 0)
    {
      this.pints--;
    }
    else
    {
      alert("No pints left!");
    }
  }
  sellPitcher()
  {
    if(this.pints > 3)
    {
      this.pints = this.pints - 4;
    }
    else
    {
      alert("Not enough pints left for a pitcher!");
    }
  }
}
