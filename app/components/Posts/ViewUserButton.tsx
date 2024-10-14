'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('GPU ini sahabat PLN!');
    } else {
      alert('GPU ini musuh PLN.');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Apakah sahabat megawati? Klik disini</button>
    </>
  );
};

export default ViewUserButton;
