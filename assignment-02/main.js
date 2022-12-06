function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

const vertices2 = [

    //angka 2
    -2.400000, 2.400000, 0,         0.235, 0.206, 0.218,
    -2.400000, 2.400000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 2.400000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 2.400000, 0,         0.235, 0.206, 0.218,
    -0.600000, 1.200000, 0,         0.235, 0.206, 0.218,
    -0.600000, 1.200000, -0.5,              0.235, 0.206, 0.218,
    -1.800000, 1.200000, -0.5,              0.235, 0.206, 0.218,
    -1.800000, 1.200000, 0,         0.235, 0.206, 0.218,
    -1.800000, 0.600000, 0,         0.235, 0.206, 0.218,
    -1.800000, 0.600000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 0.690000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 0.690000, 0,         0.235, 0.206, 0.218,
    -0.600000, 0.120000, 0,         0.235, 0.206, 0.218,
    -0.600000, 0.120000, -0.5,              0.235, 0.206, 0.218,
    -2.370000, 0.120000, -0.5,              0.235, 0.206, 0.218,
    -2.370000, 0.120000, 0,         0.235, 0.206, 0.218,
    -2.370000, 1.500000, 0,         0.235, 0.206, 0.218,
    -2.370000, 1.500000, -0.5,              0.235, 0.206, 0.218,
    -0.960000, 1.560000, -0.5,              0.235, 0.206, 0.218,
    -0.960000, 1.560000, 0,         0.235, 0.206, 0.218,
    -0.960000, 1.980000, 0,         0.235, 0.206, 0.218,
    -0.960000, 1.980000, -0.5,              0.235, 0.206, 0.218,
    -2.400000, 2.010000, -0.5,              0.235, 0.206, 0.218,
    -2.400000, 2.010000, 0,         0.235, 0.206, 0.218,


    // angka 2 (2)
    -2.400000, 2.400000, 0,         0.235, 0.206, 0.218,
    -0.600000, 2.400000, 0,         0.235, 0.206, 0.218,
    -0.600000, 2.400000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 1.200000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 1.200000, 0,         0.235, 0.206, 0.218,
    -1.800000, 1.200000, 0,         0.235, 0.206, 0.218,
    -1.800000, 1.200000, -0.5,              0.235, 0.206, 0.218,
    -1.800000, 0.600000, -0.5,              0.235, 0.206, 0.218,
    -1.800000, 0.600000, 0,         0.235, 0.206, 0.218,
    -0.600000, 0.690000, 0,         0.235, 0.206, 0.218,
    -0.600000, 0.690000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 0.120000, -0.5,              0.235, 0.206, 0.218,
    -0.600000, 0.120000, 0,         0.235, 0.206, 0.218,
    -2.370000, 0.120000, 0,         0.235, 0.206, 0.218,
    -2.370000, 0.120000, -0.5,              0.235, 0.206, 0.218,
    -2.370000, 1.500000, -0.5,              0.235, 0.206, 0.218,
    -2.370000, 1.500000, 0,         0.235, 0.206, 0.218,
    -0.960000, 1.560000, 0,         0.235, 0.206, 0.218,
    -0.960000, 1.560000, -0.5,              0.235, 0.206, 0.218,
    -0.960000, 1.980000, -0.5,              0.235, 0.206, 0.218,
    -0.960000, 1.980000, 0,         0.235, 0.206, 0.218,
    -2.400000, 2.010000, 0,         0.235, 0.206, 0.218,
    -2.400000, 2.010000, -0.5,              0.235, 0.206, 0.218,
    -2.400000, 2.400000, -0.5,              0.235, 0.206, 0.218,
    
];

const indices2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 46, 47
];

