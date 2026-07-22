import FloatingModels from '../components/FloatingModels';
import space from '../assets/workspace/space.gif';

export default function Workspace() {
  return (
    <div className="page workspace">
      <img
        className="workspace__video"
        src={space}
        alt=""
        aria-hidden
      />
      <FloatingModels />
      <div className="workspace__header">
        <h1 className="workspace__title">Marvin’s Workspace</h1>
        <p className="page-subtitle">Design and Fabrication.</p>
      </div>
    </div>
  );
}
