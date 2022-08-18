import styled from "styled-components";
import { Input } from "../../../components/ui/StyledComponents";

const DataWrapper = styled.form`
  position: relative;
  top: 10px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchField = styled(Input)`
  width: 100%;
`;

const SelectWrapper = styled.div`
  position: relative;
  top: 10px;
  width: 90%;
  height: 50px;
  overflow-y: scroll;
`;

const SelectList = styled.select`
  position: relative;
  width: 100%;
  overflow-y: hidden;
`;

export { DataWrapper, SearchField, SelectWrapper, SelectList };
