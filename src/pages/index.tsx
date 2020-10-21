import React, { useState } from 'react';
import Draft, { EditorState, Editor } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'draft-js/dist/Draft.css';

const Home: React.FC = () => {
  const emptyContentState = Draft.convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: 'Summary',
        key: 'foo',
        type: 'unstyled',
        entityRanges: [],
      },
    ],
  });
  const [state, setState] = useState(EditorState.createEmpty());

  console.log(stateToHTML(state.getCurrentContent()));

  return (
    <>
      <div className="next-editor">
        <Editor
          editorState={state}
          onChange={(s: any) => {
            setState(s);
          }}
          editorKey="editor"
          placeholder="Write your story"
        />
      </div>
      <style jsx>
        {`
          .next-editor {
            font-family: sans-serif;
            border: 1px solid lightgrey;
            padding: 10px;
            border-radius: 3px;
            margin: 50px 20%;
          }
        `}
      </style>
    </>
  );
};

export default Home;
