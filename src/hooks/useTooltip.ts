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
  tipElement.style.position = 'fixed';
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

export default function () {
  const handleOut = (tipElement: HTMLModElement) => {
    return (e: MouseEvent | FocusEvent) => {
      tipElement.style.transform = 'scale(0)';
      setTimeout(() => tipElement.remove(), 150);
    };
  };

  const handleOver = (tip: string) => {
    return (e: MouseEvent | FocusEvent) => {
      const target = e.currentTarget as HTMLElement;
      const tipElement = createElement(tip);
      target.parentElement!.appendChild(tipElement);
      alignElement(target, tipElement);
      tipElement.style.transform = 'scale(1)';
      target.addEventListener('mouseout', handleOut(tipElement), {
        once: true,
      });
      target.addEventListener('blur', handleOut(tipElement), { once: true });
    };
  };

  const tooltip = (tip: string) => {
    return (instance: HTMLButtonElement) => {
      if (instance) {
        instance.addEventListener('mouseover', handleOver(tip));
        instance.addEventListener('focus', handleOver(tip));
      }
    };
  };

  return { tooltip };
}
