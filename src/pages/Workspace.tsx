import FloatingModels from '../components/FloatingModels';
import space from '../assets/workspace/space.mp4';

export default function Workspace() {
  return (
    <div className="page workspace">
      <video
        className="workspace__video"
        src={space}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <FloatingModels />
      <div className="workspace__header">
        <h1 className="page-title">workspace</h1>
        <p className="page-subtitle">tap on objects to see how I made them</p>
      </div>
    </div>
  );
}
