/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var rawNum = input.slice(0,input.match(/[a-z]/i).index) || '';
    rawNum = rawNum.split('/');
    if (rawNum[0] === '') { rawNum = [] }
    switch(rawNum.length) {
      case 0:
        result = 1;
        break;
      case 1:
        result = rawNum[0];
        break;
      case 2:
        result = +rawNum[0] / +rawNum[1];
        break;
      default:
        result = 'invalid number';
    }
  	return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var acceptableUnits = ['gal','l','mi','km','lbs','kg'];
    var rawUnit = input.slice(input.match(/[a-z]/i).index);
    if (acceptableUnits.indexOf(rawUnit.toLowerCase()) !== -1) {
      result = rawUnit;
    } else {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;      
      case 'km':
        result = 'mi';
        break;      
      case 'gal':
        result = 'l';
        break;      
      case 'l':
        result = 'gal';
        break;      
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()) {
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;      
      case 'km':
        result = 'kilometers';
        break;      
      case 'gal':
        result = 'gallons';
        break;      
      case 'l':
        result = 'liters';
        break;      
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()) {
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;      
      case 'km':
        result = initNum / miToKm;
        break;      
      case 'gal':
        result = initNum * galToL;
        break;      
      case 'l':
        result = initNum / galToL;
        break;      
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum+' ' + this.spellOutUnit(initUnit) + ' converts to ' + (+returnNum.toFixed(5)) + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
