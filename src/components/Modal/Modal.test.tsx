import { render } from '@testing-library/react';
import Modal from './index';

describe('Modal 컴포넌트 테스트', () => {
  it('should render correctly', () => {
    const { container } = render(<Modal />);
    expect(container).toBeInTheDocument();
  });
});
