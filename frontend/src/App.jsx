import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import './App.css'

function App() {
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

const[loading, setLoading] = useState(false)

  const [ review, setReview ] = useState(``);

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setLoading(true)
    const response = await axios.post('https://code-reviewer-blue.vercel.app/ai/get-response', { code })
    setReview(response.data)
    setLoading(false)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                scrollBehavior: "smooth",
                overflowY: "scroll"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">{loading ? <ClipLoader color="#36d7b7" aria-label="Loading Spinner"
              data-testid="loader"  size={30}/> : "Review Code"}</div>
        </div>
       <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{loading ? "...please wait while i review your code.": review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
