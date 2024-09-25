import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import { StrictMode } from 'react'
import './mui-overrides.css'
import { makeStyles } from "tss-react/mui";

const TestComponent = () => {
    const useStyles = makeStyles()({
      //If you don't need neither the theme nor any state or
      //props to describe your component style you can pass-in
      //an object instead of a callback.
      "root": {
          "color": "red"
      }
  });
  const classes = useStyles().classes
  console.log("TestComponent render")

	return <div className={classes.root}>test</div>;
};

export function PageShell({
  children,
  pageContext,
  emotionCache,
}: {
  children: React.ReactNode
  pageContext: Vike.PageContext
  emotionCache: EmotionCache
}) {
  return (
    <StrictMode>
      <CacheProvider value={emotionCache}>
        <TestComponent />
      </CacheProvider>
    </StrictMode>
  )
}