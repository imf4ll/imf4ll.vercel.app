import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    lang: string;
    children: string | string[];
}

export const CodeDrop = ({ children, lang }: Props) => {
    return (
        <SyntaxHighlighter
            children={ children }
            customStyle={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 15,
                margin: '2.5rem auto',
                width: '80%',
            }}
            style={ dracula }
            PreTag="div"
            language={ lang }
        />
    );
}
