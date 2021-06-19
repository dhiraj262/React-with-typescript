import { Avatar } from '@material-ui/core';
import React from 'react';

interface IProps {

    Icon?: any;
    title: string;
    avatar?:any;
    onClick?: any;
}

const HeaderOption: React.FC<IProps>=({ Icon, title , avatar , onClick}) => {
  
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon"  />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption;