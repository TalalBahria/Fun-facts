import Header from "./Header"
const root = ReactDOM.createRoot(document.getElementById("root"))


function Footer() {
    return (
        <footer>
            © 2026 Khawaja development. All rights reserved.
            © 2026 Khawaja development. All rights reserved. Yeahhh!!
        </footer>
    )
}
    

function Content() {
    return (
        <>
        <h1>Reasons I'm excited to learn React</h1>
        <h1>Reasons I'm excited to learn React!!!</h1>
        <ol>
            <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
        </>
    )
}

function Page() {
    return (
        <>
            <Header />
            <main>
                <Content />
            </main>
            <Footer />
        </>
    )
}

root.render(
    <Page />    
)