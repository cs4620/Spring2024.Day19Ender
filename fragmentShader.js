fsSource = `
    varying lowp vec4 vertexPos;
    void main() {
      gl_FragColor = vec4(vertexPos.x, vertexPos.y, 1.0, 1.0);
    }
  `;