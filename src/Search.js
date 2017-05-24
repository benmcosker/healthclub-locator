import React, { Component } from 'react';
import Card from 'material-ui/Card';
import SearchIcon from 'react-material-icons/icons/action/search';

class Search extends Component {
    render() {
        const { filterVal, filterUpdate} = this.props;
        return (
            <Card className="search-card">
                <form>
                    <input
                        type='text'
                        ref='filterInput'
                        placeholder="Enter your Zip or City and State"
                        className="search-input"
                        value={filterVal}
                        onChange={() => {
                            filterUpdate(this.refs.filterInput.value)
                        }}
                    />
                    <SearchIcon
                        className="search-icon"
                    />
                    <label
                        htmlFor="search">
                        Enter your Zip or City and State
                    </label>
                </form>
            </Card>
        )
    }
}

export default Search;