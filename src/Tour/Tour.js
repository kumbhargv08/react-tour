import React from 'react';
import './Tour.css';

export default class Tour extends React.Component {

    constructor() {
        super();
        this.state = {
            elements : [{
                cssSelector: 'header',
                comment: 'this is header'
            },
            {
                cssSelector: 'faq',
                comment: 'here, you will fins the frequetly asked questions'
            },
            {
                cssSelector: 'help',
                comment: 'This is help'
            },
            {
                cssSelector: 'username',
                comment: 'Here, you can enter your username'
            },{
                cssSelector: 'paasword',
                comment: 'Here, You can enter your password'
            },{
                cssSelector: 'loginbutton',
                comment: 'Click here to log in to the application'
            }
        ],
        currentElement: 0,
        }
    }

    componentDidMount() {
        const element = this.state.elements[0]
        this.changeElement(element)
    }

    onNextClick = () => {
        const {currentElement, elements} = this.state;
        const index = Math.min(currentElement + 1, elements.length - 1 );
        const element = elements[index]
        this.changeElement(element)
        this.setState({
            currentElement: index 
        })
    }

    onPrevClick = () => {
        const {currentElement, elements} = this.state;
        const index = Math.max(0,currentElement - 1)
        const element = elements[index]
        this.changeElement(element)
        this.setState({
            currentElement: index 
        })
    }

    changeElement = (element) => {
        console.log(element)
        const style = document.getElementById(element.cssSelector).getBoundingClientRect()
        const newStyle = document.getElementById('tour-wrapper').style
        console.log(style)

        console.log("newStyle =-->", newStyle)
        newStyle.top = style.top + 20 + 'px'
        newStyle.left = style.left + 20 + 'px'
    }
    
    render() {
        return (
            this.props.show ?
            <div className='tour'>
                <div className='tour-background' />
                <div id='tour-wrapper'>
                    <button className='tour-close-btn' onClick={this.props.onClose}>
                        <span className='glyphicon glyphicon-remove-circle' aria-hidden='true' />
                    </button>
                    <div className='tour-msg'>
                        {this.state.elements[this.state.currentElement].comment}
                    </div>
                <div className='tour-footer'>
                    <button disabled={this.state.currentElement == 0} className='tour-btn' onClick={this.onPrevClick}>Prev</button>
                    <button disabled={this.state.currentElement == (this.state.elements.length -1)} className='tour-btn' onClick={this.onNextClick}>Next</button>
                </div>
                </div>
            </div> : null
        )
    }
}