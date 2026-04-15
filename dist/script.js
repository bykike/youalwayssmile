
// --- COMPONENTE PRINCIPAL ---
class App extends React.Component {
  render() {
    const appStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      /* backgroundColor: '#f5f5f5', */
      backgroundColor: '#F6f6f6',
      minHeight: '100vh',
    };

    return /*#__PURE__*/(
      React.createElement("div", { style: appStyle },
        React.createElement(Tiles, { data: this.props.data })
      )
    );
  }
}

// --- LISTA DE IMÁGENES (CONTENEDOR) ---
class Tiles extends React.Component {
  render() {
    const tilesStyle = {
      display: 'flex',
      flexWrap: 'wrap',          // permite múltiples filas
      justifyContent: 'center',  // centra las filas
      alignItems: 'center',
      gap: '10px',               // espacio entre imágenes
      padding: '10px',
      maxWidth: '90vw',          // evita que se pegue a los bordes
    };

    return /*#__PURE__*/(
      React.createElement("div", { className: "tiles", style: tilesStyle },
        this.props.data.map(data => {
          return /*#__PURE__*/React.createElement(Tile, { data: data, key: data.id });
        })
      )
    );
  }
}

// --- CADA IMAGEN INDIVIDUAL ---
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false
    };

    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }

  _mouseEnter(e) {
    e.preventDefault();
    if (!this.state.mouseOver) {
      this.setState({ mouseOver: true });
    }
  }

  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver) {
      this.setState({ mouseOver: false });
    }
  }

  _clickHandler(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    let tileStyle = {};

    // Si Se ha hecho click sobre la imagen y ha lanzado una ventana flotante
    if (this.state.open) {
      tileStyle = {/*
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        maxHeight: '80vh',
        objectFit: 'contain',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 999,
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
        */
      };
    } 
    // Estado normal de las imágenes
    else {
      tileStyle = {
      
        /* width: this.props.data.width || '100%', */
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      
      };

      // Efecto hover
      if (this.state.mouseOver) {
        tileStyle.transform = 'scale(1.05)';
        tileStyle.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
        tileStyle.borderRadius = '40px';
      }
    }

    return /*#__PURE__*/(
      React.createElement("div", { className: "tile" },
        React.createElement("img", {
          onMouseEnter: this._mouseEnter,
          onMouseLeave: this._mouseLeave,
          onClick: this._clickHandler,
          src: this.props.data.image,
          alt: this.props.data.name,
          style: tileStyle
        })
      )
    );
  }
}

// --- RENDER PRINCIPAL ---
ReactDOM.render(
  /*#__PURE__*/React.createElement(App, { data: data }),
  app
);