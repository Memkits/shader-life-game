precision mediump float;
uniform sampler2D previousState;

const float canvasSize = 1024.0;

int wasAlive(vec2 coord) {
  if (coord.x < 0.0 || canvasSize < coord.x || coord.y < 0.0 || 0.5*canvasSize < coord.y) return 0;
  vec4 px = texture2D(previousState, vec2(coord.x / (2. * canvasSize), coord.y / canvasSize));
  return px.r + px.b + px.b > 1.1 ? 1 : 0;
}
void main(void) {
  vec2 coord = vec2(gl_FragCoord);
  int aliveNeighbors =
    wasAlive(coord+vec2(-1.,-1.)) +
    wasAlive(coord+vec2(-1.,0.)) +
    wasAlive(coord+vec2(-1.,1.)) +
    wasAlive(coord+vec2(0.,-1.)) +
    wasAlive(coord+vec2(0.,1.)) +
    // wasAlive(coord+vec2(0.,1.)) +
    wasAlive(coord+vec2(1.,-1.)) +
    wasAlive(coord+vec2(1.,0.)) +
    wasAlive(coord+vec2(1.,1.));
  // aliveNeighbors = 8 - aliveNeighbors;
  bool nowAlive = wasAlive(coord) == 1 ? 2 <= aliveNeighbors && aliveNeighbors <= 3 : 3 == aliveNeighbors;
  gl_FragColor = nowAlive ? vec4(1.,1.,1.,1.) : vec4(0.,0.,0.,0.);
}
