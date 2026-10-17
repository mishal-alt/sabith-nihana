import Page from './Page.jsx'
import Credit from './Credit.jsx'

export default function App() {
  return (
    <>
      <Page />
      <div style={{ padding: '14px 0 90px', textAlign: 'center', fontSize: 10, letterSpacing: '.28em', textTransform: 'uppercase', color: 'rgba(120,110,95,.7)', fontFamily: "'Montserrat', sans-serif" }}>
        <Credit />
      </div>
    </>
  )
}
