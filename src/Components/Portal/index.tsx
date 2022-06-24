import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
type PortalProps = {
  children: React.ReactNode,
  className: string,
}

export const Portal = ({
  children,
  className,
}: PortalProps): JSX.Element => {
  const modalRoot = useRef(document.getElementById(className))
  const el = document.createElement("div");
  React.useEffect(() => {
    modalRoot.current = el;

    return () => {
      modalRoot.current = null;
    }
  }, [])

  return ReactDOM.createPortal(children, modalRoot?.current as HTMLElement)
}
