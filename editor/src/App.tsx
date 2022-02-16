import { useCallback, useMemo, useState } from 'react';
import './App.css';
import { Slate, Editable, ReactEditor, withReact } from 'slate-react';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { debounce } from './debounce';

function App() {
  const editor = useMemo<ReactEditor>(() => withHistory(withReact(createEditor())) , [])

  const [value, setValue] = useState<Node[]>([
    {
      children: [
        {
          text: "Hey there",
        },
      ],
    },
  ]);

  const postMessage = useCallback(debounce((val) => {
    // @ts-ignore
    window.ReactNativeWebView.postMessage(JSON.stringify(val))
  }, 400), [])

  return (
    <Slate editor={editor} onChange={(val) => {
      setValue(val)
      postMessage(val)
    }} value={value}>
      <Editable />
    </Slate>
  );
}

export default App;
