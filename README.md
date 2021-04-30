# noloadanim

> A simple fix for Chrome&#x27;s on page load css transition bug

If you don't know what it is, then you've not had this bug on your development stage yet, Reported [here](https://code.google.com/p/chromium/issues/detail?id=167083) and [here](https://code.google.com/p/chromium/issues/detail?id=332189).

How does this approach work? Just block any transition on all the elements until the page has been fully rendered. 


## Install

```bash
npm install --save noloadanim
```

```bash
yarn add noloadanim
```

## Usage

```jsx
import React, { Component } from 'react'

import DisableOnLoadTrans from 'noloadanim'
import 'noloadanim/dist/index.css'

class Example extends Component {
  render() {
    return <DisableOnLoadTrans>
    {
      ...Your components
    }
    </DisableOnLoadTrans>
  }
}
```

And on Next.js (_app.js)

```jsx
import DisableOnLoadTrans from 'noloadanim'
import 'noloadanim/dist/index.css'
function MyApp({ Component, pageProps }) {
  return (<DisableOnLoadTrans>
           <Component {...pageProps} />
        </DisableOnLoadTrans>)
}

export default MyApp

```


## License

MIT © [SonicCodes](https://github.com/SonicCodes)
