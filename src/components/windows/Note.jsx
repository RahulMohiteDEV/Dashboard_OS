import { use, useEffect, useState } from 'react'
import React  from 'react'
import Markdown from 'react-markdown'
import Macwindow from './Macwindows'
import './note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({windowName, setWindowOpen}) => {
 
    const [markdown, setMarkdown] = useState(null)

    useEffect(() => {
           fetch('note.txt')
           .then(response => response.text())
           .then(data => setMarkdown(data))
    }, [])

  return (
    <Macwindow windowName={windowName}  setWindowOpen={setWindowOpen}>
        <div className="note-window">
            { markdown ? <SyntaxHighlighter language="markdown" style={docco}>{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
        </div>
    </Macwindow>
  )
}

export default Note
