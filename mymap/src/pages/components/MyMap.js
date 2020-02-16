import React, { Component } from 'react';
import 'cesium/Source/Widgets/widgets.css';
import { Button } from 'antd';
import $ from 'jquery';



class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewer: null
        }
    }


    componentDidMount() {

        this.initComponent();
    }



    async initComponent() {
        let viewer = new window.Cesium.Viewer(this.cesiumContainer);
        this.setState({
            viewer: viewer,
        })
        let scene = viewer.scene;
        let widget = viewer.cesiumWidget;
        //let groundMap = 'http://39.108.163.220/iserver/services/3D-SZS-XY-201811302/rest/realspace';

        let building='http://www.supermapol.com/realspace/services/3D-WebGLCBD/rest/realspace'
        //视频投放
        
        if(!scene.pickPositionSupported) {
            alert('不支持深度纹理,视频投放功能无法使用！');
        };
        //document.getElementById('toolbar').style.display='block';
        $('#toolbar').show();
        console.log('show');
    
        try {
            let promise = scene.open(building);
            window.Cesium.when(promise,function(layers){
                scene.camera.setView({
                    destination: window.Cesium.Cartesian3.fromDegrees(116.4486, 39.9092, 91.3293),
                    orientation: {
                        heading: 3.179304500963121,
                        pitch: -0.46239072362282485,
                        roll: 6.283185307179583
                    }
                });
               // viewer.zoomTo(promise);
                for(var i = 0; i < layers.length; i++) {
                    layers[i].selectEnabled = false;
                   // console.log(layers);
                    
                }
                let videoElement = document.getElementById('trailer');
              // let img='yay.jpg';

                let projectionImage = new window.Cesium.ProjectionImage(scene);
        
                let handler = new window.Cesium.DrawHandler(viewer, window.Cesium.DrawMode.Point);
               // console.log(handler);
                
                handler.movingEvt.addEventListener(function(windowPosition) {
                    console.log('window');                    
                    let last = scene.pickPosition(windowPosition);
                    //计算该点与视口位置点坐标的距离
                    let distance = window.Cesium.Cartesian3.distance(scene.camera.position, last);
                    //console.log(distance);
                    
                    if(distance > 0) {
                        //将鼠标当前点坐标转化成经纬度
                        let cartographic = window.Cesium.Cartographic.fromCartesian(last);
                        let longitude = window.Cesium.Math.toDegrees(cartographic.longitude);
                        let latitude = window.Cesium.Math.toDegrees(cartographic.latitude);
                        let height = cartographic.height;
                        //通过该点设置视频投放对象的距离及方向
                        projectionImage.setDistDirByPoint([longitude, latitude, height]);
                    }
                });
        
                function clearAndActive() {

                    projectionImage.distance = 0.1;
                    var wgsPosition = scene.camera.positionCartographic;
                    var longitude = window.Cesium.Math.toDegrees(wgsPosition.longitude);
                    var latitude = window.Cesium.Math.toDegrees(wgsPosition.latitude);
                    var height = wgsPosition.height;
                    projectionImage.hintLineVisible=false;
                    projectionImage.horizontalFov=20;
                    projectionImage.verticalFov =10;
                    projectionImage.distance=200;
                    projectionImage.viewPosition = [longitude, latitude, height];
                    projectionImage.setImage({
                        video: videoElement,
                    });
                    projectionImage.build();
                }
                $('#active').click(function(evt) {
                    clearAndActive();
                    handler.activate();
                });
                $('#clear').click(function(evt) {
                    clearAndActive();
                    handler.clear();
                });
            })
 

        } catch (e) {
            if (widget._showRenderLoopErrors) {
                let title = '渲染时发生错误，已停止渲染。';
                widget.showErrorPanel(title, undefined, e);
            }
        }

    }

    async onloadModel(viewer) {
        //let viewer=this.state.viewer;
        let scene = viewer.scene;
        let widget = viewer.cesiumWidget;
        let modelData = 'http://39.108.163.220/iserver/services/3D-01-YGDLJ-PC-20190329/rest/realspace';

        //方向键控制相机
        let canvas = viewer.canvas;
        canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
        canvas.onclick = function () {
            canvas.focus();
        };
        let ellipsoid = scene.globe.ellipsoid;
        // let startMousePosition;
        // let mousePosition;
        let flags = {
            looking: false,
            moveForward: false,
            moveBackward: false,
            moveUp: false,
            moveDown: false,
            moveLeft: false,
            moveRight: false
        };
        //判断 按键 值对应的操作
        function getFlagForKeyCode(keyCode) {
            switch (keyCode) {
                case 'W'.charCodeAt(0):
                    return 'moveForward';//前进
                case 'S'.charCodeAt(0):
                    return 'moveBackward';//后退
                case 'Q'.charCodeAt(0):
                    return 'moveUp';//上移
                case 'E'.charCodeAt(0):
                    return 'moveDown';//下移
                case 'D'.charCodeAt(0):
                    return 'moveRight';//右移
                case 'A'.charCodeAt(0):
                    return 'moveLeft';//左移
                default:
                    return undefined;
            }
        }

        //按下
        document.addEventListener('keydown', function (e) {
            let flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== 'undefined') {
                flags[flagName] = true;
            }
        }, false);

        //抬起
        document.addEventListener('keyup', function (e) {
            let flagName = getFlagForKeyCode(e.keyCode);
            if (typeof flagName !== 'undefined') {
                flags[flagName] = false;
            }
        }, false);

        viewer.clock.onTick.addEventListener(function (clock) {
            let camera = viewer.camera;

            // Change movement speed based on the distance of the camera to the surface of the ellipsoid.
            //根据相机到椭圆表面的距离更改移动速度。    
            let cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
            let moveRate = cameraHeight / 100.0;

            if (flags.moveForward) {
                camera.moveForward(moveRate);
            }
            if (flags.moveBackward) {
                camera.moveBackward(moveRate);
            }
            if (flags.moveUp) {
                camera.moveUp(moveRate);
            }
            if (flags.moveDown) {
                camera.moveDown(moveRate);
            }
            if (flags.moveLeft) {
                camera.moveLeft(moveRate);
            }
            if (flags.moveRight) {
                camera.moveRight(moveRate);
            }
        });
        try {

            let promise = scene.open(modelData);
            viewer.zoomTo(promise);

        } catch (e) {
            if (widget._showRenderLoopErrors) {
                let title = '渲染时发生错误，已停止渲染。';
                widget.showErrorPanel(title, undefined, e);
            }
        }

    }



    render() {
        let style={
            backgroundColor: 'rgba(38, 38, 38, 0.75)',
            padding: '20px 20px 10px 20px',
            color: '#ffffff',
            border: '1px solid #526f82',
            position: 'absolute',
            left: '150px',
            top: '200px',
            zIndex: 10000,
        }
        return (
            <div>
                <Button type='default' onClick={this.onloadModel.bind(null, this.state.viewer)}>加载模型</Button>
                <div id='toolbar' style={style}>
                <Button type="default" id="active" >视频投放</Button>
			    <Button type="danger" id="clear" >清除</Button>
			     <video id="trailer" style={{display:'none'}} >
				<source src='video.mp4' type="video/mp4" />
			    </video>                 
                </div>
                <div id="cesiumContainer" className='fullSize' ref={element => this.cesiumContainer = element} ></div>

            </div>
        );
    }
}


export default MyMap;