import {Image} from 'react-native';
import {Container} from './styles'
import Logo from '../../src/Logo.png';

function Header () {
    return (
        <Container>
            <Image source={Logo}/>
        </Container>
    );
}

export default Header;