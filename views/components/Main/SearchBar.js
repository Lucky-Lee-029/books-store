import React from 'react';

const SearchBar = (props) => {
    return (
        <form onSubmit={props.handleSubmitLink} style = {{display: 'flex'}}>
            <input className="demo-input" name="search" aria-label="Tìm kiếm" placeholder="Nhập tên để tìm kiếm sách"></input>
            <button className="demo-button">Tìm kiếm</button>
        </form>
    )
}
export default SearchBar;