import React, {Component} from 'react';
import classes from './gallery.module.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './gallery_custom.css';
class Gallery extends Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        const images = [
            { //    solar system
                original: '/img_gallery/solar_1.png',
                thumbnail: '/img_gallery/solar_1.png',
                description: 'Solar System model'
            },
            {
                original: '/img_gallery/solar_2.png',
                thumbnail: '/img_gallery/solar_2.png',
                description: 'Sun'
            },
            {
                original: '/img_gallery/solar_3.png',
                thumbnail:'/img_gallery/solar_3.png',
                description: 'Sun and Earth comparison'
            },
            {
                original: '/img_gallery/solar_4.png',
                thumbnail: '/img_gallery/solar_4.png',
                description: 'Earth and Moon'
            },
            {//     instancing
                original: '/img_gallery/instancing_1.png',
                thumbnail: '/img_gallery/instancing_1.png',
                description: 'Instancing'
            },
            {
                original: '/img_gallery/instancing_2.png',
                thumbnail: '/img_gallery/instancing_2.png',
                description: 'Just some asteroids'
            },
            {//     playground
                original: '/img_gallery/playground.png',
                thumbnail:'/img_gallery/playground.png',
                description: 'OpenGL Playground'
            },
            {//     ping_pong
                original: '/img_gallery/ping_pong.png',
                thumbnail: '/img_gallery/ping_pong.png',
                description: 'Ping pong ball'
            },
            {//     gravity
                original: '/img_gallery/gravity_1.png',
                thumbnail: '/img_gallery/gravity_1.png',
                description: 'Setup speed vector'
            },
            {
                original: '/img_gallery/gravity_2.png',
                thumbnail: '/img_gallery/gravity_2.png',
                description: 'Watch movement and vectors change'
            },
            {//     space_invader
                original: '/img_gallery/space_invader1.png',
                thumbnail: '/img_gallery/space_invader1.png',
                description: 'Space invader'
            },
            {
                original: '/img_gallery/space_invader2.png',
                thumbnail: '/img_gallery/space_invader2.png',
                description: 'Game over'
            },
            {//     burger
                original: '/img_gallery/burger1.png',
                thumbnail: '/img_gallery/burger1.png',
                description: 'Build your own burger!'
            },
            {
                original: '/img_gallery/burger2.png',
                thumbnail: '/img_gallery/burger2.png',
                description: 'Login to check your orders'
            },
            {
                original: '/img_gallery/burger3.png',
                thumbnail: '/img_gallery/burger3.png',
                description: 'Orders'
            },
            {
                original: '/img_gallery/burger4.png',
                thumbnail: '/img_gallery/burger4.png',
                description: 'Order modal'
            },
            {//     modern
                original: '/img_gallery/modern1.png',
                thumbnail: '/img_gallery/modern1.png',
                description: 'Contact form'
            },
            {
                original: '/img_gallery/modern2.png',
                thumbnail: '/img_gallery/modern2.png',
                description: 'Home page'
            },
            {
                original: '/img_gallery/modern3.png',
                thumbnail: '/img_gallery/modern3.png',
                description: 'Menu'
            },
            {
                original: '/img_gallery/modern4.png',
                thumbnail: '/img_gallery/modern4.png',
                description: 'Banner'
            },
        ]
        return(
            <div className={classes.gallery + ' page'}>
                <ImageGallery 
                slideInterval={7000}
                items={images}
                showBullets={true}
                showIndex={true}
                showThumnails={true}
                lazyLoad={true}
                showPlayButton={false}
                disableThumbnailScroll={false}
                infinite={true}
                autoPlay={true}
                />
            </div>
        );
    };
}

export default Gallery;