const vertices9 = [
    //angka 9
    0.600000, 2.400000, 0,          0.235, 0.206, 0.218,
    0.600000, 2.400000, -0.5,               0.235, 0.206, 0.218,
    2.250000, 2.400000, -0.5,               0.235, 0.206, 0.218,
    2.250000, 2.400000, 0,          0.235, 0.206, 0.218,
    2.220000, 0.108000, 0,          0.235, 0.206, 0.218,
    2.220000, 0.108000, -0.5,               0.235, 0.206, 0.218,
    0.720000, 0.117000, -0.5,               0.235, 0.206, 0.218,
    0.720000, 0.117000, 0,          0.235, 0.206, 0.218,
    0.720000, 0.420000, 0,          0.235, 0.206, 0.218,
    0.720000, 0.420000, -0.5,               0.235, 0.206, 0.218,
    1.830000, 0.450000, -0.5,               0.235, 0.206, 0.218,
    1.830000, 0.450000, 0,          0.235, 0.206, 0.218,
    1.830000, 2.010000, 0,          0.235, 0.206, 0.218,
    1.830000, 2.010000, -0.5,               0.235, 0.206, 0.218,
    0.960000, 2.010000, -0.5,               0.235, 0.206, 0.218,
    0.960000, 2.010000, 0,          0.235, 0.206, 0.218,
    0.990000, 1.770000, 0,          0.235, 0.206, 0.218,
    0.990000, 1.770000, -0.5,               0.235, 0.206, 0.218,
    1.560000, 1.770000, -0.5,               0.235, 0.206, 0.218,
    1.560000, 1.770000, 0,          0.235, 0.206, 0.218,
    1.560000, 1.500000, 0,          0.235, 0.206, 0.218,
    1.560000, 1.500000, -0.5,               0.235, 0.206, 0.218,
    0.600000, 1.500000, -0.5,               0.235, 0.206, 0.218,
    0.600000, 1.500000, 0,          0.235, 0.206, 0.218,

    //angka 9 (2)
    0.600000, 2.400000, 0,          0.235, 0.206, 0.218,
    2.250000, 2.400000, 0,          0.235, 0.206, 0.218,
    2.250000, 2.400000, -0.5,               0.235, 0.206, 0.218,
    2.220000, 0.108000, -0.5,               0.235, 0.206, 0.218,
    2.220000, 0.108000, 0,          0.235, 0.206, 0.218,
    0.720000, 0.117000, 0,          0.235, 0.206, 0.218,
    0.720000, 0.117000, -0.5,               0.235, 0.206, 0.218,
    0.720000, 0.420000, -0.5,               0.235, 0.206, 0.218,
    0.720000, 0.420000, 0,          0.235, 0.206, 0.218,
    1.830000, 0.450000, 0,          0.235, 0.206, 0.218,
    1.830000, 0.450000, -0.5,               0.235, 0.206, 0.218,
    1.830000, 2.010000, -0.5,               0.235, 0.206, 0.218,
    1.830000, 2.010000, 0,          0.235, 0.206, 0.218,
    0.960000, 2.010000, 0,          0.235, 0.206, 0.218,
    0.960000, 2.010000, -0.5,               0.235, 0.206, 0.218,
    0.990000, 1.770000, -0.5,               0.235, 0.206, 0.218,
    0.990000, 1.770000, 0,          0.235, 0.206, 0.218,
    1.560000, 1.770000, 0,          0.235, 0.206, 0.218,
    1.560000, 1.770000, -0.5,               0.235, 0.206, 0.218,
    1.560000, 1.500000, -0.5,               0.235, 0.206, 0.218,
    1.560000, 1.500000, 0,          0.235, 0.206, 0.218,
    0.600000, 1.500000, 0,          0.235, 0.206, 0.218,
    0.600000, 1.500000, -0.5,               0.235, 0.206, 0.218,
    0.600000, 2.400000, -0.5,               0.235, 0.206, 0.218,
];

const indices9 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, 46, 47
];

const verticesS = [

  //front
  -1.200000, -0.600000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.050000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.600000, 0,                0.235, 0.206, 0.218,

  -2.400000, -1.200000, 0,                0.235, 0.206, 0.218,
  -1.200000, -0.600000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.600000, 0,                0.235, 0.206, 0.218,

  -2.400000, -0.900000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.350000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.650000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.200000, 0,                0.235, 0.206, 0.218,

  -1.200000, -1.500000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.950000, 0,                0.235, 0.206, 0.218,

  -1.200000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.500000, 0,                0.235, 0.206, 0.218,

  //back
  -1.200000, -0.600000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.050000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -0.600000, -0.5,             0.4, 0.206, 0.4,

  -2.400000, -1.200000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -0.600000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -0.600000, -0.5,             0.4, 0.206, 0.4,

  -2.400000, -0.900000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.350000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.650000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.200000, -0.5,             0.4, 0.206, 0.4,

  -1.200000, -1.500000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.950000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.950000, -0.5,             0.4, 0.206, 0.4,

  -1.200000, -1.950000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.950000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.500000, -0.5,             0.4, 0.206, 0.4,

  //top
  -1.200000, -0.600000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.600000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.600000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -0.600000, -0.5,             0.4, 0.206, 0.4,

  //left top
  -2.400000, -0.600000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.200000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.200000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -0.600000, -0.5,             0.4, 0.206, 0.4,

  //middle bottom
  -2.400000, -1.200000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.650000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.650000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.200000, -0.5,             0.4, 0.206, 0.4,

  //bottom top right
  -1.200000, -1.500000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.950000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.500000, -0.5,             0.4, 0.206, 0.4,

  //bottom top left
  -1.200000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.500000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.500000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.950000, -0.5,             0.4, 0.206, 0.4,

  //left bottom
  -2.400000, -1.950000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.500000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.500000, -0.5,             0.4, 0.206, 0.4,
  -2.400000, -1.950000, -0.5,             0.4, 0.206, 0.4,

  //right top
  -1.200000, -0.600000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.050000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.050000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -0.600000, -0.5,             0.4, 0.206, 0.4,
  
  //top bottom left
  -1.200000, -0.600000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.200000, 0,                0.235, 0.206, 0.218,
  -2.400000, -1.200000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -0.600000, -0.5,             0.4, 0.206, 0.4,

  //middle top
  -1.200000, -1.350000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.900000, 0,                0.235, 0.206, 0.218,
  -2.400000, -0.900000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.350000, -0.5,             0.4, 0.206, 0.4,

  //bottom right
  -1.200000, -1.350000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.950000, 0,                0.235, 0.206, 0.218,
  -1.200000, -1.950000, -0.5,             0.4, 0.206, 0.4,
  -1.200000, -1.350000, -0.5,             0.4, 0.206, 0.4
];

