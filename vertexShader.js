vsSource = `
    varying vec4 vertexPos;
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
      vertexPos = aVertexPosition;
      gl_Position = mat4(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1) * uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
`;