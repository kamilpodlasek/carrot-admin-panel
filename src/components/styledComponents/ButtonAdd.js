import styled from 'styled-components';
import Button from 'react-bootstrap/lib/Button';

const ButtonAdd = styled(Button)`
  &:before {
    content: "+";
  }
`;

export default ButtonAdd;