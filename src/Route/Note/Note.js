import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import { GET_NOTE } from "../../queries";

//MarkdownRenderer li랑 비슷한 효과를 나타내줌
const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button``;

export default class Note extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    console.log(id);
    // 왜 query에서 data.note하면 값을 못가져오는 거지..? 로그 직어보면 안에 note는 있는데..
    return (
        <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data ? (
            <>
            {console.log(data)}
        <TitleComponent>
                <Title>{data.note && data.note.title}</Title>
                <Link to={`/edit/${data.note.id}`}>
                  <Button>Edit</Button>
                </Link>
              </TitleComponent>
        <MarkdownRenderer markdown={data.note.content} />
            </>
          ) : null
        }
      </Query>
    );
  }
}