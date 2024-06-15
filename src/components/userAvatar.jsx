/* eslint-disable react/prop-types */

function UserAvatar({ avatar }) {
  return (
    <div className="w-14 h-14">
      <img className="rounded-full" src={avatar} alt="Asosa"></img>
    </div>
  );
}

export default UserAvatar;
