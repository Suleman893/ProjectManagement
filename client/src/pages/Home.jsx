import Clients from '../components/Clients';
import Projects from '../components/Projects';
import CreateClientModal from '../components/CreateClientModal';
import AddProjectModal from '../components/AddProjectModal';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <CreateClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}