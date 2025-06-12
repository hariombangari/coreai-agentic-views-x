import { useEffect } from "react";

interface ScriptProps {
  src: string;
  onLoad?: () => void;
  onSuccess?: () => void;
}

export const Script: React.FC<ScriptProps> = ({ src, onLoad, onSuccess }) => {
  useEffect(() => {
    // Check if script with same src already exists
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      if (onLoad) onLoad();
      if (onSuccess) onSuccess();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    const handleLoad = () => {
      if (onLoad) onLoad();
      if (onSuccess) onSuccess();
    };

    script.addEventListener("load", handleLoad);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      document.head.removeChild(script);
    };
  }, [src]);

  return null;
};

export default Script;
