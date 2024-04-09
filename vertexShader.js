vsSource = `
    varying vec4 vertexPos;
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
      vertexPos = aVertexPosition;
      gl_Position = mat4(1,0,0,0, 0,1,0,0, 0,0,(-10-(-1))/(-1-(-10)),-1, 0,0,(2*-10-(-1))/(-1-(-10)),0) /* * uProjectionMatrix */ * uModelViewMatrix * aVertexPosition;
    }
`;