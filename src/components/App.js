import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [infos, setinfo] = React.useState([]);
  console.log(infos);

  function note(note) {
    console.log("notes", note);
    setinfo((prevalue) => {
      return [...prevalue, note];
    });
  }

  function del(id) {
    console.log("deleetd", id);
    setinfo((prevalue) => {
      return prevalue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea note={note} />
      {infos.map((info, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={info.title}
            content={info.content}
            del={del}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
