/**
  * The main function which calls the application. 
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  // pokud je vstupní číslo prázdné, vrátíme 0
  if (inputNumber === "") {
    return "0";
  }
  // pokud neni vstupní číselný system 2 nebo výstupní číselný system 10, vrátíme chybu
  if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
    return "Error: only 2 to 10";
  }
// inicializace proměných
  let cislo2 = inputNumber;
  let cislo10 = 0;
  let pozice = 0;

// převod binárního čísla na desítkové
  while (cislo2.length > 0) {
    const bit = cislo2[cislo2.length - 1];

    if (bit === '1') {
      cislo10 += Math.pow(2, pozice);
    } else if (bit !== '0') {
      return "Error: only 0 and 1!";
    }
// odebrani posledního bitu a zvětšení pozice
    cislo2 = cislo2.slice(0, -1);
    pozice++;
  }
// převod desítkového čísla do resultu
  if (cislo10 === 0) return "0";
  
  let result = "";
  let temp = cislo10;
  while (temp > 0) {
    result = (temp % 10) + result;
    temp = Math.floor(temp / 10);
  }

  return result;
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [2];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10];
}