import './Backdrop.css';

const Backdrop = ({ setSideToggle, show }) => {
  return show ? <div className='backdrop' onClick={setSideToggle}></div> : null;
};

export default Backdrop;
