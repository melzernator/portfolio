import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { CSSProperties, ElementType, MouseEvent, ReactNode } from 'react';

type ZoomableProps = {
  /** Element to render as — use "figure" to stand in for figure.project__figure */
  as?: ElementType;
  /** Layout classes that would normally sit on the asset / figure itself */
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

type Media = {
  kind: 'img' | 'video';
  src: string;
  alt: string;
};

/**
 * Case-study asset wrapper: pressing anywhere on the asset opens it in a
 * fullscreen overlay. Clicking the overlay, the back button, or pressing
 * Escape returns to the page. Default for all case-study images and videos.
 */
export default function Zoomable({ as: Tag = 'div', className, style, children }: ZoomableProps) {
  const [media, setMedia] = useState<Media | null>(null);

  useEffect(() => {
    if (!media) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMedia(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [media]);

  const open = (e: MouseEvent<HTMLElement>) => {
    const clicked = (e.target as HTMLElement).closest('img, video');
    // clicking a caption or padding still zooms the asset inside the wrapper
    const el = clicked ?? e.currentTarget.querySelector('img, video');
    if (!el) return;
    setMedia({
      kind: el.tagName === 'VIDEO' ? 'video' : 'img',
      src:
        el instanceof HTMLImageElement
          ? el.currentSrc || el.src
          : (el as HTMLVideoElement).currentSrc || (el as HTMLVideoElement).src,
      alt: el instanceof HTMLImageElement ? el.alt : '',
    });
  };

  return (
    <Tag
      className={className ? `zoomable ${className}` : 'zoomable'}
      style={style}
      onClick={open}
    >
      {children}
      {/* purely decorative hint — the whole asset is the click target */}
      <span className="zoomable__expand" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9.5 2H14v4.5M14 2 9 7M6.5 14H2V9.5M2 14l5-5" />
        </svg>
      </span>
      {media &&
        createPortal(
          /* stopPropagation: the portal still bubbles clicks through the React
             tree into the wrapper's onClick, which would reopen the overlay */
          <div
            className="zoomable__overlay"
            onClick={(e) => {
              e.stopPropagation();
              setMedia(null);
            }}
          >
            {media.kind === 'video' ? (
              <video src={media.src} autoPlay loop muted playsInline />
            ) : (
              <img src={media.src} alt={media.alt} />
            )}
            <button
              type="button"
              className="back-button zoomable__back"
              aria-label="Back"
              onClick={() => setMedia(null)}
            >
              ←
            </button>
          </div>,
          document.body,
        )}
    </Tag>
  );
}
