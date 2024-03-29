export class WeatherData {
    public cityName?: string;
    public temperature?: number;
    public description?: string;
    public humidity?: number;
    public wind?: number;
    public icon?: string;
  public visibility?: any;
    constructor(
        cityName: string, 
        temperature: number, 
        description: string, 
        humidity: number, 
        wind: number,
        icon: string,
        visibility:any,
    ) {
        this.cityName = cityName; 
        this.temperature = temperature; 
        this.description = description; 
        this.humidity = humidity; 
        this.wind = wind;
        this.icon = icon;
        this.visibility = visibility;
    }
}