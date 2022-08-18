import styled from "styled-components";
import { Input } from "../../../components/ui/StyledComponents";

const DataWrapper = styled.form`
  position: relative;
  top: 3%;
  width: 90%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
//   justify-content: space-between;
`;

const SearchField = styled(Input)`
  width: 100%;
`;

const SelectWrapper = styled.div`
  position: relative;
  top: 5%;
  width: 100%;
  height: 90%;
//   overflow-y: scroll;
//   scrollbar-color: red blue;
//   background-color: #F2E0FB;
`;

const SelectList = styled.select`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  &:focus {
    outline: none;
  }
  &:focus option:checked {
    background: linear-gradient(0deg, #d29dfb 0%, #b153f9 100%);
  }
  border: none;
  background-color: #F2E0FB;
  overflow-y: auto;

  &:hover {
      &::-webkit-scrollbar {
          width: 10px;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
    transition: width 5s;
  }

  &::-webkit-scrollbar-track {
    border: 0.1px solid #dcb6fc;
    background-color: #e8cefd;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #560594;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

`;

const Option = styled.option`
    border-bottom: 1px grey solid;
    height: 20px;
    &:checked {
      background-color: transparent;
    }
`

export { DataWrapper, SearchField, SelectWrapper, SelectList, Option };
