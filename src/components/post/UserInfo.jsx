import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ({ tweet }) => {
  // kullanıcı isminden yola çıkarak bir nickname oluştur
  const username = tweet.user.name.toLowerCase().replaceAll(" ", "_");

  // tarih verisine eriş moment ile şuandan uzaklığı hesaplar
  let date = tweet.createdAt?.toDate();
  date = moment(date).fromNow();
  return (
    <div className="flex gap-3 items-center whitespace-nowrap text-gray-400 ">
      <p className="text-white">{tweet.user.name}</p>
      <p className="text-sm">@{username}</p>
      <p className="text-sm">{date}</p>

      {tweet.isEdited && (
        <p>
          <MdEdit className="md:hidden text-base" />
          <span className="max-md:hidden">*düzenlendi</span>
        </p>
      )}
    </div>
  );
};

export default UserInfo;