const indicesS = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,         6, 8, 9,
    10, 11, 12,
    13, 14, 15,

    16, 17, 18,
    19, 20, 21,
    22, 23, 24,      22, 24, 25,
    26, 27, 28,
    29, 30, 31,

    32, 33, 34,      32, 34, 35,
    36, 37, 38,      36, 38, 39,
    40, 41, 42,      40, 42, 43,
    44, 45, 46,      44, 46, 47,
    48, 49, 50,      48, 50, 51,
    52, 53, 54,      52, 54, 55,
    56, 57, 58,      56, 58, 59,
    60, 61, 62,      60, 62, 63,
    64, 65, 66,      64, 66, 67,
    68, 69, 70,      68, 70, 71,
];

const verticesA = [
    //top
    1.410000, -0.600000, 0,         0.235, 0.206, 0.218,
    1.410000, -1.350000, 0,         0.235, 0.206, 0.218,
    0.630000, -2.160000, 0,         0.235, 0.206, 0.218,

    1.410000, -0.600000, 0,         0.235, 0.206, 0.218,
    2.100000, -2.160000, 0,         0.235, 0.206, 0.218,
    1.410000, -1.350000, 0,         0.235, 0.206, 0.218,

    //bottom
    1.410000, -0.600000, -0.5,              0.4, 0.206, 0.4,
    1.410000, -1.350000, -0.5,              0.4, 0.206, 0.4,
    0.630000, -2.160000, -0.5,              0.4, 0.206, 0.4,

    1.410000, -0.600000, -0.5,              0.4, 0.206, 0.4,
    2.100000, -2.160000, -0.5,              0.4, 0.206, 0.4,
    1.410000, -1.350000, -0.5,              0.4, 0.206, 0.4,

    //left
    1.410000, -0.600000, 0,         0.235, 0.206, 0.218,
    0.630000, -2.160000, 0,         0.235, 0.206, 0.218,
    0.630000, -2.160000, -0.5,              0.4, 0.206, 0.4,
    1.410000, -0.600000, -0.5,              0.4, 0.206, 0.4,

    //bottom left
    0.630000, -2.160000, 0,         0.235, 0.206, 0.218,
    0.630000, -2.160000, -0.5,              0.4, 0.206, 0.4,
    1.410000, -1.350000, -0.5,              0.4, 0.206, 0.4,
    1.410000, -1.350000, 0,         0.235, 0.206, 0.218,

    //bottom right
    2.100000, -2.160000, 0,         0.235, 0.206, 0.218,
    1.410000, -1.350000, 0,         0.235, 0.206, 0.218,
    1.410000, -1.350000, -0.5,              0.4, 0.206, 0.4,
    2.100000, -2.160000, -0.5,              0.4, 0.206, 0.4,

    //right
    2.100000, -2.160000, 0,         0.235, 0.206, 0.218,
    1.410000, -0.600000, 0,         0.235, 0.206, 0.218,
    1.410000, -0.600000, -0.5,              0.4, 0.206, 0.4,
    2.100000, -2.160000, -0.5,              0.4, 0.206, 0.4,
    
];

const indicesA = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
    9, 10, 11,
    12, 13, 14,     12, 14, 15,
    16, 17, 18,     16, 18, 19,
    20, 21, 22,     20, 22, 23,
    24, 25, 26,     24, 26, 27,

];

