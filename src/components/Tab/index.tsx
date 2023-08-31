import { Container } from './styles';

import { FaMarkdown } from 'react-icons/fa6';

export const Tab = ({ name, selected, setSelected, content }: {
  name: String, selected?: {
    name: String,
    content: String,
  },
  setSelected: Function,
  content: String,
}) => {
  return (
    <Container onClick={ () => setSelected({ name: name, content: content }) }>
      <div className={ `content ${ selected?.name === name ? "selected" : "" }` }>
        <FaMarkdown size={ 16 } />

        <p>{ name }</p>
      </div>
    </Container>
  );
}
