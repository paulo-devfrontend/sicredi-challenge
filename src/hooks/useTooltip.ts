import { useRef, useEffect } from 'react';

import { easing } from 'styles';

function createElement(tip: string) {
  const tipElement = document.createElement('ins');
  tipElement.style.backgroundColor = 'rgba(0, 0, 0, 0.87)';
  tipElement.style.padding = '6px 8px';
  tipElement.style.borderRadius = '4px';
  tipElement.style.color = '#fff';
  tipElement.style.fontSize = '12px';
  tipElement.style.fontWeight = '500';
  tipElement.style.textDecoration = 'none';
  tipElement.style.position = 'absolute';
  tipElement.textContent = tip;
  tipElement.style.transformOrigin = 'center top';
  tipElement.style.transform = 'scale(0)';
  tipElement.style.transition = `transform 150ms ${easing.standard}`;
  return tipElement;
}

function alignElement(target: HTMLElement, tipElement: HTMLModElement) {
  const { bottom, width, left } = target.getBoundingClientRect();
  const targetCenter = width / 2 + left;
  const tipCenter = tipElement.clientWidth / 2;
  tipElement.style.top = `${bottom + 8}px`;
  tipElement.style.left = `${targetCenter - tipCenter}px`;
}

export default function (tip: string) {
  const target = useRef<HTMLButtonElement>(null);

  const handleOver = (tooltip: HTMLModElement) => {
    return (e: MouseEvent | FocusEvent) => {
      alignElement(e.currentTarget as HTMLElement, tooltip);
      tooltip.style.transform = 'scale(1)';
    };
  };

  const handleOut = (tooltip: HTMLModElement) => {
    return (e: MouseEvent | FocusEvent) => {
      tooltip.style.transform = 'scale(0)';
    };
  };

  useEffect(() => {
    const { current } = target;
    if (current) {
      const root = current.parentElement!;
      const tooltip = createElement(tip);
      root.appendChild(tooltip);
      current.addEventListener('mouseover', handleOver(tooltip));
      current.addEventListener('focus', handleOver(tooltip));
      current.addEventListener('mouseout', handleOut(tooltip));
      current.addEventListener('blur', handleOut(tooltip));
    }
  }, [tip, target]);

  return target;
}
