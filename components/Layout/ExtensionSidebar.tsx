import { Button, ErrorIcon, styled, Text, UpRightArrowIcon } from 'junoblocks'

import { __TEST_MODE__ } from '../../util/constants'
import { APP_NAME } from 'util/constants'

export const ExtensionSidebar = () => {
  return (
    <StyledDivForWrapper>
      <StyledDivForTitleWrapper>
        <ErrorIcon color="primary" size="large" />
        <Text>This is a {__TEST_MODE__ ? 'testnet' : 'beta'} version</Text>
      </StyledDivForTitleWrapper>
      <Text css={{ padding: '$9 0 $11' }}>
        This website is currently{' '}
        {__TEST_MODE__ ? 'operates in testnet mode' : 'in beta'}. Please provide
        feedback.
      </Text>
      <Button
        as="a"
        href={process.env.NEXT_PUBLIC_FEEDBACK_LINK}
        target="__blank"
        variant="secondary"
        iconRight={<UpRightArrowIcon />}
        css={{ width: '100%' }}
      >
        Report an issue
      </Button>
      <Text variant="legend" css={{ paddingTop: '$12' }}>
        {APP_NAME} v{process.env.NEXT_PUBLIC_APP_VERSION}
      </Text>

      <StyledSpringBottom src="/logo.svg" />
    </StyledDivForWrapper>
  )
}

const StyledDivForWrapper = styled('div', {
  zIndex: '$2',
  position: 'sticky',
  borderLeft: '1px solid $borderColors$inactive',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  maxHeight: '100vh',
  padding: '$11 $12',
})

const StyledDivForTitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$4',
})

const StyledSpringBottom = styled('img', {
  position: 'absolute',
  left: 0,
  bottom: 10,
  // width: '125%',
  width: 200,
  maxWidth: '500px',
  zIndex: '$1',
  userSelect: 'none',
  userDrag: 'none',
})
