import React from 'react';
import PropTypes from 'prop-types';


function HikeDetailModal(props){

  return(
    <div className='hike-modal'>
      <style jsx>{`
        .hike-modal{
          z-index: 2;

        }
      `}</style>

    </div>
  );
}

// HikeDetailModal.propTypes = {
//   handleCloseModal: PropTypes.func,
//   hikeList: PropTypes.object
// }

export default HikeDetailModal;
