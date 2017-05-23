import React from 'react';
import Card from 'material-ui/Card';
import SearchIcon from 'react-material-icons/icons/action/search';

function Search() {
    return (
        <Card className="search-card">
            <form>
                <input id="search" type="text" placeholder="Enter your Zip or City and State"className="search-input" />
                <SearchIcon className="search-icon" />
                <label for="search">Enter your Zip or City and State</label>

            </form>
        </Card>
    );
}

export default Search;