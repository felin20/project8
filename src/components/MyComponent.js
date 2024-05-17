import React from 'react';
import MediaQueryProvider from '../MediaQueryProvider';

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
      <MediaQueryProvider>
        {/* Here you can use any components that rely on the MediaQueryProvider */}
        <ChildComponent />
      </MediaQueryProvider>
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div>
      <h2>Child Component</h2>
      {/* Other JSX elements */}
    </div>
  );
};

export default MyComponent;
