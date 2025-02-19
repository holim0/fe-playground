---
to: src/components/<%= name %>/index.tsx
---
import React from 'react';

interface Props {}

export const <%= name %>: React.FC<Props> = (props) => {
  return (
    <div>
      {/* Your component implementation here */}
    </div>
  );
};

export default <%= name %>;
