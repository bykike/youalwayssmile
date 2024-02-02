const app = document.getElementById('app');
const data = [{
  id: 19,
  name: "Fire",
  image: "images/photo-19.jpg" },
{
  id: 18,
  name: "Fire",
  image: "images/photo-18.jpg" },
{
  id: 17,
  name: "Island",
  image: "images/photo-17.jpg" },
{
  id: 16,
  name: "Forest",
  image: "images/photo-16.jpg" },
{
  id: 15,
  name: "Whale",
  image: "images/photo-15.jpg" },
{
  id: 14,
  name: "Mountain",
  image: "images/photo-14.jpg" },
{
  id: 13,
  name: "Boat",
  image: "images/photo-13.jpg" },
{
  id: 12,
  name: "Flowers",
  image: "images/photo-12.jpg" },
{
  id: 11,
  name: "Fire",
  image: "images/photo-11.jpg" },
{
  id: 10,
  name: "Garden",
  image: "images/photo-10.jpg" },
{
  id: 9,
  name: "Flowers",
  image: "images/photo-9.jpg" },
{
  id: 8,
  name: "Fire",
  image: "images/photo-8.jpg" },
{
  id: 7,
  name: "Garden",
  image: "images/photo-7.jpg" },
{
  id: 6,
  name: "Fire",
  image: "images/photo-6.jpg" },
{
  id: 5,
  name: "Garden",
  image: "images/photo-5.jpg" },
{
  id: 4,
  name: "Fire",
  image: "images/photo-4.jpg" },
{
  id: 3,
  name: "Garden",
  image: "images/photo-3.jpg" },
{
  id: 2,
  name: "Garden",
  image: "images/photo-2.jpg" },
{
  id: 1,
  name: "Bridge",
  image: "https://aws-smiles.s3.amazonaws.com/photo-1.jpg" }];


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(Tiles, { data: this.props.data }));

  }}


class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return /*#__PURE__*/(
      React.createElement("div", { className: "tiles" },
      this.props.data.map(data => {
        return /*#__PURE__*/React.createElement(Tile, { data: data, key: data.id });
      })));


  }}


class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false };

    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true });

    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false });

    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true });

    } else {
      this.setState({
        open: false });

    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let headerStyle = {};
    let zoom = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        /* width: '62vw',
        height: '62vw', */
        position: 'fixed',
        top: '10%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        margin: '0',
        width: '58vw',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        zIndex: 999,
        transform: 'none' };

    } else {
      tileStyle = {
        /* width: '18vw',
        height: '18vw' };*/
         };
    }

    return /*#__PURE__*/(
      React.createElement("div", { className: "tile" }, /*#__PURE__*/
      React.createElement("img", {
        onMouseEnter: this._mouseEnter,
        onMouseLeave: this._mouseLeave,
        onClick: this._clickHandler,
        src: this.props.data.image,
        alt: this.props.data.name,
        style: tileStyle })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, { data: data }),
app);