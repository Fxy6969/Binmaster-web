import React, { useEffect, useRef } from 'react';
import { mat4 } from 'gl-matrix';
import "./style.css"

const WebGLComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.');
      return;
    }

    // Vertex shader code
    const vsSource = `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      
      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;

      varying highp vec2 vTextureCoord;

      void main(void) {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vTextureCoord = aTextureCoord;
      }
    `;

    // Fragment shader code
    const fsSource = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #extension GL_OES_standard_derivatives : enable
    
    uniform vec2 resolution;
    uniform float time;
    
    mat2 m(float a) {
        float c=cos(a), s=sin(a);
        return mat2(c,-s,s,c);
    }
    
    float map(vec3 p) {
        p.xz *= m(time * 0.4);p.xy*= m(time * 0.1);
        vec3 q = p * 2.0 + time;
        return length(p+vec3(sin(time * 0.7))) * log(length(p) + 1.0) + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
    }
    
    void main() {
        vec2 a = gl_FragCoord.xy / resolution.y - vec2(1.2, 0.5);
        vec3 cl = vec3(0);
        float d = 1.2;
    
        for (int i = 0; i <= 3; i++) {
            vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
            float rz = map(p);
            float f =  clamp((rz - map(p + 0.1)) * 0.5, -0.5, 1.0);
            vec3 l = vec3(0.3, 0.1, 0.2) + vec3(6.0, 6.5, 7.0) * f;
            cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.3 * l;
            d += min(rz, 1.0);
        }
    
        gl_FragColor = vec4(cl, 1.0);
    }
    `;

    // Compile shaders and create shader program
    function compileShader(gl: WebGLRenderingContext, source: string, type: number): WebGLShader {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
    
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        throw new Error('Failed to compile shader.');
      }
    
      return shader;
    }

    const vertexShader = compileShader(gl,vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl,fsSource, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram()!;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
      return;
    }

    gl.useProgram(shaderProgram);

    // Set up shader attributes and uniforms
    const timeLocation = gl.getUniformLocation(shaderProgram, 'time');
    const resolutionLocation = gl.getUniformLocation(shaderProgram, 'resolution');

    const startTime = Date.now();

    // Set up geometry buffers
    const positionBuffer = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttrib = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionAttrib);

    // Set up matrices
    const modelViewMatrix = mat4.create();
    const projectionMatrix = mat4.create();
    const modelViewUniformLocation = gl.getUniformLocation(shaderProgram, 'uModelViewMatrix');
    const projectionUniformLocation = gl.getUniformLocation(shaderProgram, 'uProjectionMatrix');

    function render(gl: WebGLRenderingContext) {
      const currentTime = (Date.now() - startTime) * 0.001; // Convert to seconds
      gl.uniform1f(timeLocation, currentTime);
      
      const resolution = [canvas.width, canvas.height];
      gl.uniform2fv(resolutionLocation, resolution);

      // Set up model-view and projection matrices
      mat4.identity(modelViewMatrix);
      mat4.ortho(projectionMatrix, -1, 1, -1, 1, -1, 1);

      gl.uniformMatrix4fv(modelViewUniformLocation, false, modelViewMatrix);
      gl.uniformMatrix4fv(projectionUniformLocation, false, projectionMatrix);

      // Clear the canvas
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Draw the geometry
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      // Request the next frame
      requestAnimationFrame(() => render(gl));
    }

    render(gl);

  }, []);

  return <canvas ref={canvasRef} className="webgl-canvas" />;
};

export default WebGLComponent;