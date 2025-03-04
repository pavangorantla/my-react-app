import profilePic from './assets/IMG_0023.jpeg';

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture"></img>
      <h2>Pavan Gorantla</h2>
      <p>I work as a Frontend Engineer and love watching Basketball</p>
    </div>
  );
}

export default Card;
