function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // Letter S 

                           // Yellow      // Surface orientation
        -0.5,  -1.4, 1,     1, 1, 0,    0, 0, -1,   // Index:  0    
        -0.5,  -1,   1,     1, 1, 0,    0, 0, -1,   // Index:  1
        -1.5, -1,   1,     1, 1, 0,    0, 0, -1,   // Index:  2
        -1.5, -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  3
                          // Yellow
        -0.5,  -1.5, 0.5,     1, 1, 0,    0, 0, 1,    // Index:  4
        -0.5,  -1,   0.5,     1, 1, 0,    0, 0, 1,    // Index:  5
        -1.5, -1,   0.5,     1, 1, 0,    0, 0, 1,    // Index:  6
        -1.5, -1.5, 0.5,     1, 1, 0,    0, 0, 1,    // Index:  7
                         // Green
        -0.5, -1,    0.5,     0, 1, 0,    -1, 0, 0,   // Index:  8
        -0.5, -1.5,  0.5,     0, 1, 0,    -1, 0, 0,   // Index:  9
        -0.5, -1.5,  1,       0, 1, 0,    -1, 0, 0,   // Index: 10
        -0.5, -1,    1,       0, 1, 0,    -1, 0, 0,   // Index: 11
                       // Blue
         -1.5, -1.5,  1,      0, 0, 1,    1, 0, 0,    // Index: 12
         -1.5, -1,    1,      0, 0, 1,    1, 0, 0,    // Index: 13
         -1.5, -1,   0.5,     0, 0, 1,    1, 0, 0,    // Index: 14
         -1.5, -1.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 15
                       // Orange
        -1.5, -1, 0.5,     1, 0.5, 0,   0, -1, 0,   // Index: 16
        -1.5, -1,   1,     1, 0.5, 0,   0, -1, 0,   // Index: 17
        -0.5, -1,   1,     1, 0.5, 0,   0, -1, 0,   // Index: 18
        -0.5, -1, 0.5,     1, 0.5, 0,   0, -1, 0,   // Index: 19
                     // White
        -0.5,  -1.5, 0.5,     1, 1, 0,    0, 1, 0,    // Index: 20
        -0.5,  -1.5,   1,     1, 1, 0,    0, 1, 0,    // Index: 21
        -1.5, -1.5,   1,     1, 1, 0,    0, 1, 0,    // Index: 22
        -1.5, -1.5, 0.5,     1, 1, 0,    0, 1, 0,     // Index: 23
                    //Yellow
        0,   -0.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  24    
        0,   -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  25
        -0.5, -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  26
        -0.5, -0.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  27
                     // Yellow
        0,   -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  28
        0,   -1.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  29
        -0.5, -1.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 30
        -0.5, -0.5 , 0.5,     1, 1, 0,    0, 0, 1,    // Index:  31
                    // Green
        0,   0,   0.5,     0, 1, 0,    -1, 0, 0,   // Index:  32
        0,  -1.5, 0.5,     0, 1, 0,    -1, 0, 0,   // Index:  33
        0,  -1.5,  1,      0, 1, 0,    -1, 0, 0,   // Index: 34
        0,   0,    1,      0, 1, 0,    -1, 0, 0,   // Index: 35
                    // Blue
        -0.5, -0.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 36
        -0.5, -0.5,   1,     0, 0, 1,    1, 0, 0,    // Index: 37
        -0.5, -1.5,   1,     0, 0, 1,    1, 0, 0,    // Index: 38
        -0.5, -1.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 39
             // Yellow
        0,     0,    1,    1, 1, 0,    0, -1, 0,   // Index: 40
        0,    -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 41
        -1.5, -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 42
        -1.5,  0,    1,    1, 1, 0,    0, -1, 0,   // Index: 43
              // White
        0,   -1.5, 0.5,     1, 1, 1,    0, 1, 0,    // Index: 44
        0,    -1.5,  1,     1, 1, 1,    0, 1, 0,    // Index: 45
        -1.5, -1.5,  1,     1, 1, 1,    0, 1, 0,    // Index: 46
        -1.5, -1.5, 0.5,     1, 1, 1,    0, 1, 0,     // Index: 47
              // Yellow
        0,       0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  48
        0,    -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  49
        -1.5, -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 50
        -1.5,    0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  51
              // Blue
        -1.5,  -0.5,   0.5,  0, 0, 1,    -1, 0, 0,   // Index:  52
        -1.5,  1, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  53
        -1.5,  1,   1,  0, 0, 1,    -1, 0, 0,   // Index: 54
        -1.5,  -0.5,     1,  0, 0, 1,    -1, 0, 0,   // Index: 55
             // White
        -0.5, -0.5, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 56
        -0.5, -0.5,   1,     1, 1, 1,     1, 0, 0,    // Index: 57
        -1.5, -0.5,   1,     1, 1, 1,     1, 0, 0,    // Index: 58
        -1.5, -0.5, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 59
             // Yellow
        -1,     0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 60
        -1,    -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 61
        -1.5, -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 62
        -1.5,  0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 63
              // Yellow
        -1.5,  0.5,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 64
        -1.5,    0,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 65
        -1,       0,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 66
        -1,     0.5,  0.5,     1, 1, 0,    0, 1, 0 ,    // Index: 67
               // Green
         -1,  0.5, 0.5,      0, 1, 0,    -1, 0, 0,   // Index:  68
         -1,  0,   0.5,      0, 1, 0,    -1, 0, 0,   // Index:  69
         -1,  0,     1,      0, 1, 0,    -1, 0, 0,   // Index: 70
         -1,  0.5,   1,      0, 1, 0,    -1, 0, 0,   // Index: 71
               // Orange
         0,   0, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 72
         0,   0,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 73
         -1, 0,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 74
         -1, 0, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 75
               // Yellow
         -1.5,  1,    1,    1, 1, 0,    0, -1, 0,   // Index: 76
         -1.5,  0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 77
            0,  0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 78
            0,  1,    1,    1, 1, 0,    0, -1, 0,   // Index: 79
               // Yellow
         0,     1,    0.5,     1, 1, 0,    0, 1, 0,    // Index: 80
         0,     0.5,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 81
         -1.5,  0.5,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 82
         -1.5,  1,    0.5,     1, 1, 0,    0, 1, 0,     // Index: 83
                  // Yellow
         0,       0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  84
         0,    -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  85
         -1.5, -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 86
         -1.5,    0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  87
              // Green
         0,  1,  0.5,    0, 1, 0,    -1, 0, 0,   // Index:  88
         0,  1,  0.5,    0, 1, 0,    -1, 0, 0,   // Index:  89
         0,  1,    1,    0, 1, 0,    -1, 0, 0,   // Index: 90
         0,  1,    1,    0, 1, 0,    -1, 0, 0,   // Index: 91
                // Yellow
         -1.5, 0.5, 0.5,     1, 0, 0,     1, 0, 0,    // Index: 92
         -1.5, 0.5,   1,     1, 0, 0,     1, 0, 0,    // Index: 93
         0,    0.5,   1,     1, 0, 0,     1, 0, 0,    // Index: 94
         0,    0.5, 0.5,     1, 0, 0,     1, 0, 0,    // Index: 95
               // Orange
        -1.5,  1,  0.5,    1, 0.5, 0,    0, -1, 0,   // Index: 96
        -1.5,  1,  1,    1, 0.5, 0,   0, -1, 0,   // Index: 97
        0,     1,  1,    1, 0.5, 0,    0, -1, 0,   // Index: 98
        0,     1,  0.5,    1, 0.5, 0,    0, -1, 0,   // Index: 99
               // Green
        0,  1,  0.5,     0, 1, 0,    0, 1, 0,    // Index: 100
        0,  0.5,  0.5,     0, 1, 0,    0, 1, 0,    // Index: 101
        0,  0.5,  1,     0, 1, 0,    0, 1,0,    // Index: 102
        0,  1,  1,     0, 1, 0,    0, 1, 0,    // Index: 103
    

     // Letter A

               // Yellow      // Surface orientation
            1.5,  -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  104    
            1.5,  -1,   1,     1, 1, 0,    0, 0, -1,   // Index: 105
            0.5, -1,   1,     1, 1, 0,    0, 0, -1,   // Index:  106
            0.5, -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  107
                // Yellow
            1.5,  -1.5, 0.5,     1, 1, 0,    0, 0, 1,    // Index:  108
            1.5,  -1,   0.5,     1, 1, 0,    0, 0, 1,    // Index:  109
            0.5, -1,   0.5,     1, 1, 0,    0, 0, 1,    // Index:  110
            0.5, -1.5, 0.5,     1, 1, 0,    0, 0, 1,    // Index:  111
                  // Green
            1.5, -1,    0.5,     0, 1, 0,    -1, 0, 0,   // Index:  112
            1.5, -1.5,  0.5,     0, 1, 0,    -1, 0, 0,   // Index:  113
            1.5, -1.5,  1,       0, 1, 0,    -1, 0, 0,   // Index: 114
            1.5, -1,    1,       0, 1, 0,    -1, 0, 0,   // Index: 115
                  // Blue
             0.5, -1.5,  1,      0, 0, 1,    1, 0, 0,    // Index: 116
             0.5, -1,    1,      0, 0, 1,    1, 0, 0,    // Index: 117
             0.5, -1,   0.5,     0, 0, 1,    1, 0, 0,    // Index: 118
             0.5, -1.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 119
                   // Orange
            0.5, -1, 0.5,     1, 0.5, 0,   0, -1, 0,   // Index: 120
            0.5, -1,   1,     1, 0.5, 0,   0, -1, 0,   // Index: 121
            1.5, -1,   1,     1, 0.5, 0,   0, -1, 0,   // Index: 122
            1.5, -1, 0.5,     1, 0.5, 0,   0, -1, 0,   // Index: 123
                  // White
            1.5,  -1.5, 0.5,     1, 1, 1,    0, 1, 0,    // Index: 124
            1.5,  -1.5,   1,     1, 1, 1,    0, 1, 0,    // Index: 125
            0.5, -1.5,   1,     1, 1, 1,    0, 1, 0,    // Index: 126
            0.5, -1.5, 0.5,     1, 1, 1,    0, 1, 0,     // Index: 127
                  //Yellow
            2,   -0.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  128    
            2,   -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  129
            1.5, -1.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  130
            1.5, -0.5, 1,     1, 1, 0,    0, 0, -1,   // Index:  131
                   // Yellow
            2,   -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 132
            2,   -1.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 133
            1.5, -1.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 134
            1.5, -0.5 , 0.5,     1, 1, 0,    0, 0, 1,    // Index: 135
                   // Green
            2,   0,   0.5,     0, 1, 0,    -1, 0, 0,   // Index:  136
            2,  -1.5, 0.5,     0, 1, 0,    -1, 0, 0,   // Index:  137
            2,  -1.5,  1,      0, 1, 0,    -1, 0, 0,   // Index: 138
            2,   0,    1,      0, 1, 0,    -1, 0, 0,   // Index: 139
                  // Blue
            1.5, -0.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 140
            1.5, -0.5,   1,     0, 0, 1,    1, 0, 0,    // Index: 141
            1.5, -1.5,   1,     0, 0, 1,    1, 0, 0,    // Index: 142
            1.5, -1.5, 0.5,     0, 0, 1,    1, 0, 0,    // Index: 143
                // Yellow
            2,     0,    1,    1, 1, 0,    0, -1, 0,   // Index: 144
            2,    -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 145
            0.5, -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 146
            0.5,  0,    1,    1, 1, 0,    0, -1, 0,   // Index: 147
              // White
            2,   -1.5, 0.5,     1, 1, 1,    0, 1, 0,    // Index: 148
            2,    -1.5,  1,     1, 1, 1,    0, 1, 0,    // Index: 149
            0.5, -1.5,  1,     1, 1, 1,    0, 1, 0,    // Index: 150
            0.5, -1.5, 0.5,     1, 1, 1,    0, 1, 0,     // Index: 151
                   // Yellow
            2,       0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  152
            2,    -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  153
            0.5, -0.5,  0.5,     1, 1, 0,    0, 0, 1,    // Index: 154
            0.5,    0,  0.5,     1, 1, 0,    0, 0, 1,    // Index:  155
                  // Blue
            0.5,  -0.5, 0.5,  0, 0, 1,    -1, 0, 0,   // Index:  156
            0.5,  0.5,    0.5,  0, 0, 1,    -1, 0, 0,   // Index:  157
            0.5,  0.5,      1,  0, 0, 1,    -1, 0, 0,   // Index: 158
            0.5, -0.5,    1,  0, 0, 1,    -1, 0, 0,   // Index: 159
                  // White
            1.5, -0.5, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 160
            1.5, -0.5,   1,     1, 1, 1,     1, 0, 0,    // Index: 161
            0.5, -0.5,   1,     1, 1, 1,     1, 0, 0,    // Index: 162
            0.5, -0.5, 0.5,     1, 1, 1,     1, 0, 0,    // Index: 163
                // Yellow
            1,     0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 164
            1,    -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 165
            0.5, -0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 166
            0.5,  0.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 167
                  // Yellow
            0.5,  0.5,  0.5,     1, 1, 0,    0, 1, 0,    // Index:168
            0.5,    0,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 169
            1,       0,  0.5,     1, 1, 0,    0, 1, 0,    // Index: 170
            1,     0.5,  0.5,     1, 1, 0,    0, 1, 0 ,    // Index: 171
                    // Green
             1,  0.5, 0.5,      0, 1, 0,    -1, 0, 0,   // Index:  172
             1,  0,   0.5,      0, 1, 0,    -1, 0, 0,   // Index:  173
             1,  0,     1,      0, 1, 0,    -1, 0, 0,   // Index: 174
             1,  0.5,   1,      0, 1, 0,    -1, 0, 0,   // Index: 175
                   // Orange
             2,   0, 0.5,     1, 0.5, 0,   1, 0, 0,    // Index: 176
             2,   0,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 177
             1, 0,   1,     1, 0.5, 0,    1, 0, 0,    // Index: 178
             1, 0, 0.5,     1, 0.5, 0,    1, 0, 0,    // Index: 179
                   // Yellow
             2,     0.5,    1,    1, 1, 0,    0, -1, 0,   // Index: 180
             2,    -1.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 181
             1.5, -1.5,  1,    1, 1, 0,    0, -1, 0,   // Index: 182
             1.5,  0.5,    1,    1, 1, 0,    0, -1, 0   // Index: 183
           
    
    ];

    var indices = [
        //Letter S
        0, 1, 2,     0, 2, 3,     
        4, 5, 6,     4, 6, 7,     
        8, 9, 10,    8, 10, 11,   
        12, 13, 14,  12, 14, 15, 
        16, 17, 18,  16, 18, 19,  
        20, 21, 22,  20, 22, 23,    
        24, 25, 26,  24, 26, 27,    
        28, 29, 30,  28, 30, 31,   
        32, 33, 34,  32, 34, 35,   
        36,	37,	38,	 36, 38, 39,   
        40,	41,	42,	 40, 42, 43,	
        44,	45,	46,	 44, 46, 47,	
        48,	49,	50,	 48, 50, 51,	
        52,	53,	54,	 52, 54, 55,	
        56,	57,	58,	 56, 58, 59,	
        60,	61,	62,	 60, 62, 63,	
        64,	65,	66,	 64, 66, 67,	
        68,	69,	70,	 68, 70, 71,	
        72,	73,	74,	 72, 74, 75,	
        76,	77,	78,	 76, 78, 79,	
        80,	81,	82,	 80, 82, 83,	
        84,	85,	86,	 84, 86, 87,	
        88,	89,	90,	 88, 90, 91,	
        92,	93,	94,	 92, 94, 95,	
        96,	97,	98,	 96, 98, 99,	
        100, 101, 102, 100,	102, 103,	

        //Letter A
        104, 105, 106, 104,	106, 107,	
        108, 109, 110, 108,	110, 111,	
        112, 113, 114, 112,	114, 115,	
        116, 117, 118, 116,	118, 119,	
        120, 121, 122, 120,	122, 123,
        124, 125, 126, 124,	126, 127,
        128, 129, 130, 128,	130, 131,
        132, 133, 134, 132,	134, 135,
        136, 137, 138, 136,	138, 139,
        140, 141, 142, 140,	142, 143,
        144, 145, 146, 144,	146, 147,
        148, 149, 150, 148,	150, 151,
        152, 153, 154, 152,	154, 155,
        156, 157, 158, 156,	158, 159,
        160, 161, 162, 160,	162, 163,
        164, 165, 166, 164,	166, 167,
        168, 169, 170, 168,	170, 171,
        172, 173, 174, 172,	174, 175,
        176, 177, 178, 176,	178, 179,
        180, 181, 182, 180,	182, 183

        //Num 2
        // 184, 185, 186, 184,	186, 187,
        // 188, 189, 190, 188,	190, 191,
        // 192, 193, 194, 192,	194, 195,
        // 196, 197, 198, 196,	198, 199,
        // 200, 201, 202, 200,	202, 203,
        // 204, 205, 206, 204,	206, 207,
        // 208, 209, 210, 208,	210, 211,
        // 212, 213, 214, 212,	214, 215,
        // 216, 217, 218, 216,	218, 219
  
    ];

    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    // For the camera
    var camera = [0.0, 0.0, 5.0];
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 0.0, -10.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI/2)-15),  // 75 degrees
        1.0,
        0.5, 
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);

    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
        // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.4);             // 40% intensity
        // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [1.0, 0.0, 1.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
        // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");

    // Local functions
        // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown (event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp (event) {
        dragging = false;
    }
    function onMouseMove (event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
        // KEYBOARD
    function onKeyDown (event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
            case 38: // Camera UP
                camera[1] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 0.05;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp (event) {
        direction = "";
    }
    function onKeyPress (event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
    
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0,   0.0,  1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
        
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);

        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

        gl.drawElements(gl.TRIANGLES, indices.length, 
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}