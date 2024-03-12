import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {

  return (
    <RecoilRoot>
      <NavBar />
    </RecoilRoot>
  )
}

function NavBar() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom)
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>Messaging ({messagingCount >= 100 ? "99+" : messagingCount})</button>
      <button>Notifications ({notificationsCount >= 100 ? "99+" : notificationsCount})</button>
      <button onClick={() => setMessagingCount(messagingCount + 1)}>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
