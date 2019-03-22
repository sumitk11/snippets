function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Application extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      color: "#abc123" });_defineProperty(this, "onClick",


    event => {
      this.setState({
        color: event.target.value });


    });}
  render() {
    const { textColor, background } = getColors(this.state.color);
    return (
      React.createElement("div", null,
      React.createElement("input", { className: "input", style: { 'backgroundColor': background, 'color': textColor }, type: "text", value: this.state.color, onChange: this.onClick, maxLength: "7" })));


  }}


function getColors(hex) {
  const defaultColors = {
    textColor: '#000000',
    background: '#FFFFFF' };

  hex = hex.slice(1);
  if (hex.length < 6) {
    return defaultColors;
  }
  if (!/[0-9a-fA-F]{6}/.test(hex)) {
    return defaultColors;
  }
  const r = (255 - parseInt(hex.slice(0, 2), 16));
  const g = (255 - parseInt(hex.slice(2, 4), 16));
  const b = (255 - parseInt(hex.slice(4, 6), 16));
  return {
    textColor: r * 0.299 + g * 0.587 + b * 0.114 < 186 ? '#000000' : '#FFFFFF',
    background: '#' + hex };

}

ReactDOM.render(React.createElement(Application, null), document.getElementById('root'));
