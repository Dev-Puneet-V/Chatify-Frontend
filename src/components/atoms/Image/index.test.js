import { render, screen } from '@testing-library/react';
import Image from '.';

describe('Image', () => {
  it('should render an img element with the correct src and alt attributes', () => {
    const src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
    const alt = 'Image not found';
    render(<Image src={src} alt={alt} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', src);
    expect(img).toHaveAttribute('alt', alt);
  });
});