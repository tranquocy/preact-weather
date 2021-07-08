import { Suspense, lazy } from 'preact/compat';
import Loading from '../../components/Loading';

const ProfileContainer = lazy(() => import('./ProfileContainer'));

const Profile = (props) => (
  <Suspense fallback={<Loading />}>
    <ProfileContainer user={props.user} />
  </Suspense>
);

export default Profile;
