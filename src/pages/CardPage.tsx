import { Card, CardVariant } from 'components/Card/Card';
import { FC } from 'react';

export const CardPage: FC = () => {
  return (
    <Card
      click={() => console.log('hello')}
      height="200px"
      variant={CardVariant.outlined}
      width="200px"
    >
      <button>click</button>
    </Card>
  );
};
