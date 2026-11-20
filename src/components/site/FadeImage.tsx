import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Lazy image that fades in once decoded, over a warm placeholder (set the bg on the wrapper). */
export function FadeImage({ className, onLoad, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // image may have finished loading before hydration
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, [props.src]);
  return (
    <img
      ref={ref}
      loading="lazy"
      decoding="async"
      data-loaded={loaded}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={cn("img-fade", className)}
      {...props}
    />
  );
}
