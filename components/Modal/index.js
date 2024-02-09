import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
} from "react";

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={`modal ${fade ? "modal-fade" : ""}`}>
          <div className="modal-overlay" onClick={close} />
          <div className="modal-header">
            <span
              role="button"
              className="modal-close"
              aria-label="close"
              onClick={close}
            >
              x
            </span>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default forwardRef(Modal);
