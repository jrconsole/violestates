import React from 'react';
import './ImageSlider.css';
import SimpleImageSlider from 'react-simple-image-slider';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
                <SimpleImageSlider 
                    width={'100%'}
                    height={300}
                    images={this.props.images}
                    style={{position: "relative"}}
                />
        );
    }
}

export default ImageSlider;