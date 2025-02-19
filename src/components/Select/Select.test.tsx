import { render } from '@testing-library/react';
import Select from './index';

describe('Select 컴포넌트 테스트', () => {
  it('should render correctly', () => {
    const { container } = render(<Select />);
    expect(container).toBeInTheDocument();
  });
});
