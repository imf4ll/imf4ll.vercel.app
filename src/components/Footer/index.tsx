import { Container } from './styles';

export const Footer = ({ chars, lines }: { chars: number, lines: number }) => {
  return (
    <Container>
      <span className="files">&#60;Files</span>

      <div className="lines">
        <span>{ lines }:{ chars } [{ lines }] </span> <span>100%</span>
      </div>
    </Container>
  );
}
