import { Container } from './styles';

import { FaMarkdown } from 'react-icons/fa6';

import { pages } from '../../utils/pages';

export const NerdTree = ({ setSelected }: { setSelected: Function }) => {
  return (
    <Container>
      <p className="help">“ Press ? for help</p>

      <p className="upadir">.. (up a dir)</p>

      <p className="files">&#60;/Files/</p>

      <div className="files-content">
        <div className="file" onClick={ () => setSelected({ name: "me.md", content: pages.me }) }>
          <FaMarkdown size={ 18 } />

          <p>me.md</p>
        </div>

        <div className="file" onClick={ () => setSelected({ name: "setup.md", content: pages.setup }) }>
          <FaMarkdown size={ 18 } />

          <p>setup.md</p>
        </div>
      </div>
    </Container>
  );
}
