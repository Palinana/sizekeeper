import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchAllCategories } from '../store/categories';

class Categories extends Component {
    
    constructor(props) {
        super(props);
    }
    // componentDidMount(){
    //     this.props.getAllCategories();
        
    // }
 
    render() {
        // console.log('categories Data: ', this.props.categories)
        // const categories = this.props.categories
                
        return (
            <div className="container-clothes">
                <div className="grid-container">
                    <div className="grid-item-2">Skirt<img id="logo" src="../images/skirt.png" /></div>
                    <div className="grid-item-2">Underwear<img id="logo" src="../images/underwear.png" /></div>
                    <div className="grid-item-2">Top<img id="logo" src="../images/shirt.png" /></div>
                    <div className="grid-item-3">Jeans<img id="logo" src="../images/trousers.png" /></div>
                    <div className="grid-item">Shoes<img id="logo" src="../images/boot.png" /></div>
                    <div className="grid-item">Pants<img id="logo" src="../images/trousers (1).png" /></div>
                    <div className="grid-item">Hat<img id="logo" src="../images/pamela.png" /></div>
                    <div className="grid-item-1">Dress<img id="logo" src="../images/dress1.png" /></div>
                </div>  
                {/* <h2 className="category-list">Choose A Category</h2>
                    <div className="categories">
                        {
                            categories.map((category, i) => {
                                return (
                                    
                                    <div className="cat-item" >
                                    <Link to={{pathname: '/add', state: { categ: category.id}}} className='category' key={category.id}>
                                    <img className="img-thumbnail" react_id={`${i}`} src={`../images/${i}.png`} />
                                    </Link>
                                    </div>
                                    // {category.name}
                                    
                                    // <Link to={{pathname: '/add', state: { categ: category.id}}} className='category' key={category.id}>
                                    // <div className="cat-item" react_id={`${i}`}></div>
                                    // </Link>
                                )
                            })
                        }
                     </div>  */}
            </div>
        )
    }
}

const mapState = state => {
    return {
      categories: state.categories,
      user: state.user.id,
      email: state.user.email
    }
  }
  
const mapDispatch = dispatch => {
    // return {
    //     getAllCategories: () => {
    //     dispatch(fetchAllCategories());
    //     }
    // }
}
  
export default connect(mapState, mapDispatch)(Categories)