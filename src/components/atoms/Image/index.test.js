import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import Image from '.';
import { rootTheme } from '../../../themes';
import {
  StatusState,
  ImageStatus,
  ImageType
} from '../../../utils';

describe('Image', () => {
  const props = {
    src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    alt: 'Image not found',
  };
  const types = [undefined,ImageType.PROFILE, ImageType.NORMAL];
  const statusStates = [undefined, StatusState.UNSEEN, StatusState.SEEN, StatusState.NO_STATUS];
  const statuses = [undefined, ImageStatus.CHAT, ImageStatus.STATUS, ImageStatus.MAIN];
  it('should render an img element with the correct src and alt attributes', () => {
    render(<Image {...props} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', props.src);
    expect(img).toHaveAttribute('alt', props.alt);
  });

  for (const type of types) {
    const newProps = { ...props, type };
    const testName = `renders the Image component with props ${JSON.stringify(newProps)}`;
        test(testName, () => {
          const { container } = render(<ThemeProvider theme={rootTheme} ><Image {...newProps} /></ThemeProvider>);
          expect(container).toMatchSnapshot();
      });
  }
  for (const statusState of statusStates) {
    for (const status of statuses) {
      const newProps = { ...props, type: ImageType.PROFILE, statusState, status };
      const testName = `renders the Image component with props ${JSON.stringify(newProps)}`;
      test(testName, () => {
        const { container } = render(<ThemeProvider theme={rootTheme} ><Image {...newProps} /></ThemeProvider>);
        expect(container).toMatchSnapshot();
      });
    }
  }
});