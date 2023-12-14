import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppLayout, PageHeader } from 'components';
import { styled } from 'junoblocks';
import { APP_NAME } from '../util/constants';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /pools when the component mounts during liquidity bootstrapping period.
    router.push('/pools');
  }, [router]);

  return (
    <AppLayout>
      <StyledContainer>
        <PageHeader
          title="Note"
          subtitle={`Swaps will be enabled on ${APP_NAME} after liquidity bootstrapping.`}
        />
      </StyledContainer>
    </AppLayout>
  );
}

const StyledContainer = styled('div', {
  maxWidth: '53.75rem',
  margin: '0 auto',
});
