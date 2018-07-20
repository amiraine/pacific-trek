import React from 'react';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import HikeDetailModal from './HikeDetailModal';
import {connect} from 'react-redux';

function Search(props){
  // let optionalSelectedHike = null;
  // if (props.selectedHikeId !=null){
  //   optionalSelectedHike = <HikeDetailModal selectedHikeId={props.hikeList.masterhikeList.${props.selectedHikeId}}/>
  // }
  return(
    <div className='search-wrapper'>
            <style>{`
              .search-wrapper{
                display: grid;
                grid-template-columns: 1fr 2fr;
                height: 75vh;
              }
              .search-results{
                overflow-y: auto;
              }
            `}</style>
          <HikeDetailModal show={props.showModal}
            hikeList={props.hikeList}
            handleCloseModal={props.handleCloseModal}
            />
            <div className='search-results'>
              <SearchResults hikeList={props.hikeList}
              handleUrlId={props.handleUrlId}/>
            </div>
            <div className='map'>
              map goes here
            </div>
          </div>
  )
}
// class Search extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       searchInput: '',
//       urlId: ''
//     }
//   }
//   render(){
//     return(
//       <div className='search-wrapper'>
//         <style>{`
//           .search-wrapper{
//             display: grid;
//             grid-template-columns: 1fr 2fr;
//             height: 75vh;
//           }
//           .search-results{
//             overflow-y: auto;
//           }
//         `}</style>
//         <div className='search-results'>
//           <SearchResults hikeList={this.props.hikeList}
//           handleUrlId={this.props.handleUrlId}/>
//         </div>
//         <div className='map'>
//           map goes here
//         </div>
//       </div>
//     )
//   }
// }

Search.propTypes = {
  handleUrlId: PropTypes.func,
}
const mapStateToProps = state => {
  return {
    selectedHikeId: state.selectedHikeId
  };
};

export default connect(mapStateToProps)(Search);
