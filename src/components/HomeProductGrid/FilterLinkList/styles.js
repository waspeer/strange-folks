import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

export const FilterLinkListElement = withTheme(styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  position: sticky;
  top: 90px;
  z-index: 10;
  list-style: none;
  margin: 15px 0;
  padding: 0;
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  & li {
    display: inline-block;

    :after {
      content: "*";
      margin: 0 15px;
    }

    :last-of-type {
      :after {
        content: none;
      }
    }
  }
`)

export const FilterLinkButton = withTheme(styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-style: italic;

  :disabled {
    color: ${({ theme }) => theme.primary};
    cursor: default;
  }
`)
