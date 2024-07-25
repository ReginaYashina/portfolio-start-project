import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href={'#'}>{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
`;

const ListItem = styled.li``;
