import { useState } from 'react'
import './App.css'
import SiteSelect from './components/SiteSelect.jsx'
import PalettePreview from './components/PalettePreview.jsx'
import * as converter from './utils.js'

function App () {
  const [link, setLink] = useState('')
  const [source, setSource] = useState('lospec')
  const [currentColors, setCurrentColors] = useState([])
  const sources = ['lospec', 'coolors', 'colorhunt']
  const convertHandler = async () => {
    let paletteData = await converter.convert(source, link)
    const blobURL = URL.createObjectURL(paletteData)
    const a = document.createElement('a')

    a.setAttribute('href', blobURL)
    a.setAttribute('download', 'procreate-pal.swatches')
    a.style.display = 'none'
    a.click()

    URL.revokeObjectURL(blobURL)
  }
  const previewHandler = async () => {
    let hexCodes = await converter.getHexCodes(source, link)
    setCurrentColors(hexCodes)
  }

  return (
    <>
      <h1>procreate palette converter</h1>
      <form>
        <SiteSelect
          value={source}
          sources={sources}
          handleChange={e => setSource(e.target.value)}
        />
        <br></br>
        <br></br>
        <div>
          <label htmlFor='source_url' required>
            URL:
          </label>
          <input
            type='text'
            value={link}
            id='source_url'
            onChange={e => setLink(e.target.value)}
            onBlur={previewHandler}
          ></input>
        </div>
        <br></br>
        <button type='button' onClick={previewHandler}>
          preview
        </button>
        <br></br>
        <br></br>
        <PalettePreview hexCodes={currentColors} title='Swatches Preview' />

        <br></br>
        <button type='button' onClick={convertHandler}>
          convert!
        </button>
      </form>
      <br></br>
    </>
  )
}

export default App
