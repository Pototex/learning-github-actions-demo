import React from 'react';
import '../../App.css';

const ParagraphView = React.memo(({label}) => {
  return (
    <p className="Paragraph-text">
      {label}
    </p>
  )
})

export default ParagraphView