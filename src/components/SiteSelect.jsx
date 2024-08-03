function SiteSelect (props) {
  return (
    <select value={props.source} onChange={props.handleChange}>
      {props.sources.map((source, index) => (
        <option key={index} value={source}>
          {source}
        </option>
      ))}
    </select>
  )
}

export default SiteSelect
