The solution involves checking if `data` is null before attempting to access its properties.  This can be done using optional chaining or conditional rendering:

**Solution 1: Optional Chaining**

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
}

export default MyComponent;
```

**Solution 2: Conditional Rendering**

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? <h1>{data.name}</h1> : <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;
```

**Solution 3: Default State Value**
Set an initial state value to prevent the error:

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState({ name: 'Loading...' });

  useEffect(() => {
    fetch('some-api-endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default MyComponent;
```