import { Helmet } from 'react-helmet';

import { CodeDrop } from '../../../components/CodeDrop';

import Screenshot01 from '../assets/Calling-C-From-Golang-Screenshot-01.png';

export const CallingCFromGolang = () => (
    <>
        <Helmet>
            <meta name="description" content="A simple guide of how to use C code natively on Golang." />
            <meta name="image" content="https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </Helmet>

        <div className="title">
            <h1>Calling C code from Golang</h1>
            <span>June 16 - 22:30</span>
        </div>

        <div className="tags">
            <p>Go</p>
            <p>C</p>
            <p>Knowledge</p>
        </div>

        <hr/ >

        <div className="pilot">
            <img
                src="https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width="800"
                title="Old computer."
                alt="Old computer."
            />
            <span>
                Old computer. <a
                    href="https://www.pexels.com/photo/computer-computer-keyboard-contemporary-display-257881/"
                >
                    Source
                </a>
            </span>
        </div>

        <div className="content">
            <p>
                Maybe any moment you will need handle with native code or use OS level functionalities (Maybe this already happened).
                The best workaround for that use case is call any C code from Golang, but, how we do that?
                Using the "C" standard library provided by Google itself! Let's go see how that works!
            </p>

            <p>
                First, we will create a simple script in Go:
            </p>
            
            <CodeDrop
                lang="go"
            >
                {
`package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}`
                }
            </CodeDrop>

            <p>
                Up to this point, a normal "Hello, world", yep? What if we want to print "Hello, world" in C and
                trigger the function on Go? So, let's code a simple "Hello, world" on C:
            </p>

            <CodeDrop
                lang="c"
            >
                {
`#include <stdio.h>

int hello(void) {
    printf("Hello, world!\\n");

    return 0;
}
`
                }
            </CodeDrop>

            <p>
                So now, we can include "hello.c" on Golang:
            </p>

            <CodeDrop
                lang="go"
            >
                {
`package main

/*
#include "hello.c"
*/
import "C"

func main() {
    C.hello()

}`
                }
            </CodeDrop>

            <p>
                If we run that Go script, that will be the output:
            </p>

            <div className="centered-image">
                <img
                    src={ Screenshot01 }
                />
            </div>

            <p>
                The comment on top of "C" import is required, we use the same C syntax for including headers and codes.
                A "Hello, world!" will be printed on terminal, as if it were directly
                called from Go, but, called from C and triggered by Go. With that knowledge, you can expand Golang use
                cases and solve various compatibility problems! Share that knowledge with your friends by sending for those.
            </p>
        </div>
    </>
);
