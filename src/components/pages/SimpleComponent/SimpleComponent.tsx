import React, { FC } from 'react';
import { hot } from 'react-hot-loader';
import { SimpleComponentContainer } from './styles.SimpleComponent';

interface SimpleComponentProps {
   // ... Props types here ...
}

export const SimpleComponent: FC<SimpleComponentProps> = () => {
   return (
      <SimpleComponentContainer>
         Example of a simple component. No Redux, no router props. <br />
         Styled using Styled Components.
      </SimpleComponentContainer>
   );
};

export default hot(module)(SimpleComponent);
