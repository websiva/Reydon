import { Component } from '@angular/core';

@Component({
  selector: 'app-area-converter',
  templateUrl: './area-converter.component.html',
  styleUrl: './area-converter.component.css'
})
export class AreaConverterComponent {
  unit: string[] = ['Acre', 'Cent', 'Sqft', 'Ground', 'Sq. Mtr', 'Sq. Yrd', 'Hectare'];

  units: number[][] = [
    [1, 100, 43560, 18.15, 4046.86, 4840, 0.40468],  // Acre
    [0.01, 1, 435.6, 0.1815, 40.4686, 48.4, 0.004047],  // Cent
    [0.00002296, 0.002296, 1, 0.0004167, 0.092903, 0.11112, 0.000009291],  // Sqft
    [0.0551, 5.51, 2400, 1, 222.967, 266.67, 0.022296],  // Ground
    [0.00024711, 0.02472, 10.76392, 0.004485, 1, 1.196, 0.0001],  // Sq. Mtr
    [0.00020661, 0.020662, 9, 0.00375, 0.8361, 1, 0.00008361],  // Sq. Yrd
    [2.4711, 247.105, 107639, 44.8496, 10000, 11959.9005, 1]  // Hectare
  ];

  selectedFromUnit: string = 'Acre'; // Default from unit
  selectedToUnit: string = 'Acre'; // Default to unit
  inputValue: number = 1; // Input value for conversion
  convertedValue: number | string = '1'; // Store converted value

  // Method to convert the value from one unit to another
  convertValue() {
    try {
      const fromIndex = this.unit.indexOf(this.selectedFromUnit); // Get index of from unit
      const toIndex = this.unit.indexOf(this.selectedToUnit); // Get index of to unit

      // Check if indexes are valid
      if (fromIndex === -1 || toIndex === -1) {
        throw new Error('Invalid units selected.');
      }

      // Use the correct indexing for conversion
      const conversionFactor = this.units[fromIndex][toIndex]; // Conversion factor based on selected units
       let result = this.inputValue * conversionFactor; // Perform conversion
       this.convertedValue = this.formatNumber(result);

    } catch (error) {
      console.error(error);
      this.convertedValue = 'Invalid units'; // Error handling
    }
  }

  formatNumber(value:number):string{
    return parseFloat(value.toFixed(8)).toString();
  }
}
