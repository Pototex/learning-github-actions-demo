import React from 'react';
import ParagraphView from './ParagraphView';

export const someBusinessLogic = (value) => {
  return value * 2
}

export default function ParagraphController() {
  return (
    <ParagraphView/>
  )
}