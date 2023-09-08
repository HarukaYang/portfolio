import React from "react"

interface MyButtonProps {
  name: string;
}

const MyButton: React.FC<MyButtonProps> = (MyButtonProps:MyButtonProps) => {
  return(
    <div>
      Hi~ {MyButtonProps.name}
    </div>
  );
};

export default MyButton;