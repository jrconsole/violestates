import React from 'react';
import './ImageSlider.css';
import SimpleImageSlider from '../../util/react-simple-image-slider';

class ImageSlider extends React.Component {


    render() {
        return(
                <SimpleImageSlider 
                    width={'100%'}
                    height={this.props.height}
                    images={this.props.images}
                    style={{position: "relative"}}
                />
        );
    }
}

export default ImageSlider;