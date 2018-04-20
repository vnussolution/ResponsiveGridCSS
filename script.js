function computeArea(width, height) {
    // your code here
    return width * height;
}

function testComputeArea() {
    let width = 3;
    let height = 4;
    let expected = 12;
    if (computeArea(width, height) === expected) {
        console.log('SUCCESS: `computeArea` is working');
    } else {
        console.log('FAILURE: `computeArea` is not working');
    }
}

testComputeArea();

function celsToFahr(celsTemp) {
    // your code here
}

function fahrToCels(fahrTemp) {
    // your code here
}

function testConversion(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` is working');
        return true;
    } else {
        console.log('FAILURE: `' + fn.name + '` is not working');
        return false;
    }
}

function testConverters() {
    let cel2FahrInput = 100;
    let cel2FahrExpect = 212;
    let fahr2CelInput = 32;
    let fahr2CelExpect = 0;

    if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) && testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
        console.log('SUCCESS: All tests passing');
    } else {
        console.log('FAILURE: Some tests are failing');
    }
}

testConverters();