const cube = [
  1, 1, 1,     1, 0, 0,     // Index:  0    kanan atas depan
  1, -1, 1,     1, 0, 0,       // Index:  1
  -1, -1, 1,     1, 0, 0,    // Index:  2
  -1,  1, 1,     1, 0, 0,     // Index:  3

  1, 1,  -1,     1, 1, 0,       // Index:  4 kanan atas belakang
  1, -1,  -1,     1, 1, 0,      // Index:  5
  -1, -1, -1,     1, 1, 0,    // Index:  6
  -1,  1,  -1,     1, 1, 0,     // Index:  7

  // -1, -1, -1,     0, 1, 0,      // Index:  8
  // -1,  1, -1,     0, 1, 0,      // Index:  9
  // -1,  1,  -1,     0, 1, 0,      // Index: 10
  // -1, -1,  -1,     0, 1, 0,       // Index: 11

  // 1, -1, -1,     0, 0, 1,       // Index: 12
  // 1,  1, -1,     0, 0, 1,       // Index: 13
  // 1,  1,  -1,     0, 0, 1,       // Index: 14
  // 1, -1,  -1,     0, 0, 1,      // Index: 15

  // // -1, -1, -1,     1, 0.5, 0,  0, -1, 0,   // Index: 16
  // // -1, -1,  -1,     1, 0.5, 0,  0, -1, 0,   // Index: 17
  // // 1, -1,  -1,     1, 0.5, 0,  0, -1, 0,   // Index: 18
  // // 1, -1, -1,     1, 0.5, 0,  0, -1, 0,   // Index: 19

  // // -1,  1, -1,     1, 1, 1,    0, 1, 0,    // Index: 20
  // // -1,  1, -1,     1, 1, 1,    0, 1, 0,    // Index: 21
  // // 1,  1,  -1,     1, 1, 1,    0, 1, 0,    // Index: 22
  // // 1,  1, -1,     1, 1, 1,    0, 1, 0     // Index: 23
];

const indicesCube = [
  0, 1, 2,     0, 2, 3,     
  4, 5, 6,     4, 6, 7, 
  
  0,3,4,       3,4,7, 
  1,2,5,       2,5,6,
  
  3,6,7,       
  
];

const objects = [
    {
      vertices: vertices2,
      indices: indices2,
      length: indices2.length,
      type: gl.LINE_LOOP,
    },
    {
      vertices: vertices9,
      indices : indices9,
      length: indices9.length,
      type: gl.LINE_LOOP
    },
    {
      vertices: verticesS,
      indices: indicesS,
      length: indicesS.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: verticesA,
      indices: indicesA,
      length: indicesA.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: cube,
      indices: indicesCube,
      length: indicesCube.length,
      type: gl.TRIANGLES
    }
  ]

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

// uniform mat4 matrix;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    vColor = color;
    // gl_Position = matrix * vec4(position, 1);
    gl_Position = mProj * mView * mWorld * vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// varoaible lokal
var rotateX = 0;
var rotateY = 0;
var canvasWidth = 12
var horizontalSpeed = 0.129;
var horizontalDelta = 0.0;
var verticalDelta = 0.0;
var scaleDelta = 0.0;
var scaleSpeed = 0.05;

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var view = glMatrix.mat4.create();

glMatrix.mat4.lookAt(
  view,
  [cameraX, 0.0, cameraZ],
  [cameraX, 0.0, 0],
  [0.0, 1.0, 0.0]
);

var perspective = glMatrix.mat4.create();
glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1, 0.5, 50.0);

const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
  const buffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const aPosition = gl.getAttribLocation(program, 'position');
  const aColor = gl.getAttribLocation(program, 'color');

  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
    6 * Float32Array.BYTES_PER_ELEMENT, 
    0 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aPosition);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
}

gl.linkProgram(program);
gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const animate2 = () =>{
    var model = glMatrix.mat4.create();

    if (horizontalDelta >= (canvasWidth/2) || horizontalDelta <= (-canvasWidth/2+1)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    horizontalDelta += horizontalSpeed;

    glMatrix.mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }
  
  const animate9 = () =>{
    var model = glMatrix.mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
      scaleSpeed = scaleSpeed * -1;
    }

    scaleDelta += scaleSpeed;

    glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }

  const animateS = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const animateA = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }

  const animatecube = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[4].vertices, objects[4].indices, 0, objects[4].length, objects[4].type);
  }
  
  function onKeydown(event) {
    if (event.keyCode == 65 || event.keyCode == 37) { // a / arrow kiri
      rotateY -= 0.2;
    } else if (event.keyCode == 68 || event.keyCode == 39) { // d / arrow kanan
      rotateY += 0.2;
    }

    if (event.keyCode == 87 || event.keyCode == 38) { // w / arrow atas
      rotateX -= 0.2;
    } else if (event.keyCode == 83 || event.keyCode == 40) { // s / arrow bawah
      rotateX += 0.2;
    }
  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(0.992, 0.992, 0.588, 0.85);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animate2();
    animate9();
    animateS();
    animateA();
    animatecube();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
