import { useState } from 'react';

import { Container, VerticalHr, VerticalSeparator } from './styles';

import { Tab } from '../../components/Tab';
import { NerdTree } from '../../components/NerdTree';
import { PageContent } from '../../components/PageContent';
import { Footer } from '../../components/Footer';

import { pages } from '../../utils/pages';

export const Home = () => {
  const [ selected, setSelected ] = useState<{ name: String, content: String }>({
    name: "me.md",
    content: pages.me,
  });

  return (
    <Container>
      <div className="tabs">
        <VerticalHr />

        <Tab
          name="me.md"
          selected={ selected }
          setSelected={ setSelected }
          content={ pages.me }
        />

        <VerticalHr />

        <Tab
          name="setup.md"
          selected={ selected }
          setSelected={ setSelected }
          content={ pages.setup }
        />

        <VerticalHr />
      </div>

      <div className="content">
        <NerdTree setSelected={ setSelected } />

        <VerticalSeparator />

        <PageContent content={ selected.content } />
      </div>

      <Footer
        chars={ selected.content.split("\n")[selected.content.split("\n").length - 1].length }
        lines={ selected.content.split("\n").length }
      />
    </Container>
  );
}
