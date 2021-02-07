import React, { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { SlideItems } from '../../types';
import { notDeepStrictEqual } from 'assert';
import { nodeModuleNameResolver } from 'typescript';
import { type } from 'os';

type Props = {
  slides: SlideItems[];
};

export const Slider: React.FC<Props> = ({ slides }) => {
  const slideCount = useRef(slides.length);

  return (
    <div>
      {slides.map(({ node }) => (
        <img key={node.id} src={node.sourceUrl} width="500" />
      ))}
    </div>
  );
};
