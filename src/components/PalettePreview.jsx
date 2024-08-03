import './PalettePreview.css'

function PalettePreview (props) {
  return (
    <div className='palette-container'>
      <h2>{props.title}</h2>
      <div className='color-grid' id='colorGrid'>
        {props.hexCodes.map((color, id) => (
          <div
            key={id}
            className='color-box'
            style={{ backgroundColor: `#${color}` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default PalettePreview
