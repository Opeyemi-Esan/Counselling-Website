import { Parallax } from 'react-parallax';
import BackImage from '../image/bg_1.jpg.webp';

const Container = () => (
    <Parallax bgImage={BackImage} strength={200}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);

export default Container