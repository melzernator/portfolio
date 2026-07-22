import { useEffect, useRef } from 'react';
import FloatingModels from '../components/FloatingModels';
import space from '../assets/workspace/space.mp4';

export default function Workspace() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Create the element imperatively so muted is set BEFORE src.
    // React's muted prop is often applied too late for autoplay policies.
    const video = document.createElement('video');
    video.className = 'workspace__video';
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('aria-hidden', 'true');
    video.setAttribute('disablepictureinpicture', '');
    video.tabIndex = -1;

    // Assign src only after mute flags are in place.
    video.src = space;
    host.appendChild(video);

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      video.muted = true;
      video.volume = 0;
      const p = video.play();
      if (p) void p.catch(() => {});
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('canplaythrough', tryPlay);

    // Retry briefly — covers race conditions after refresh.
    const interval = window.setInterval(() => {
      if (cancelled || !video.paused) {
        window.clearInterval(interval);
        return;
      }
      tryPlay();
    }, 250);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('canplaythrough', tryPlay);
      video.pause();
      video.removeAttribute('src');
      video.load();
      video.remove();
    };
  }, []);

  return (
    <div className="page workspace">
      <div ref={hostRef} className="workspace__video-host" />
      <FloatingModels />
      <div className="workspace__header">
        <h1 className="workspace__title">Marvin’s Workspace</h1>
        <p className="page-subtitle">Design and Fabrication.</p>
      </div>
    </div>
  );
}
