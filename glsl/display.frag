precision mediump float;
uniform sampler2D state;
void main(void) {
  vec2 coord = vec2(gl_FragCoord)/512.0 * 0.5;
  gl_FragColor = texture2D(state, vec2(coord.x * 0.5, coord.y));
}
