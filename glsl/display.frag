precision mediump float;
uniform sampler2D state;
void main(void) {
  vec2 coord = vec2(gl_FragCoord)/1024.0;
  gl_FragColor = texture2D(state, coord);
}
