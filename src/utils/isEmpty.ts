import def from '../images/default.jpg';

export default (img: string | undefined): string | undefined => {
    if (img) return img;
    return def;
};
