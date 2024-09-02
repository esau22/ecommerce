import ProfileBox from "@/components/shared/profileBox";
import Breadcrumb from "@/components/shared/Breadcrumb/breadcrumb";
const Profile = () => {
  return (
    <div className="mx-auto w-full max-w-[970px]">
      <Breadcrumb pageName="Perfil" />
      <ProfileBox />
    </div>
  );
};

export default Profile;
