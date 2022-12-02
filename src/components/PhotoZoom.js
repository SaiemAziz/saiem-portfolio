import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {GrRotateRight, GrZoomIn, GrZoomOut} from 'react-icons/gr'
import {RiZoomInFill, RiZoomOutFill} from 'react-icons/ri'
import "react-photo-view/dist/react-photo-view.css";
const PhotoZoom = ({link}) => {
  return (
    <PhotoProvider
    maskOpacity={0.8}
    speed={() => 800}
    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
    toolbarRender={({ onScale, scale, rotate, onRotate }) => {
        return (
          <>
            <p className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)}><RiZoomInFill/></p>
            <p className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)}><RiZoomOutFill/></p>
            <p className="PhotoView-Slider__toolbarIcon" onClick={() => onRotate(rotate + 90)}><GrRotateRight/></p>
          </>
        );
      }}
    >
      <PhotoView src={link}>
        <img className="w-full" src={link} alt="" />
      </PhotoView>
    </PhotoProvider>
  );
};

export default PhotoZoom;
