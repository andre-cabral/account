import { connect } from 'react-redux';
import { path } from 'ramda';
import { getWishlistByClientId } from '../Client/Client-helpers';
import Wishlist from './Wishlist-component';

const mapStateToProps = (state, ownProps) => ({
  wishlist: getWishlistByClientId(state, path(['match', 'params', 'id'], ownProps))
})

export default connect(
  mapStateToProps,
)(Wishlist)