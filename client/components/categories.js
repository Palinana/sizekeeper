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
            <div className="container">
                <div>
                    <img id="logo" src="../images/skirt.png" />
                    <img id="logo" src="../images/underwear.png" />
                    <img id="logo" src="../images/shirt.png" />
                    <img id="logo" src="../images/trousers.png" />
                    <img id="logo" src="../images/boot.png" />
                    <img id="logo" src="../images/trousers (1).png" />
                    <img id="logo" src="../images/pamela.png" />
                    <img id="logo" src="../images/dress1.png" />
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