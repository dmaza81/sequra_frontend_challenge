import { useEffect, useRef } from "react";

type MutationCallback = (
  mutationsList: MutationRecord[],
  observer: MutationObserver
) => void;

interface UseMutationObserverOptions {
  config?: MutationObserverInit;
}

const DEFAULT_OPTIONS: UseMutationObserverOptions = {
  config: { attributes: true, childList: true, subtree: true },
};

const useMutationObserver = (
  targetEl: HTMLElement | null | undefined,
  callback: MutationCallback,
  options: UseMutationObserverOptions = DEFAULT_OPTIONS
) => {
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    if (!targetEl) return;

    const observer = new MutationObserver(callback);
    observerRef.current = observer;

    const { config } = options;
    observer.observe(targetEl, config);

    return () => {
      observer.disconnect();
    };
  }, [targetEl, callback, options]);
};

export default useMutationObserver;
