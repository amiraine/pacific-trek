import React from 'react';

const PrevArrow = (props) => {
  return(
    <div onClick={props.prevSlide} className='prev'>
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-prefix="fas" data-icon="caret-left" class="svg-inline--fa fa-caret-left fa-w-6" role="img" viewBox="0 0 192 512"><path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"/></svg>
    </div>
  );
}
export default PrevArrow;
