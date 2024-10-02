import { auth } from "../../firebase";

const DropDown = ({ tweet }) => {
  // tweet'i gönderen kişi ile açık olan kişinin id'si aynı mı
  const isOwn = tweet.user.id === auth.currentUser.uid;
  if (isOwn) {
  }
  return <div>| | |</div>;
};

export default DropDown;
