import { Avatar } from '@material-ui/core';
import React from 'react';

interface IProps {

    Icon: any;
    title: string;

}

const HeaderOption: React.FC<IProps>=({ Icon, title}) => {
  
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {/* {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl} />} */}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption;