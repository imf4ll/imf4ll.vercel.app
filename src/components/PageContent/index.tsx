import { Container } from './styles';

export const PageContent = ({ content }: { content: String }) => {
  const strings = content.split("\n");

  return (
    <Container>
      {
        strings.map((i, k) => (
          <div className="line">
            <span className="line-count">{ k + 1 }</span>

            {
              i.includes("https://")
                ? <span>
                    { i.split("(")[0] }
                    (<a href={ i.split("(")[1].split(")")[0] } target="_blank">{ i.split("(")[1].split(")")[0] }</a>)
                  </span>
                : <span className={ `line-content${ i.startsWith("#") ? " title" : "" }` }>{ i }</span>
            }
          </div>
        ))
      }
    </Container>
  );
}
