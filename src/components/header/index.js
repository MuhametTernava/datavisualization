import { Container } from "../../layouts";
import { HeaderContainer } from "../../layouts/layouts";
import Navigation from "../navigation";
const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
    </Container>
  );
};

export default Header;
