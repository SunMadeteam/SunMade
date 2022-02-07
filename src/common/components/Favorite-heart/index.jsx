import './index.scss';
import { useState } from 'react';
import heart from "./favorite-heart.svg";
import blackHeart from "./black-heart.svg";

const FavoriteHeart = () => {
  const [state, setState] = useState(false);

  const onFavorite = () => {
    setState(!state)
  }
  return (
    <div className='favorite_heart' onClick={onFavorite}>
      <img src={state ? blackHeart : heart} alt="" />
    </div>
  )
}

export default FavoriteHeart;