import { Component } from '@angular/core';

@Component({
  selector: 'app-area-converter',
  templateUrl: './area-converter.component.html',
  styleUrl: './area-converter.component.css'
})
export class AreaConverterComponent {
  unit: string[] = ['Acre', 'Cent', 'Sqft', 'Ground', 'Sq. Mtr', 'Sq. Yrd', 'Hectare'];

  units: number[][] = [
    [1, 100, 43560, 18.15, 4046.85, 4840, 0.40469],  // Acre
    [0.01, 1, 435.6, 0.1815, 40.46, 48.4, 0.00404],  // Cent
    [0.00002, 0.002, 1, 0.0004, 0.09, 0.1, 0.000009],  // Sqft
    [0.05, 5.51, 2400.35, 1, 223, 266.71, 0.02],  // Ground
    [0.0002, 0.02, 10.76, 0.004, 1, 1.2, 0.0001],  // Sq. Mtr
    [0.0002, 0.02, 9, 0.003, 0.8, 1, 0.00008],  // Sq. Yrd
    [2.47, 247.13, 107639, 44.84, 10000, 11959.89, 1]  // Hectare
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
      this.convertedValue = (this.inputValue * conversionFactor).toFixed(4); // Perform conversion
    } catch (error) {
      console.error(error);
      this.convertedValue = 'Invalid units'; // Error handling
    }
  }
}
