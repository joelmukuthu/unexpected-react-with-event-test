import React, { Component } from 'react';

export default class Foo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focus: false
        };

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(e) {
        this.setState({ focus: true });
    }

    handleBlur(e) {
        this.setState({ focus: false });
    }

    render() {
        const {
            focus
        } = this.state;

        return (
            <div tabIndex='0' onFocus={this.handleFocus} onBlur={this.handleBlur}>
                {focus &&
                    <div className='with-focus'>
                        <span>with focus</span>
                    </div>
                }
            </div>
        );
    }
}
