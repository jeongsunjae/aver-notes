import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Editor from "../../Components/Editor";

//뮤테이션 생성
//제목과 내용을 넣어주면id 리턴
const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
`;

export default class Add extends React.Component {
  render() {
    return (
      <Mutation mutation={ADD_NOTE}>
        {createNote => {
          this.createNote = createNote;
          return <Editor onSave={this._onSave} />;
        }}
      </Mutation>
    );
  }
  _onSave = (title, content) => {
    const {
      history: { push }
    } = this.props;
    if (title !== "" && content !== "") {
      this.createNote({ variables: { title, content } });
      push("/");
    }
  };
}