// Component that handles the template for every page.
import React,  {PropTypes} from 'react';

class Layout extends React.Components {
    render() {
        return (
            <div className="container-fluid">
                <p>Header</p>
                {this.props.children}
            </div>
        );
    }
}

// Children will be parsed in through React Router.