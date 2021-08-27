import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const ProfileContainer = ({ user }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={style.profile}>
      <h1>Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>

      <p>
        <button onClick={() => setCount((value) => value + 1)}>Click Me</button> Clicked {count}{' '}
        times.
      </p>
    </div>
  );
};

export default ProfileContainer;
