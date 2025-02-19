---
to: src/components/<%= name %>/<%= name %>.test.tsx
---

import { render } from '@testing-library/react';
import <%= name %> from './index';

describe('<%= name %> 컴포넌트 테스트', () => {
  it('should render correctly', () => {
    const { container } = render(<<%= name %> />);
    expect(container).toBeInTheDocument();
  });
});
