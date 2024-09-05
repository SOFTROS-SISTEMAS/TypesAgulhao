
export interface GxGoogleChartSeries {
    Name: string;
    Values: number[];
}
        
export interface GxGoogleChart {
    Categories: string[];
    Series: GxGoogleChartSeries[];
}
        