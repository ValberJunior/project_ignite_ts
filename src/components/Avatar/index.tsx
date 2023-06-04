import React, { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';
import classNames from 'classnames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

const Avatar = ({hasBorder, ...props}:AvatarProps) => {
  return (
    <img
      className={classNames({
        [styles.avatarWithBorder] : hasBorder,
        [styles.avatar] : !hasBorder
      })}
      {...props}
       />
  )
}

export default Avatar