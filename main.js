function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        
        //number 2
        -0.8,0.8,
        -0.2,0.8,
        -0.2,0.4,
        -0.6,0.4,
        -0.6,0.2,
        -0.2,0.23,
        -0.2,0.04,
        -0.79,0.04,
        -0.79,0.5,
        -0.32,0.52,
        -0.32,0.66,
        -0.80,0.67,

        //number 9
        0.2, 0.8,
        0.75, 0.8,
        0.74, 0.036,
        0.24, 0.039,
        0.24, 0.14,
        0.61, 0.15,
        0.61, 0.67,
        0.32, 0.67,
        0.33, 0.59,
        0.52, 0.59,
        0.52, 0.5,
        0.2, 0.5,

        //LETTER S
        -0.4, -0.2,
        -0.4, -0.35, 
        -0.8, -0.2,
        -0.8, -0.4,
        -0.4, -0.4,
        -0.4, -0.6,
        -0.4, -0.3,
        -0.8, 0.7
        -0.9, -0.4
        -0.4, -0.4, 
        -0.4, -0.7,
        -0.4, -0.6,
        -0.8, -0.58,
        
        

        //letter A
        0.47, -0.2,
        0.38, -0.39,
        0.5, -0.4,
        0.21, -0.72,
        0.4, -0.4,
        0.53, -0.53,
        0.5, -0.5,
        0.7, -0.72

    ];

    // Create a linked-list for storing vertices data to GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);       //to allocate 


    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main () {
            gl_PointSize = 15.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);     // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.235, 0.206, 0.218, 1.0);
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.992, 0.992, 0.588, 0.85);
                //Red, Green, Blue, Alpha
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_LOOP, 0, 12); //number 9
    gl.drawArrays(gl.LINE_LOOP, 12, 12); //number 2
    gl.drawArrays(gl.TRIANGLES, 24, 13);  //letter s
    gl.drawArrays(gl.TRIANGLE_FAN, 36, 8); //letter a
}