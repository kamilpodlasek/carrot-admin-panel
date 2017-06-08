import styled from 'styled-components';
import Button from 'react-bootstrap/lib/Button';

const ButtonSubtract = styled(Button)`
  &:before {
    content: "-";
  }
`;

export default ButtonSubtract;