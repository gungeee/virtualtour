(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "propagateClick": true,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 1_4",
 "id": "panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5F1B04B9_4496_7E77_41BD_92EBECDBEF64",
  "this.overlay_5F176824_4496_F61C_41BF_649A83CDB0B1",
  "this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -52.64,
   "yaw": -133.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D3FE608_449F_BA14_41CB_33186F684026"
  },
  {
   "backwardYaw": -89.93,
   "yaw": 92.33,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -76.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_542FAD41_4633_D895_418A_81C174DF2DB9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_16EC466B_0594_4072_4196_4B2E2E66276D",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55F25881_4633_D995_41B7_5AF601128929_0",
  "this.htmlText_16ED866B_0594_4072_418B_B051F62C6BE2"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window14981"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_6",
 "id": "panorama_6EF40890_7E3A_D529_41D3_0551E674D739",
 "class": "Panorama",
 "overlays": [
  "this.overlay_690435AC_7E49_FF78_41CA_43561615805F",
  "this.overlay_69305175_7E4B_D7E8_41B3_F94F053AE1CC",
  "this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -173.72,
   "yaw": -81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79"
  },
  {
   "backwardYaw": -42.57,
   "yaw": -175.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 86.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54589A3B_4633_D8F6_41C4_3032F3659B0C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 1_2",
 "id": "panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5E29884B_4491_D614_41C0_B5A870F1B37B",
  "this.overlay_59FBACD5_44B6_AE3F_41B7_D42D19EAE60D",
  "this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 136.63,
   "yaw": 37.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D3FE608_449F_BA14_41CB_33186F684026"
  },
  {
   "backwardYaw": -89.84,
   "yaw": 149.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_t.jpg",
 "hfovMax": 115
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_1AC4F128_0B18_FE21_4199_6F6221ACE1D0",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid57DAA910_4633_D8B3_41CE_EDA170B3DE65_0",
  "this.htmlText_1ACAF129_0B18_FE23_418E_F305AE446C2F"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window5766"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_5033B278_40D4_5366_41B8_63BADAEC29F4",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55FF4886_4633_D99F_41B9_25DF5940F6F7_0",
  "this.htmlText_51CDF279_40D4_5366_415C_72AB68452925"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window6337"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 58.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55CDB084_4633_C993_4195_DA86013D1D7B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_3",
 "id": "panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9E2F30F0_8C6E_A93E_41D6_821348E8F0DF",
  "this.overlay_9FC5592A_8C6E_9B23_41CA_9AAF623031C1",
  "this.overlay_9846BA15_8C6D_98E1_41D6_9B9EB1247B5B",
  "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.69,
   "yaw": 97.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C"
  },
  {
   "backwardYaw": -38.02,
   "yaw": 146.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B"
  },
  {
   "backwardYaw": -89.27,
   "yaw": 175.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_6",
 "id": "panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC",
 "class": "Panorama",
 "overlays": [
  "this.overlay_944C5820_8C1B_98DF_41C9_C32A0D2B3A2A",
  "this.overlay_9BB88876_8C17_9923_41DD_0C39DB8F2E1D",
  "this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.24,
   "yaw": 120.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184"
  },
  {
   "backwardYaw": 168.05,
   "yaw": 17.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -1.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_542DC989_4633_DB92_419E_6B7FB48C3861",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -87.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5445AE2E_4633_D8EF_41A1_C89196990A3F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -139.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_547C2DD5_4633_DBB2_41C9_9A96344874D5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "lorong_patung",
 "id": "panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6CA7AD7C_6348_EE84_41D1_FF9306E6837B",
  "this.overlay_736EA9CD_6348_6987_41D7_6D76B327F24B",
  "this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.52,
   "yaw": 89.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E"
  },
  {
   "backwardYaw": -179.9,
   "yaw": 3.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7328B8FF_6348_7783_41D6_6A19F9346647"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 179.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54FC9EC7_4633_D99D_41A7_CD0955BB0CBF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lorong_patung_2",
 "id": "panorama_7328B8FF_6348_7783_41D6_6A19F9346647",
 "class": "Panorama",
 "overlays": [
  "this.overlay_738A11A6_6348_F985_41B4_0EEA0406E1B9",
  "this.panorama_7328B8FF_6348_7783_41D6_6A19F9346647_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.19,
   "yaw": -179.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 1.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5213C0CD_4633_C9AD_41CE_E1C502C019EA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -177.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_555D1FC2_4633_D796_41AB_30BF99B56058",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_7",
 "id": "panorama_8309F509_8C7F_A8E1_41C8_D73396813862",
 "class": "Panorama",
 "overlays": [
  "this.overlay_94C868B3_8C2A_7921_41C0_3797BED42704",
  "this.overlay_969D5CFF_8C2E_7921_41C1_0AA71B176F64",
  "this.overlay_90CA3CC9_8C2A_9961_41C2_79E19EFE1EB3",
  "this.overlay_97E852AB_8C2A_A922_41C5_EDBD1939E628",
  "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.13,
   "yaw": 87.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2"
  },
  {
   "backwardYaw": 135.47,
   "yaw": 48.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F"
  },
  {
   "backwardYaw": 17.07,
   "yaw": 168.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC"
  },
  {
   "backwardYaw": 118.45,
   "yaw": 24.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 127.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_532EA287_4633_C99E_41B3_0AAA742E742F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_485C0D65_4630_589D_41A8_201DAD5B8F21",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55F4787E_4633_D96F_41C7_CFCE603BA3B5_0",
  "this.htmlText_48BA5D8C_4630_5B93_41A6_1315D552DDA4"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window14981"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_533EB272_4633_C977_41A6_4783B2C28FFE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "SAM_100_0093",
 "hfovMin": "135%",
 "id": "panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE",
 "class": "Panorama",
 "overlays": [
  "this.overlay_14A16C0B_05AC_47B3_4185_795297AC511A",
  "this.overlay_14D102BF_05B4_C0D2_417F_E8BB791A5534"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -104.25,
   "yaw": -68.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6"
  },
  {
   "backwardYaw": 33.03,
   "yaw": -121.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_t.jpg",
 "hfovMax": 115
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_1A81811A_0B19_3FE1_419B_EAFE17DB955C",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_1A8E411A_0B19_3E1C_4191_B7AE061FC623"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window7626"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF40890_7E3A_D529_41D3_0551E674D739_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -174.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5415B9A0_4633_DB93_41C7_D7440782B72B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 2.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_544B7E42_4633_D896_41B7_DAB0D0A1743B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -0.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5500ABF2_4633_DF77_41C8_4AD897726D36",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 4.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5258B165_4633_C892_41CB_A942A42FD736",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_4",
 "id": "panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6BCCCE81_7E57_4D28_41D1_10BCA2B0A13D",
  "this.overlay_6BB863FC_7E49_3AD9_4191_7A779E2DE01E",
  "this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_tcap0",
  "this.overlay_1671B7EC_05AB_C075_418E_5943E62C8C6B",
  "this.overlay_16751D30_0594_C1EE_418E_907122F912FE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 72.21,
   "yaw": -162.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79"
  },
  {
   "backwardYaw": -114.18,
   "yaw": 77.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -61.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54552A21_4633_D892_41B0_D0D460A15354",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -43.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54628DF1_4633_DB72_41CF_9486D19178C0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 2.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55F38CBF_4633_D9ED_41C6_C233997FFDCD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -109.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_554ECFD4_4633_D7B3_41A9_0E21EFB1367E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1178DCF3_05EC_4052_4173_DA2CF11F4832_t.jpg",
 "id": "photo_1178DCF3_05EC_4052_4173_DA2CF11F4832",
 "class": "Photo",
 "width": 5504,
 "label": "DSC_0129",
 "image": {
  "levels": [
   {
    "url": "media/photo_1178DCF3_05EC_4052_4173_DA2CF11F4832.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3096
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 51.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54019DA9_4633_DB95_41C8_93DE65F5A92E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 2.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52AAC1BC_4633_CBF3_41C4_1F2D749CF3C2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_2",
 "id": "panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6DA85CFE_7E4B_4ED9_41CD_17DDD105A634",
  "this.overlay_6DB58F0B_7E4E_CB3F_41DE_B428B6A84C2F",
  "this.panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -118.86,
   "yaw": -131.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_t.jpg",
 "hfovMax": 115
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_51107D23_40CC_D6EA_41B5_74C01EAAA9DC_t.jpg",
 "id": "photo_51107D23_40CC_D6EA_41B5_74C01EAAA9DC",
 "class": "Photo",
 "width": 5504,
 "label": "DSC_0172",
 "image": {
  "levels": [
   {
    "url": "media/photo_51107D23_40CC_D6EA_41B5_74C01EAAA9DC.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3096
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 1_5",
 "id": "panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970",
 "class": "Panorama",
 "overlays": [
  "this.overlay_58A01A2B_4491_EA6B_41CB_F2E65A9386B3",
  "this.overlay_584CE68E_448F_BA2C_41CB_805C9612C568",
  "this.panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4"
  },
  {
   "backwardYaw": 92.33,
   "yaw": -89.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 132.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_548AAAC4_4633_D993_41AC_A482BCC2BFBB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -124.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5439BD1C_4633_D8B3_41BD_73CA1408AFF4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -82.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54769DC0_4633_DB93_41C8_118C09EBDAF0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 137.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54ACBA8D_4633_D992_41CC_DAE8D254ACDE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_1973B226_0B3F_0221_419A_D02C7AC98A17",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_19718227_0B3F_022F_41A4_3754EBDFDDDE"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window9366"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 4.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55793F98_4633_D7B3_41CD_FED8BF70A0C8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -118.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5438B964_4633_D893_41C1_4A686D07BB77",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8309F509_8C7F_A8E1_41C8_D73396813862_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -34.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_545EFE1A_4633_D8B7_41BC_F4F3C7F3B38E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -142.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54D6AB1B_4633_D8B6_41AF_D4CEE7EB38C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 17.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55483C63_4633_D895_41CE_9CC1359F166D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -155.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54E20AF7_4633_D97D_41B9_1DEB4ABDCA00",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -59.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5592700E_4633_C8AF_41B9_7552B92A6556",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -179.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5564FC27_4633_D89E_41A0_3B61254A75E2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 10.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55383F3A_4633_D8F6_41B2_3B54C51583E5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -177.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_552F8F4B_4633_D895_41B2_7C2D8CF00CDB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 92.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5482BEA0_4633_D993_41B4_2BC416AEED98",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 145.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52FDB217_4633_C8BE_41C2_3B39EF07F78E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -179.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55117F60_4633_D892_41CB_F1F69FC72216",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket Tengah",
 "id": "panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73",
 "class": "Panorama",
 "overlays": [
  "this.overlay_51A7654E_4497_FE2C_41CE_6E14ACEDDB22",
  "this.panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.86,
   "yaw": 156.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Utama 1",
 "id": "panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797",
 "class": "Panorama",
 "overlays": [
  "this.overlay_535D5B57_448E_6A3B_41BF_627A55BA56E0",
  "this.overlay_764FFEFC_6358_AB84_41BA_79193676F95B",
  "this.overlay_709D08F8_6358_978D_418B_E424D5EA8131",
  "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.63,
   "yaw": 0.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E"
  },
  {
   "backwardYaw": 2.57,
   "yaw": -93.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B"
  },
  {
   "backwardYaw": -3.97,
   "yaw": -179.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_71735390_6358_F99D_41B0_147C94D41C96_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 46.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54D92B3A_4633_D8F6_41CE_42C5A94B1FA8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket Kiri 2",
 "id": "panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_77DECE81_635B_AA7F_41AB_7149469B650B",
  "this.overlay_7769F736_6358_BA84_41C5_6C089E4396E0",
  "this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.85,
   "yaw": 2.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D"
  },
  {
   "backwardYaw": -95.76,
   "yaw": -177.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_t.jpg",
 "hfovMax": 115
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_50A18DDA_40DC_B15B_41BE_AF7B365CD573",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "title": "",
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55FEE886_4633_D99F_41AD_5A727937710B_0",
  "this.htmlText_50A06DDA_40DC_B15B_41C0_13839C45EF7C"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window5407"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -84.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55DA506F_4633_C96D_41C6_4694F906378B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_04A52C53_0B09_0667_4185_65D04B0D5DEC",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid57DDE907_4633_D89E_41C5_1390D544038A_0",
  "this.htmlText_04A28C53_0B09_0667_419B_CFDEAE72E4F2"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window3817"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_2",
 "id": "panorama_9C80B017_8C7A_E8E1_4193_9F564057216C",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9CDB563B_8C7A_E921_41C8_C610B7FC92C1",
  "this.overlay_9D230F39_8C75_F721_41A1_E021A2ED6FBE",
  "this.overlay_9E304429_8C6B_A921_41D6_DECE2785A8CF",
  "this.overlay_983F33A4_8C6B_EF26_41A8_EA036585AFB7",
  "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -128.79,
   "yaw": 179.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E"
  },
  {
   "backwardYaw": 97.19,
   "yaw": 103.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F"
  },
  {
   "backwardYaw": 40.96,
   "yaw": 30.87,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Ketiga_4",
 "id": "panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_932BBC27_878A_EA89_41DF_3EAB3EF75077",
  "this.overlay_93607F0A_878A_E69B_41CC_FF89D316628F",
  "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.09,
   "yaw": -87.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F"
  },
  {
   "backwardYaw": -176.12,
   "yaw": -177.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -176.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55EBB05D_4633_C8B2_41A3_15C1179F048E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 85.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55775F84_4633_D793_41C9_3EB636E4803B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -30.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5486BAB2_4633_D9F7_41CB_1266CE7155A5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -101.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55118BCC_4633_DF93_41B9_8DD71624CB03",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_5",
 "id": "panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6B8F4A62_7E4B_D5E9_41DD_753E3C42C982",
  "this.overlay_6829E1EC_7E49_36F8_41D9_95BF477CE114",
  "this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -162.8,
   "yaw": 72.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C"
  },
  {
   "backwardYaw": -81,
   "yaw": -173.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1",
   "camera": "this.panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6",
   "camera": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676",
   "camera": "this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3",
   "camera": "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F",
   "camera": "this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73",
   "camera": "this.panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D",
   "camera": "this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2",
   "camera": "this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A",
   "camera": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142",
   "camera": "this.panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797",
   "camera": "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E",
   "camera": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B",
   "camera": "this.panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680",
   "camera": "this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5D3FE608_449F_BA14_41CB_33186F684026",
   "camera": "this.panorama_5D3FE608_449F_BA14_41CB_33186F684026_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6",
   "camera": "this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970",
   "camera": "this.panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4",
   "camera": "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4",
   "camera": "this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7328B8FF_6348_7783_41D6_6A19F9346647",
   "camera": "this.panorama_7328B8FF_6348_7783_41D6_6A19F9346647_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_71735390_6358_F99D_41B0_147C94D41C96",
   "camera": "this.panorama_71735390_6358_F99D_41B0_147C94D41C96_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7",
   "camera": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62",
   "camera": "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5",
   "camera": "this.panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12",
   "camera": "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C",
   "camera": "this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79",
   "camera": "this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739",
   "camera": "this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8",
   "camera": "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A",
   "camera": "this.panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7",
   "camera": "this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456",
   "camera": "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188",
   "camera": "this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4",
   "camera": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E",
   "camera": "this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C",
   "camera": "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F",
   "camera": "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B",
   "camera": "this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184",
   "camera": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC",
   "camera": "this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862",
   "camera": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2",
   "camera": "this.panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F",
   "camera": "this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454",
   "camera": "this.panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88",
   "camera": "this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9",
   "camera": "this.panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE",
   "camera": "this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_3",
 "id": "panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6A3B847F_7E5B_5DD8_41AB_BFBCC14A23C3",
  "this.overlay_6B4C1798_7E59_3B59_41C9_5CC1652D890C",
  "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_tcap0",
  "this.overlay_48991DD7_4630_5BBD_41B4_C5BDB4B459C0",
  "this.overlay_4868BD63_4630_D896_41CE_625F5187381D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 77.11,
   "yaw": -114.18,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C"
  },
  {
   "backwardYaw": -34.6,
   "yaw": 2.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Kedua_3",
 "id": "panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_701CAE8C_6348_AB84_418E_FE53D5312DC9",
  "this.overlay_673689C1_7E7E_D728_41DE_193A0A82F501",
  "this.overlay_89E13B16_8775_6E8B_41DF_A3AE4BE6E7EB",
  "this.overlay_AFFCA645_8CEB_A961_41C2_5FF24D35E35F",
  "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -175.13,
   "yaw": -179.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71735390_6358_F99D_41B0_147C94D41C96"
  },
  {
   "backwardYaw": 7.83,
   "yaw": 1.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88"
  },
  {
   "backwardYaw": -24.57,
   "yaw": 55.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7"
  },
  {
   "backwardYaw": -177.85,
   "yaw": -75.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -175.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54CE0F15_4633_D8B2_41C8_0D6108BE4146",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_4",
 "id": "panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_99109508_8C15_E8EF_41E0_75EC25282FDC",
  "this.overlay_999D0B9F_8C16_FFE2_41BC_341987B5E55D",
  "this.overlay_99824821_8C16_9921_41D8_0085C97A813D",
  "this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_tcap0",
  "this.overlay_1B8F09D3_0B1B_0E66_416B_4FB2864F5C58"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.87,
   "yaw": 40.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C"
  },
  {
   "backwardYaw": 146.03,
   "yaw": -38.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_7328B8FF_6348_7783_41D6_6A19F9346647_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -0.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5274510B_4633_C896_418F_69A38FCED14B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 4.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54BF0E57_4633_D8BE_41A6_18EEF12F5A31",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_8",
 "id": "panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_668C8735_7E7B_5B68_41CE_DF34EDD87975",
  "this.overlay_668619C3_7E7A_F72F_41C0_7248CF048B63",
  "this.panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7"
  },
  {
   "backwardYaw": 95.8,
   "yaw": -94.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_t.jpg",
 "hfovMax": 115
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_1AFEFB7B_0B09_0226_4180_E3FEE2CF9A05",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_1AFD3B88_0B09_02E2_4190_6075C57FE584"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window9366"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 93.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54D69EED_4633_D992_41C0_77A7F5CA6FE0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -146.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54DA7F00_4633_D893_41C0_43C3742B7849",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -172.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5248A183_4633_CB95_41CB_3FBDAA9B356F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Ketiga_3",
 "id": "panorama_953B026B_8795_DE99_41DD_0303BBBD0188",
 "class": "Panorama",
 "overlays": [
  "this.overlay_94F49954_878D_2A8F_41CC_CB4C91A20169",
  "this.overlay_93B481A6_878F_5D8B_41DD_24CD8B196634",
  "this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.45,
   "yaw": -176.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4"
  },
  {
   "backwardYaw": -175.15,
   "yaw": 5.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_5",
 "id": "panorama_8302776B_8C7F_9721_41C1_F71A0710F184",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9A46C666_8C1A_A923_41D3_FE449FCD72EB",
  "this.overlay_9B51C6EF_8C1E_A921_41DA_46F9E0E6896E",
  "this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184_tcap0",
  "this.overlay_1BD715FA_0B19_0626_418A_BBC2E29F6B70"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 120.05,
   "yaw": 7.24,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC"
  },
  {
   "backwardYaw": 175.7,
   "yaw": -89.27,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -86.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_523F3090_4633_C9B3_41B9_9F4F63E40512",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 6.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54B8FA7A_4633_D976_41A6_E8F174A81E2D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55BD5C78_4633_D972_41C3_78EF92D06DCA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 3.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54A50E6A_4633_D897_41CD_C036FAA8B27A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Rumah Limas_2",
 "id": "panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_A831782E_8CED_9923_41B3_CFC835938626",
  "this.panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 145.88,
   "yaw": 1.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Utama(Loket Kiri)",
 "id": "panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5DAF4437_44F2_5E7C_4163_9836FCFB6590",
  "this.overlay_77E45FE8_6358_A98C_41D6_50E8EB65B9E6",
  "this.overlay_70706A41_6359_EAFF_41D4_FC0EF8D41184",
  "this.overlay_778FE14A_6359_968C_41CF_E1B039B6FE23",
  "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -111.22,
   "yaw": 61.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142"
  },
  {
   "backwardYaw": -179.81,
   "yaw": -3.97,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797"
  },
  {
   "backwardYaw": 1.4,
   "yaw": 176.49,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F"
  },
  {
   "backwardYaw": -177.71,
   "yaw": -95.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -179.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_544EFA52_4633_D8B6_41D0_F0F67E7BD82C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket Kanan 2",
 "id": "panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_51A0D06B_4496_7614_41B5_9D1559552C06",
  "this.overlay_705FD984_6358_E985_41C1_60FF67F1B8DE",
  "this.overlay_70C9B257_6358_7A84_41D4_1E886A6E4B97",
  "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.48,
   "yaw": -178.66,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676"
  },
  {
   "backwardYaw": 156.56,
   "yaw": -16.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73"
  },
  {
   "backwardYaw": -86.21,
   "yaw": 0.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -102.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_528DA1F9_4633_CB72_41D0_4092E4F336C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1A771FDC_0B19_0262_41A0_738360DCE038_t.jpg",
 "id": "photo_1A771FDC_0B19_0262_41A0_738360DCE038",
 "class": "Photo",
 "width": 3096,
 "label": "DSC_0135",
 "image": {
  "levels": [
   {
    "url": "media/photo_1A771FDC_0B19_0262_41A0_738360DCE038.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 5504
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -90.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54F09AD7_4633_D9BD_41BA_BA9B60009AFB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_9",
 "id": "panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_97C770C5_8C3A_E961_41CD_39AE7DCFF79F",
  "this.overlay_906338FB_8C3E_F921_41D3_14D1149EE01B",
  "this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_tcap0",
  "this.overlay_1A065C4C_0B3F_0662_4191_6549CE9EE368",
  "this.overlay_1ACF7BD1_0B09_0262_4171_581570E318BE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -87.43,
   "yaw": 0.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4"
  },
  {
   "backwardYaw": 48.17,
   "yaw": 135.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -149.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_541DC9B3_4633_DBF5_41A0_5BADEA5D3284",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -177.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54A8CE77_4633_D97E_41C5_FEFDB84DCB3A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -139.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_520330EC_4633_C993_41D0_7A82948085C5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 75.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52EC2235_4633_C8F2_41AC_96E45844CC85",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_11BB4338_0594_C1DE_418F_7B7FE5C9737E_t.jpg",
 "id": "photo_11BB4338_0594_C1DE_418F_7B7FE5C9737E",
 "class": "Photo",
 "width": 5504,
 "label": "DSC_0120",
 "image": {
  "levels": [
   {
    "url": "media/photo_11BB4338_0594_C1DE_418F_7B7FE5C9737E.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3096
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -178.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55B19FE7_4633_D79E_41C6_6B1E542E8F2A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetStereographicFactor": 0,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetHfov": 115,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Kedua_2",
 "id": "panorama_71735390_6358_F99D_41B0_147C94D41C96",
 "class": "Panorama",
 "overlays": [
  "this.overlay_712F2723_6359_BABC_4194_1B7F0669C32E",
  "this.overlay_71BEBEB3_6359_EB83_41B5_18E6C3149370",
  "this.overlay_708F50F5_6348_9787_41BB_EE28C89123B1",
  "this.panorama_71735390_6358_F99D_41B0_147C94D41C96_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.32,
   "yaw": -175.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7"
  },
  {
   "backwardYaw": 78.93,
   "yaw": 70.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62"
  },
  {
   "backwardYaw": 179.46,
   "yaw": 4.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -177.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_553D7B7F_4633_DF6D_41B9_73316FA7A6DC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -179.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5490AAA0_4633_D992_41B8_3AF3E903E9F9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 90.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54138D66_4633_D89F_41CA_798576898689",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Rumah Limas",
 "id": "panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88",
 "class": "Panorama",
 "overlays": [
  "this.overlay_AF1E2AD8_8CEE_B96F_41C2_040A3242C8A1",
  "this.overlay_A88A6E7F_8CEF_9922_41DE_32B7968EA218",
  "this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.68,
   "yaw": 145.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9"
  },
  {
   "backwardYaw": 1.85,
   "yaw": 7.83,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket Kiri 1",
 "id": "panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5295128B_44B2_5A14_41CE_54CC89336BE5",
  "this.overlay_77DCC62B_635B_9A8C_41BC_43BC260116BE",
  "this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.9,
   "yaw": 2.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6"
  },
  {
   "backwardYaw": 2.5,
   "yaw": -177.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Kedua",
 "id": "panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5803F73A_44B2_DA75_41CE_481D4D8A3306",
  "this.overlay_77C1C42A_6348_FE8C_41B3_864E4147533C",
  "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 33.79,
   "yaw": -47.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E"
  },
  {
   "backwardYaw": 4.63,
   "yaw": 179.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71735390_6358_F99D_41B0_147C94D41C96"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_559F4C97_4633_D9BE_41B1_A883DF97EDDF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Ketiga_2",
 "id": "panorama_97315C4A_877E_EA9B_41D5_124B832B2456",
 "class": "Panorama",
 "overlays": [
  "this.overlay_96769971_8775_2A89_41C3_19C143A7E9A0",
  "this.overlay_97813313_8775_5E89_41D8_677CC323BAF0",
  "this.overlay_948D58B8_8795_2B87_41D5_49108FAE51AD",
  "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -17.38,
   "yaw": 93.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E"
  },
  {
   "backwardYaw": 178.42,
   "yaw": 5.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7"
  },
  {
   "backwardYaw": 5.44,
   "yaw": -175.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -178.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55813CAB_4633_D995_41BA_CF5F85A5DC02",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3",
 "id": "panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_0AC2D5DF_059D_C858_418B_728C0C88D33E",
  "this.overlay_0AC2C5DF_059D_C858_4184_8C0433B57527",
  "this.panorama_0AC535DF_059D_C858_4194_E9D604A583A0",
  "this.overlay_05B55875_0B09_0E22_41A2_114A447FAF8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 93.92,
   "yaw": -17.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456"
  },
  {
   "backwardYaw": 179.5,
   "yaw": -128.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 155.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52BB219E_4633_CBAF_41AE_600E6B911BC8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -92.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_529D81DA_4633_CBB7_41BF_68423AC15C4F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_8",
 "id": "panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2",
 "class": "Panorama",
 "overlays": [
  "this.overlay_9162069B_8C2E_E9E1_41A7_1DB603643316",
  "this.overlay_969E0F0A_8C36_B8E2_41D4_1CAF4180C0B9",
  "this.panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4"
  },
  {
   "backwardYaw": 87.03,
   "yaw": 178.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_t.jpg",
 "hfovMax": 115
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_5049CCDF_40DC_7759_41B6_95C6C78899C5_t.jpg",
 "id": "photo_5049CCDF_40DC_7759_41B6_95C6C78899C5",
 "class": "Photo",
 "width": 5504,
 "label": "DSC_0173",
 "image": {
  "levels": [
   {
    "url": "media/photo_5049CCDF_40DC_7759_41B6_95C6C78899C5.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3096
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 3_10",
 "id": "panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454",
 "class": "Panorama",
 "overlays": [
  "this.overlay_90F582ED_8C3A_6921_41D5_8BAB85E96FAF",
  "this.overlay_90B729F3_8C3A_7B21_41CA_360169C1EFB2",
  "this.panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4"
  },
  {
   "backwardYaw": 24.23,
   "yaw": 118.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 48.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_556A0FAD_4633_D792_41B2_6D97E712AD76",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -1.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5477B9DA_4633_DBB6_41C1_517E8E3AF3AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_552C0BAB_4633_DF95_41C4_B0118EF79657",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 1_3",
 "id": "panorama_5D3FE608_449F_BA14_41CB_33186F684026",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5FC022D3_4493_BA34_41CE_ED390C184720",
  "this.overlay_5FF3CBC3_4491_AA14_4175_BD0E531837B9",
  "this.panorama_5D3FE608_449F_BA14_41CB_33186F684026_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 37.46,
   "yaw": 136.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680"
  },
  {
   "backwardYaw": -133.26,
   "yaw": -52.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -11.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54075D90_4633_DBB3_41C6_E02D219F5ECF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -4.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55852022_4633_C897_41B0_4908EF5C6FE3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -174.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54230D2F_4633_D8EE_41C9_A2489A14D0F1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -107.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55F6C033_4633_C8F5_41D0_77308C5D259A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -23.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54E0BED9_4633_D9B2_41C3_CF2DB0768F14",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 84.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5256A148_4633_C892_419A_F1B795121939",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 176.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_549CBE8C_4633_D992_4191_C19E7D92F396",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_11FCD698_0594_40DD_4171_9D9205176024",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55F32882_4633_D997_41B8_FD7A6EDF75CC_0",
  "this.htmlText_11FAE698_0594_40DD_4195_941BBD703DDA"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window17825"
 }
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -177.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52CE4261_4633_C895_41BB_3CE7C5ECE8BF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -146.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_52DFD24E_4633_C8AE_41C7_0436645C40D3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 90.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_53109299_4633_C9B5_41A0_9E42B2CA7139",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 1_1",
 "id": "panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5EC673BC_448E_5A6C_41CC_A049451E2816",
  "this.panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.68,
   "yaw": 2.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -162.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_546ECA07_4633_D89E_41AF_B4C23F4FA99D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Utama(Loket Kanan)",
 "id": "panorama_513F485D_4492_D62C_41C0_7336F9BFE11F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_77E2471A_6359_BA8D_419D_A8C33464B46C",
  "this.overlay_71B2C79C_6358_B984_41B9_336E3B6563AE",
  "this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.67,
   "yaw": -86.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3"
  },
  {
   "backwardYaw": 176.49,
   "yaw": 1.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_t.jpg",
 "hfovMax": 115
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1B1284B5_0B07_0623_4177_B53D89ACE0C1_t.jpg",
 "id": "photo_1B1284B5_0B07_0623_4177_B53D89ACE0C1",
 "class": "Photo",
 "width": 3096,
 "label": "DSC_0132",
 "image": {
  "levels": [
   {
    "url": "media/photo_1B1284B5_0B07_0623_4177_B53D89ACE0C1.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 5504
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -3.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54B2EA66_4633_D89E_41CC_5CA3C90281EF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -172.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_541C4D7C_4633_DB73_41BC_7FFD0220BC67",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gedung Utama",
 "id": "panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1",
 "class": "Panorama",
 "overlays": [
  "this.overlay_4AA7B52F_4477_DE6C_419D_AE8688C4E75E",
  "this.panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.63,
   "yaw": 0.35,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_8302776B_8C7F_9721_41C1_F71A0710F184_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_1",
 "id": "panorama_6EE6D080_7E39_3529_41C4_6896560F5C62",
 "class": "Panorama",
 "overlays": [
  "this.overlay_6C137490_7E39_3D28_41D4_47B1619161CC",
  "this.overlay_6D066B5F_7E49_4BD7_41C8_978E06C0566D",
  "this.overlay_6DF24161_7E49_37EB_41CB_35FA0141C34E",
  "this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -131.82,
   "yaw": -118.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5"
  },
  {
   "backwardYaw": 2.13,
   "yaw": -34.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12"
  },
  {
   "backwardYaw": 70.55,
   "yaw": 78.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_71735390_6358_F99D_41B0_147C94D41C96"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "3 taman",
 "id": "panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5D9494F6_44F6_5FFD_41CB_A649C82644BD",
  "this.panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 61.51,
   "yaw": -111.22,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "SAM_100_0094",
 "hfovMin": "135%",
 "id": "panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_141DBD9A_05B4_40DD_417E_9487C1A78F83"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -121.75,
   "yaw": 33.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -0.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_522E70A5_4633_C992_41A9_A88D1F2CA6D2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Ketiga",
 "id": "panorama_88CE7853_877B_2A89_41D4_02B7A22348B7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_88CC4964_877D_6A8F_4198_96ACB261F965",
  "this.overlay_97D5549B_877F_3BB9_41C3_C805BBA9EC31",
  "this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 55.11,
   "yaw": -24.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7"
  },
  {
   "backwardYaw": 5.19,
   "yaw": 178.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_t.jpg",
 "hfovMax": 115
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket",
 "id": "panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6",
 "class": "Panorama",
 "overlays": [
  "this.overlay_56C8EF3F_4476_AA6B_41B7_21C18D9FF101",
  "this.overlay_501764F9_4492_5FF7_41B2_B4A18F110E25",
  "this.overlay_5048F90E_4493_B62C_41CC_FA0C49F9772F",
  "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_tcap0",
  "this.overlay_15F7AB70_05AC_406E_418D_338C08DB8F67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -68.69,
   "yaw": -104.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE"
  },
  {
   "backwardYaw": -169.07,
   "yaw": 40.58,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676"
  },
  {
   "backwardYaw": 2.5,
   "yaw": -43.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D"
  },
  {
   "backwardYaw": 0.35,
   "yaw": 179.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -178.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55A08FFB_4633_D776_41D0_2A51C8FDEEB1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5D3FE608_449F_BA14_41CB_33186F684026_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Loket Kanan 1",
 "id": "panorama_50415365_4497_DA1F_41C0_0A50A2EE3676",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5059EC4F_4492_6E2B_4115_D06934A86C10",
  "this.overlay_71E9D004_6358_7685_41CB_9CD310029871",
  "this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.66,
   "yaw": -0.48,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3"
  },
  {
   "backwardYaw": 40.58,
   "yaw": -169.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_97315C4A_877E_EA9B_41D5_124B832B2456_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 68.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55AC1C8B_4633_D996_41C1_110D02786407",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 162.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5423C977_4633_DB7D_41D1_750B5954028F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -131.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54F65EB5_4633_D9F2_41B0_B7AB7B6F8398",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 3.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55578C3A_4633_D8F7_41CB_13064F2F158E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 90.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5469AE06_4633_D89F_41BA_AF9E02ABE1CB",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 104.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55031F73_4633_D775_41C2_17EB83D97AEF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Gedung Pameran 2_7",
 "id": "panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8",
 "class": "Panorama",
 "overlays": [
  "this.overlay_69CBB556_7E49_DF28_41D1_D1797E60B9AD",
  "this.overlay_667DE309_7E77_FB38_41DB_A5245FAAFFD1",
  "this.overlay_660B2E7F_7E79_CDD8_41B8_E33153780DC0",
  "this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_tcap0",
  "this.overlay_5133D2F7_40CC_5369_41C6_0510FCFD92C1",
  "this.overlay_53BF6D04_40CC_B6AE_41C0_94000A4039C5",
  "this.overlay_512FCFBA_40CC_D1DB_41C2_6059C9F4406F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -75.96,
   "yaw": -177.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7"
  },
  {
   "backwardYaw": -94.99,
   "yaw": 95.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A"
  },
  {
   "backwardYaw": -175.99,
   "yaw": -42.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 141.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5429AD56_4633_D8BE_41BC_AE2376EE453B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_953B026B_8795_DE99_41DD_0303BBBD0188_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 2.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5267B129_4633_C895_41B1_92BAEAECF999",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 136.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54C82B5F_4633_D8AE_41C0_C561A2A410E4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -33.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5401B9C6_4633_DB9F_41BF_6A7D276C4F5B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 163.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55596C4F_4633_D8AE_41B9_57703A0662FF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": -44.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_547B79ED_4633_DB92_41D0_8076B8BCE1D7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 111.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55344F28_4633_D893_414E_2B4008D67950",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 61.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55736C13_4633_D8B6_41C7_EA77223C5947",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_1196F4F7_0595_C053_4191_ECCAF1667D0C_t.jpg",
 "id": "photo_1196F4F7_0595_C053_4191_ECCAF1667D0C",
 "class": "Photo",
 "width": 5504,
 "label": "DSC_0123",
 "image": {
  "levels": [
   {
    "url": "media/photo_1196F4F7_0595_C053_4191_ECCAF1667D0C.JPG",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 3096
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_10A22332_05EC_41D2_4180_8472176D5799",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55FE7885_4633_D99D_41CC_22A8A4272EF3_0",
  "this.htmlText_10A46332_05EC_41D2_4192_8685EC40DA52"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window21335"
 }
},
{
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "id": "window_480B8CE1_4630_D992_41D0_98EA5C7DC1A3",
 "backgroundOpacity": 1,
 "width": 400,
 "titlePaddingBottom": 5,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "height": 600,
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "headerVerticalAlign": "middle",
 "headerPaddingRight": 10,
 "bodyBackgroundColorDirection": "vertical",
 "title": "",
 "titleFontStyle": "normal",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "shadowBlurRadius": 6,
 "bodyBorderColor": "#000000",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBackgroundColorRatios": [],
 "shadowHorizontalLength": 3,
 "scrollBarOpacity": 0.5,
 "headerPaddingLeft": 10,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "titleTextDecoration": "none",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.image_uid55F51880_4633_D993_41C3_E65AC24BB36A_0",
  "this.htmlText_4871AD13_4630_D8B6_418D_72C1CF509DAD"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "titlePaddingLeft": 5,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonBorderRadius": 11,
 "bodyBorderSize": 0,
 "backgroundColorRatios": [],
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingBottom": 10,
 "titlePaddingTop": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingLeft": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "titleFontFamily": "Arial",
 "shadowSpread": 1,
 "shadowVerticalLength": 0,
 "closeButtonBackgroundColor": [],
 "headerBorderSize": 0,
 "data": {
  "name": "Window17825"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Lorong Utama 2",
 "id": "panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E",
 "class": "Panorama",
 "overlays": [
  "this.overlay_5CE8C38F_4492_DA2B_41B3_3C3A919F8240",
  "this.overlay_5829EE48_44B2_6A15_41CB_C41722DF51F7",
  "this.overlay_6C3214F9_6338_9F8C_41D6_B1837C59636A",
  "this.overlay_70D1FAB7_6347_AB84_41D5_A973D0907EFA",
  "this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.57,
   "yaw": -176.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797"
  },
  {
   "backwardYaw": 149.1,
   "yaw": -89.84,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680"
  },
  {
   "backwardYaw": -47.89,
   "yaw": 33.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4"
  },
  {
   "backwardYaw": 89.25,
   "yaw": 2.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_t.jpg",
 "hfovMax": 115
},
{
 "initialPosition": {
  "hfov": 115,
  "yaw": 65.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_55E63049_4633_C895_41C1_6791B7DA813B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "height": "100%",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#000000",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowVerticalLength": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingLeft": 0,
 "toolTipPaddingBottom": 7,
 "paddingBottom": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "height": "12.832%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- MENU"
 },
 "shadow": false,
 "backgroundImageUrl": "skin/Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7.png"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 641,
 "minWidth": 1,
 "layout": "absolute",
 "class": "Container",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -133.26,
   "hfov": 13.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.19
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D3FE608_449F_BA14_41CB_33186F684026, this.camera_532EA287_4633_C99E_41B3_0AAA742E742F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C19097_44B6_763C_4195_9A843B78DB23",
   "pitch": -5.19,
   "yaw": -133.26,
   "hfov": 13.56,
   "distance": 100
  }
 ],
 "id": "overlay_5F1B04B9_4496_7E77_41BD_92EBECDBEF64",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.33,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970, this.camera_53109299_4633_C9B5_41A0_9E42B2CA7139); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C1B097_44B6_763C_41C0_E67F251AFD44",
   "pitch": -3.44,
   "yaw": 92.33,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_5F176824_4496_F61C_41BF_649A83CDB0B1",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid55F25881_4633_D995_41B7_5AF601128929_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_11BB4338_0594_C1DE_418F_7B7FE5C9737E.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3978"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_16ED866B_0594_4072_418B_B051F62C6BE2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Perwujudan III</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Arca ini digambarkan dalam posisi duduk</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bersila di atas padmasana. Gambaran umum</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">arca ini, yaitu mempunyai sandaran (prabha)</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">yang hanya tinggal sebagian. Tangan kanan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ditekuk di depan dada sambil memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tasbih, sedangkan tangan kiri lurus ke bawah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">memegang kendi. Perhiasan yang digunakan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berupa kelat bahu pada lengan, kalung,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">gelang, tali dada, a Ating-anting dan memakai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kain.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText14982"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81,
   "hfov": 10.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79, this.camera_54B8FA7A_4633_D976_41A6_E8F174A81E2D); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6164B3A0_7E7B_DB69_41D9_3F2D39863BF1",
   "pitch": -20.26,
   "yaw": -81,
   "hfov": 10.88,
   "distance": 100
  }
 ],
 "id": "overlay_690435AC_7E49_FF78_41CA_43561615805F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.99,
   "hfov": 15.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8, this.camera_54ACBA8D_4633_D992_41CC_DAE8D254ACDE); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616723A0_7E7B_DB69_41A6_259D0D7AF276",
   "pitch": -7.42,
   "yaw": -175.99,
   "hfov": 15.52,
   "distance": 100
  }
 ],
 "id": "overlay_69305175_7E4B_D7E8_41B3_F94F053AE1CC",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF40890_7E3A_D529_41D3_0551E674D739_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 37.46,
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D3FE608_449F_BA14_41CB_33186F684026, this.camera_54628DF1_4633_DB72_41CF_9486D19178C0); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C6E096_44B6_763C_41D0_C3587F1B99A1",
   "pitch": -5.08,
   "yaw": 37.46,
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_5E29884B_4491_D614_41C0_B5A870F1B37B",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 149.1,
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E, this.camera_5469AE06_4633_D89F_41BA_AF9E02ABE1CB); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C10096_44B6_763C_41D0_63BFC04654B0",
   "pitch": -4.77,
   "yaw": 149.1,
   "hfov": 12.7,
   "distance": 100
  }
 ],
 "id": "overlay_59FBACD5_44B6_AE3F_41B7_D42D19EAE60D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid57DAA910_4633_D8B3_41CE_EDA170B3DE65_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1A771FDC_0B19_0262_41A0_738360DCE038.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3984"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1ACAF129_0B18_FE23_418E_F305AE446C2F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Bubu Jarang</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan terbuat bambu dan kulit rotan, Disebut</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bubu Jarang karena bllah-bllah dinding bubu</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">disusun agak renggang, Berbentuk silinder, pada</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">salah satu ujung silinder dipasang Injab yaitu</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">susunan bilah bambu berbentuk kerucut yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berfungsi sebagal perangkap, sedangkan ujung</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">yang satunya bisa ditutup dan dibuka, yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berfungsi untuk memasukkan umpan dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mengeluarkan ikan yang terperangkap. Bubu Ini</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">diletakkan di semak belukar pinggir sungal,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mulutnya diarahkan menghadap datangnya arus</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">air sungal. Dalam bubu diber umpan seperti</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kelapa, tempoyak dan lain-lain. Ikan yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tertangkap biasanya Ikan yang relatif besar</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">seperti ikan patin dan Ikan bellda.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText5767"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid55FF4886_4633_D99F_41B9_25DF5940F6F7_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_51107D23_40CC_D6EA_41B5_74C01EAAA9DC.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3982"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_51CDF279_40D4_5366_415C_72AB68452925",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Mata Uang Masa Revolusi Fisik Kemerdekaan</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Setelah Proklamasi Kemerdekaan RI dikumandangkan 17</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Agustus 1945, untuk sementara waktu pemerintah RI</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">memberlakukan tiga jenis mata uang di seluruh wilayah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Republik Indonesia, yaitu: uang De Javasche Bank, uang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pemerintah Hindia Belanda dan uang pendudukan Jepang.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada saat NICA (Nedherlands Indies Civil Administration)</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">masuk ke Indonesia, dikeluarkanlah uang NICA. Uang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Jepang dapat ditukar dengan uang NICA dengan kurs 3</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">persen, artinya setiap rupiah Jepang dapat ditukar 3 sen</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">uang NICA. Pemerintah RI tidak tinggal diam, pada tahun</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">1946 mencetak ORI (Oeang Republik Indonesia). Selain</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mencetak ORI, pemerintah RI juga mencetak URIDA (Uang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Republik Indonesia Daerah). URIDA dikeluarkan oleh</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pemerintah Daerah Tingkat 1 (propinsi), Karesidenan dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Kabupaten atas izin Pemerintah Pusat RI. URIDA</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dikeluarkan dengan tujuan untuk memecahkan dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mengatasi persoalan kekurangan uang tunai di daerah-</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">daerah akibat terputusnya komunikasi normal antara</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pusat dan daerah akibat perang. Meskipun bahan, desain</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dan teknik pencetakan URIDA masih sangat sederhana</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sekali, namun peranannya penting dalam upaya</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mempertahankan kemerdekaan RI.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText6338"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 97.19,
   "hfov": 9.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C, this.camera_542FAD41_4633_D895_418A_81C174DF2DB9); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC585B7B_8C2B_FF21_41B3_5480A6EEC13A",
   "pitch": -13.3,
   "yaw": 97.19,
   "hfov": 9.22,
   "distance": 100
  }
 ],
 "id": "overlay_9E2F30F0_8C6E_A93E_41D6_821348E8F0DF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 146.03,
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.75
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B, this.camera_5429AD56_4633_D8BE_41BC_AE2376EE453B); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC59CB7B_8C2B_FF21_41E0_593F49E910FF",
   "pitch": -15.75,
   "yaw": 146.03,
   "hfov": 9.12,
   "distance": 100
  }
 ],
 "id": "overlay_9FC5592A_8C6E_9B23_41CA_9AAF623031C1",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.7,
   "hfov": 6.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184, this.camera_54138D66_4633_D89F_41CA_798576898689); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC594B7C_8C2B_FF27_41D0_5409B8E1FD87",
   "pitch": -5.01,
   "yaw": 175.7,
   "hfov": 6.17,
   "distance": 100
  }
 ],
 "id": "overlay_9846BA15_8C6D_98E1_41D6_9B9EB1247B5B",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.05,
   "hfov": 10.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8302776B_8C7F_9721_41C1_F71A0710F184, this.camera_541C4D7C_4633_DB73_41BC_7FFD0220BC67); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5CAB7F_8C2B_FF21_41D8_777DDDEA56DC",
   "pitch": -17.41,
   "yaw": 120.05,
   "hfov": 10.89,
   "distance": 100
  }
 ],
 "id": "overlay_944C5820_8C1B_98DF_41C9_C32A0D2B3A2A",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 17.07,
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862, this.camera_54075D90_4633_DBB3_41C6_E02D219F5ECF); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5C2B7F_8C2B_FF21_41D3_D4A83BA3ECCD",
   "pitch": -22.67,
   "yaw": 17.07,
   "hfov": 9.48,
   "distance": 100
  }
 ],
 "id": "overlay_9BB88876_8C17_9923_41DD_0C39DB8F2E1D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.25,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E, this.camera_52CE4261_4633_C895_41BB_3CE7C5ECE8BF); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72C3CBA7_6349_E984_41CE_435B994BBC2F",
   "pitch": -2.89,
   "yaw": 89.25,
   "hfov": 7.3,
   "distance": 100
  }
 ],
 "id": "overlay_6CA7AD7C_6348_EE84_41D1_FF9306E6837B",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.19,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7328B8FF_6348_7783_41D6_6A19F9346647, this.camera_533EB272_4633_C977_41A6_4783B2C28FFE); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72C2BBA8_6349_E98C_41BE_30D6058A9986",
   "pitch": -1.23,
   "yaw": 3.19,
   "hfov": 7.92,
   "distance": 100
  }
 ],
 "id": "overlay_736EA9CD_6348_6987_41D7_6D76B327F24B",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.9,
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4, this.camera_55EBB05D_4633_C8B2_41A3_15C1179F048E); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72C2DBA9_6349_E98C_41C1_78CDAB801658",
   "pitch": -4.62,
   "yaw": -179.9,
   "hfov": 9.48,
   "distance": 100
  }
 ],
 "id": "overlay_738A11A6_6348_F985_41B4_0EEA0406E1B9",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_7328B8FF_6348_7783_41D6_6A19F9346647_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.05,
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.65
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC, this.camera_546ECA07_4633_D89E_41AF_B4C23F4FA99D); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5DBB80_8C2B_FFDF_41DB_292396AD8AF0",
   "pitch": -22.65,
   "yaw": 168.05,
   "hfov": 8.94,
   "distance": 100
  }
 ],
 "id": "overlay_94C868B3_8C2A_7921_41C0_3797BED42704",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.03,
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2, this.camera_5477B9DA_4633_DBB6_41C1_517E8E3AF3AD); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5D2B80_8C2B_FFDF_41D7_52A49EC51213",
   "pitch": -18.9,
   "yaw": 87.03,
   "hfov": 10.36,
   "distance": 100
  }
 ],
 "id": "overlay_969D5CFF_8C2E_7921_41C1_0AA71B176F64",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.17,
   "hfov": 8.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F, this.camera_547B79ED_4633_DB92_41D0_8076B8BCE1D7); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5EAB81_8C2B_FFE1_41C3_BDEE5F07B14A",
   "pitch": -16.06,
   "yaw": 48.17,
   "hfov": 8.69,
   "distance": 100
  }
 ],
 "id": "overlay_90CA3CC9_8C2A_9961_41C2_79E19EFE1EB3",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 24.23,
   "hfov": 7.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454, this.camera_54552A21_4633_D892_41B0_D0D460A15354); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5DBB82_8C2B_FFE3_41D7_188CC94568D7",
   "pitch": -11.62,
   "yaw": 24.23,
   "hfov": 7.24,
   "distance": 100
  }
 ],
 "id": "overlay_97E852AB_8C2A_A922_41C5_EDBD1939E628",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_8309F509_8C7F_A8E1_41C8_D73396813862_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid55F4787E_4633_D96F_41C7_CFCE603BA3B5_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_11BB4338_0594_C1DE_418F_7B7FE5C9737E.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3976"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_48BA5D8C_4630_5B93_41A6_1315D552DDA4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Perwujudan III</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Arca ini digambarkan dalam posisi duduk</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bersila di atas padmasana. Gambaran umum</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">arca ini, yaitu mempunyai sandaran (prabha)</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">yang hanya tinggal sebagian. Tangan kanan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ditekuk di depan dada sambil memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tasbih, sedangkan tangan kiri lurus ke bawah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">memegang kendi. Perhiasan yang digunakan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berupa kelat bahu pada lengan, kalung,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">gelang, tali dada, a Ating-anting dan memakai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kain.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText14982"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -68.69,
   "hfov": 13.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6, this.camera_52EC2235_4633_C8F2_41AC_96E45844CC85); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12916CC3_05B5_C0B2_4185_B672D10F9057",
   "pitch": -2.67,
   "yaw": -68.69,
   "hfov": 13.6,
   "distance": 100
  }
 ],
 "id": "overlay_14A16C0B_05AC_47B3_4185_795297AC511A",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.75,
   "hfov": 9.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6, this.camera_52DFD24E_4633_C8AE_41C7_0436645C40D3); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12918CC3_05B5_C0B2_4193_15DCFBEA32EB",
   "pitch": -0.94,
   "yaw": -121.75,
   "hfov": 9.26,
   "distance": 100
  }
 ],
 "id": "overlay_14D102BF_05B4_C0D2_417F_E8BB791A5534",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1A8E411A_0B19_3E1C_4191_B7AE061FC623",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Kain dan Selendang Pelangi</B></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>1. Kain Pelangi Bintik Tujuh</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan dasar terbuat dari kain sutera. Warna dasarnya ungu</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kebiruan, sedangkan bagian pinggir dan tumpalnya berwarna</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ungu muda. Motif bubur talam dengan isian selang seling,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sebaris bintik tujuh dan sebaris bunga enam kelompok dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">empat kelopak. Warna motifnya hijau, merah jambu dan putih.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada pinggirannya bermotif geometris. Bagian tumpalnya</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bermotif kacang mede dipadu motif bintik-bintik dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">geometris. Fungsi sebagai kain yang dipakai oleh kaum wanita</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pada saat ada acara tertentu.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>2. Kain Pelangi Bintik Tujuh</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan dasar terbuat dari kain sutera. Warna dasar secara</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">keseluruhan adalah ungu terong. Motif bubur talam dengan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">isian selang seling, sebaris bintik tujuh dan sebaris motif</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">cucung. Warna motifnya hijau, merah jambu dan biru. Pada</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pinggirannya bermotif geometris. Bagian tumpalnya bermotif</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kacang mede dipadu motif bintik-bintik dan geometris. Fungsi</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sebagai kain yang dipakai oleh kaum wanita pada saat ada</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">acara tertentu.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>3. Selendang Pelangi Bintik-Bintik</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan dasarnya kain sutera. Warna dasar secara keseluruhan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">biru donker. Bagian tengahnya bermotif bintik-bintik yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">cenderung ke bentuk bulatan, sedangkan bagian pinggirnya</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bermotif bintik-bintik dan lengkungan-lengkungan. Pada kedua</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ujungnya bermotif pucuk rebung dengan isian bintik-bintik.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Selendang ini pemakaiannya dipadukan dengan kainnya yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dipakai oleh kaum wanita pada saat ada acara tertentu.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>4. Selendang Pelangi Kembang Jamur</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan dasarnya kain sutera. Warna dasar secara keseluruhan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">orange. Selendang ini bermotif bubur talam dengan isian</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kembang jamur yang diselingi motif lingkaran isian geometris.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada kedua ujungnya bermotif pucuk rebung dengan isian</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bunga dan susunan kelopak daun. Selendang ini pemakaiannya</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dipadukan dengan kainnya yang dipakai oleh kaum wanita</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pada saat ada acara tertentu.</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText7627"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 77.11,
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12, this.camera_55E63049_4633_C895_41C1_6791B7DA813B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6165639D_7E7B_DB5B_41CA_0E6BA38D42D1",
   "pitch": -15.3,
   "yaw": 77.11,
   "hfov": 10.06,
   "distance": 100
  }
 ],
 "id": "overlay_6BCCCE81_7E57_4D28_41D1_10BCA2B0A13D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -162.8,
   "hfov": 13.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79, this.camera_55F6C033_4633_C8F5_41D0_77308C5D259A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6165C39D_7E7B_DB5B_41D2_71D9B49B9649",
   "pitch": -6.28,
   "yaw": -162.8,
   "hfov": 13.54,
   "distance": 100
  }
 ],
 "id": "overlay_6BB863FC_7E49_3AD9_4191_7A779E2DE01E",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 98.52,
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.67
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_16EC466B_0594_4072_4196_4B2E2E66276D, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1165D63C_05EC_C3D6_415E_36F1A5D67748",
   "pitch": -0.67,
   "yaw": 98.52,
   "hfov": 5.32,
   "distance": 100
  }
 ],
 "id": "overlay_1671B7EC_05AB_C075_418E_5943E62C8C6B",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 148.33,
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.16
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_11FCD698_0594_40DD_4171_9D9205176024, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1165E63C_05EC_C3D6_418A_9D5A0B299E0A",
   "pitch": 2.16,
   "yaw": 148.33,
   "hfov": 5.32,
   "distance": 100
  }
 ],
 "id": "overlay_16751D30_0594_C1EE_418E_907122F912FE",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -131.82,
   "hfov": 11.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.48
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62, this.camera_55736C13_4633_D8B6_41C7_EA77223C5947); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616BD39A_7E7B_DB59_41D9_6BF11B36E1E2",
   "pitch": -17.48,
   "yaw": -131.82,
   "hfov": 11.02,
   "distance": 100
  }
 ],
 "id": "overlay_6DA85CFE_7E4B_4ED9_41CD_17DDD105A634",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.71,
   "hfov": 10.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.9
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616B839B_7E7B_DB5F_41CA_E4EAA27E9262",
   "pitch": -4.9,
   "yaw": 169.71,
   "hfov": 10.72,
   "distance": 100
  }
 ],
 "id": "overlay_6DB58F0B_7E4E_CB3F_41DE_B428B6A84C2F",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.93,
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6, this.camera_5445AE2E_4633_D8EF_41A1_C89196990A3F); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C1D097_44B6_763C_41C8_6C895DF77F64",
   "pitch": -4.11,
   "yaw": -89.93,
   "hfov": 13.58,
   "distance": 100
  }
 ],
 "id": "overlay_58A01A2B_4491_EA6B_41CB_F2E65A9386B3",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -152.96,
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.21
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C1E097_44B6_763C_41CE_E897F0DA7B46",
   "pitch": -4.21,
   "yaw": -152.96,
   "hfov": 9.23,
   "distance": 100
  }
 ],
 "id": "overlay_584CE68E_448F_BA2C_41CB_805C9612C568",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_19718227_0B3F_022F_41A4_3754EBDFDDDE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Baju Pengantin</B></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>1. Jubah Pengantin Pak Sangkong </B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan terbuat dari bludru, bagian dalamnya dilapisi kain katun, warna merah. Bagian luarnya bertabur lempengan kuningan motif bunga. Pada bagian kerah, ujung lengah dan bagian tepi depan dihiasi kuningan separo bulatan yang antara satu dengan yang lain dihubungan dengan benang merah. Fungsi sebagai jubah pengantin laki-laki Aesan Pak Sangkong Palembang.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>2. Baju Kurung Pak Sangkong</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan terbuat dari bludru, bagian dalamnya dilapisi kain katun, warna merah. Bagian luarnya bertabur lempengan kuningan motif bunga. Pada bagian depan mulai dari pinggang sampai ke ujung bawah, ujung lengan dan bagian bawah dihiasi kuningan separo bulatan yang antara satu dengan yang lain dihubungan dengan benang merah. Fungsi sebagai baju pengantin perempuan Aesan Pak Sangkong Palembang.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>3. Jubah Pengantin OKI</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan terbuat dari bludru warna merah, yang bagian dalamnya dilapisi kain katun. Motif bubur talam dengan isian motif bunga berwarna biru, hijau, kuning dan merah jambu, yang terbuat dari benang emas dan benang nilon. Pada keempat sudut motif bubur talamnya terdapat motif bunga. Pada bagian kerah, ujung lengan dan bagian tepi depannya ditaburi dua baris lempengan kuningan. Fungsi sebagai jubah pengantin laki-laki daerah Ogan Komering Ilir (OKI).</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>4. Baju Kurung Pengantin OKI</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan terbuat dari bludru warna merah, yang bagian dalamnya dilapisi kain katun. Motif bubur talam dengan isian motif bunga berwarna biru, hijau, kuning dan merah jambu, yang terbuat dari benang emas dan benang nilon. Pada keempat sudut motif bubur talamnya terdapat motif bunga. Pada bagian kerah sampai ke dada dan ujung lengan ditaburi tiga baris lempengan kuningan. Fungsi sebagai baju pengantin pengantin daerah Ogan Komering Ilir (OKI).</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9367"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 156.56,
   "hfov": 12.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.47
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3, this.camera_55596C4F_4633_D8AE_41B9_57703A0662FF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D614419_44B2_5E34_4181_E0E79E57E51C",
   "pitch": -15.47,
   "yaw": 156.56,
   "hfov": 12.05,
   "distance": 100
  }
 ],
 "id": "overlay_51A7654E_4497_FE2C_41CE_6E14ACEDDB22",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.68,
   "hfov": 14.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B, this.camera_54A8CE77_4633_D97E_41C5_FEFDB84DCB3A); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EAF6B3C_4496_EA6C_41C3_07AC601A8DDD",
   "pitch": -7.62,
   "yaw": -93.68,
   "hfov": 14.42,
   "distance": 100
  }
 ],
 "id": "overlay_535D5B57_448E_6A3B_41BF_627A55BA56E0",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.81,
   "hfov": 7.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A, this.camera_549CBE8C_4633_D992_4191_C19E7D92F396); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B364895_6378_9784_41C0_DF22CD795329",
   "pitch": -6.04,
   "yaw": -179.81,
   "hfov": 7.13,
   "distance": 100
  }
 ],
 "id": "overlay_764FFEFC_6358_AB84_41BA_79193676F95B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.57,
   "hfov": 9.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.91
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E, this.camera_54A50E6A_4633_D897_41CD_C036FAA8B27A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B37F895_6378_9784_41CB_5C02BF81E3B7",
   "pitch": -11.91,
   "yaw": 0.57,
   "hfov": 9.97,
   "distance": 100
  }
 ],
 "id": "overlay_709D08F8_6358_978D_418B_E424D5EA8131",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.5,
   "hfov": 7.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D, this.camera_5267B129_4633_C895_41B1_92BAEAECF999); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6DF7D797_6364_333B_41C1_CF8C8B725256",
   "pitch": -7.71,
   "yaw": 2.5,
   "hfov": 7.96,
   "distance": 100
  }
 ],
 "id": "overlay_77DECE81_635B_AA7F_41AB_7149469B650B",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.71,
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A, this.camera_5256A148_4633_C892_419A_F1B795121939); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B307893_6378_979C_4198_ECA58F859B13",
   "pitch": -13.87,
   "yaw": -177.71,
   "hfov": 10.81,
   "distance": 100
  }
 ],
 "id": "overlay_7769F736_6358_BA84_41C5_6C089E4396E0",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid55FEE886_4633_D99F_41AD_5A727937710B_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_5049CCDF_40DC_7759_41B6_95C6C78899C5.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3981"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_50A06DDA_40DC_B15B_41C0_13839C45EF7C",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Mata Uang Kolonial Belanda</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada tahun 1602, Belanda mendirikan VOC (Verenigde Oost</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Indishe Compagnie), merupakan kongsi-kongsi dagang Belanda</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">yang berusaha menjalankan politik monopoli rempah-rempah.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Untuk melaksanakan tujuan ini, salah satu caranya adalah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mencetak dan mengedarkan mata uang di wilayah Indonesia.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada masa kejayaan Voc, telah beredar berbagai jenis mata</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">uang antara lain: Rijksdaalder, Dukat, Stuiver, Gulden, Douwit</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dan Pitis. Bahannya terbuat dari berbagai jenis logam, seperti</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">emas, tembaga, perak dan timah. Bentuk uang tersebut</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bermacam-macam, seperti empat persegi panjang pipih dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bulat pipih. Mata uang VOC ada yang dicetak di Belanda dan ada</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">yang dicetak di Batavia. Mata uang yang dicetak di Batavia,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ditandai dengan tulisan Arab yang berbunyi: ILA JIRAT AL-KABIR.</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText5408"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid57DDE907_4633_D89E_41C5_1390D544038A_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1B1284B5_0B07_0623_4177_B53D89ACE0C1.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3983"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_04A28C53_0B09_0667_419B_CFDEAE72E4F2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Kukuran Kelapa</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Kukuran kelapa berfungsi sebagai parutan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kelapa, namun hasil parutannya agak kasar.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada zaman dahulu belum ada mesin parut</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kelapa, sedangkan parutan kelapa secara</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">manual kelapanya harus dikupas terlebih</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dahulu. Dengan alat kukuran ini, kelapa yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">akan diparut tidak perlu dikupas hanya</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dibelah langsung diparut. Kukuran terbuat</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dari logam besi, sedangkan gagangnya terbuat</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dari kayu. Pada ujung dan badan gagang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dihiasi ukiran motif \"matahari\u201d, dengan isian</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">dalamnya berupa ukiran motif bunga delapan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kelopak. Pada lehernya diukir motif sulur dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">geometris. Ukiran tersebut dicat warna</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">merah, hijau dan kuning. Fungsi sebagai alat</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">untuk memarut kelapa.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3818"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.5,
   "hfov": 6.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E, this.camera_54019DA9_4633_DB95_41C8_93DE65F5A92E); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC567B79_8C2B_FF21_41D8_AD17F672E4CC",
   "pitch": -4.82,
   "yaw": 179.5,
   "hfov": 6.72,
   "distance": 100
  }
 ],
 "id": "overlay_9CDB563B_8C7A_E921_41C8_C610B7FC92C1",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.69,
   "hfov": 8.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.57
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F, this.camera_54769DC0_4633_DB93_41C8_118C09EBDAF0); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC57EB7A_8C2B_FF23_41D2_C154FDDF932D",
   "pitch": -15.57,
   "yaw": 103.69,
   "hfov": 8.08,
   "distance": 100
  }
 ],
 "id": "overlay_9D230F39_8C75_F721_41A1_E021A2ED6FBE",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.87,
   "hfov": 9.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B, this.camera_547C2DD5_4633_DBB2_41C9_9A96344874D5); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC576B7A_8C2B_FF23_41B0_BBDC750AA957",
   "pitch": -20.3,
   "yaw": 30.87,
   "hfov": 9.72,
   "distance": 100
  }
 ],
 "id": "overlay_9E304429_8C6B_A921_41D6_DECE2785A8CF",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 42.48,
   "hfov": 6.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.1
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC58DB7A_8C2B_FF23_417A_93C75A6F9C95",
   "pitch": -2.1,
   "yaw": 42.48,
   "hfov": 6.97,
   "distance": 100
  }
 ],
 "id": "overlay_983F33A4_8C6B_EF26_41A8_EA036585AFB7",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.45,
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188, this.camera_55578C3A_4633_D8F7_41CB_13064F2F158E); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AF8947E1_8C16_7721_41BC_BDD830E6ABBC",
   "pitch": -5.89,
   "yaw": -177.45,
   "hfov": 4.83,
   "distance": 100
  }
 ],
 "id": "overlay_932BBC27_878A_EA89_41DF_3EAB3EF75077",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.43,
   "hfov": 15.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F, this.camera_5564FC27_4633_D89E_41A0_3B61254A75E2); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_907FA086_87B5_5B8B_41CF_E487408525BE",
   "pitch": -8.34,
   "yaw": -87.43,
   "hfov": 15.09,
   "distance": 100
  }
 ],
 "id": "overlay_93607F0A_878A_E69B_41CC_FF89D316628F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 72.21,
   "hfov": 15.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C, this.camera_55483C63_4633_D895_41CE_9CC1359F166D); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6164439E_7E7B_DB59_41D1_3832328E84AB",
   "pitch": -6.85,
   "yaw": 72.21,
   "hfov": 15.32,
   "distance": 100
  }
 ],
 "id": "overlay_6B8F4A62_7E4B_D5E9_41DD_753E3C42C982",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.72,
   "hfov": 13.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739, this.camera_55BD5C78_4633_D972_41C3_78EF92D06DCA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6164239F_7E7B_DB57_41CE_D0F665496FB0",
   "pitch": -19.17,
   "yaw": -173.72,
   "hfov": 13.75,
   "distance": 100
  }
 ],
 "id": "overlay_6829E1EC_7E49_36F8_41D9_95BF477CE114",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.13,
   "hfov": 16.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62, this.camera_52FDB217_4633_C8BE_41C2_3B39EF07F78E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616A639B_7E7B_DB5F_41B6_BE0471133BA0",
   "pitch": -3.5,
   "yaw": 2.13,
   "hfov": 16.09,
   "distance": 100
  }
 ],
 "id": "overlay_6A3B847F_7E5B_5DD8_41AB_BFBCC14A23C3",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -114.18,
   "hfov": 10.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C, this.camera_528DA1F9_4633_CB72_41D0_4092E4F336C3); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616AF39C_7E7B_DB59_41CB_C539F0BEDA8C",
   "pitch": -16.06,
   "yaw": -114.18,
   "hfov": 10.55,
   "distance": 100
  }
 ],
 "id": "overlay_6B4C1798_7E59_3B59_41C9_5CC1652D890C",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 151.35,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.55
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_485C0D65_4630_589D_41A8_201DAD5B8F21, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5718A2C8_4630_4992_41AD_EFBA4E62AAA4",
   "pitch": -6.55,
   "yaw": 151.35,
   "hfov": 7.1,
   "distance": 100
  }
 ],
 "id": "overlay_48991DD7_4630_5BBD_41B4_C5BDB4B459C0",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -154.04,
   "hfov": 6.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.45
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_480B8CE1_4630_D992_41D0_98EA5C7DC1A3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_571DB2CD_4630_4992_41A0_826C444A2124",
   "pitch": 2.45,
   "yaw": -154.04,
   "hfov": 6.64,
   "distance": 100
  }
 ],
 "id": "overlay_4868BD63_4630_D896_41CE_625F5187381D",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.32,
   "hfov": 5.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71735390_6358_F99D_41B0_147C94D41C96, this.camera_5258B165_4633_C892_41CB_A942A42FD736); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B29789B_6378_978C_41B9_C05440D82B38",
   "pitch": -5.41,
   "yaw": -179.32,
   "hfov": 5.08,
   "distance": 100
  }
 ],
 "id": "overlay_701CAE8C_6348_AB84_418E_FE53D5312DC9",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -75.96,
   "hfov": 14.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8, this.camera_52AAC1BC_4633_CBF3_41C4_1F2D749CF3C2); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61698398_7E7B_DB59_41DC_9218C3C90BD0",
   "pitch": -11.87,
   "yaw": -75.96,
   "hfov": 14.13,
   "distance": 100
  }
 ],
 "id": "overlay_673689C1_7E7E_D728_41DE_193A0A82F501",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 55.11,
   "hfov": 9.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7, this.camera_52BB219E_4633_CBAF_41AE_600E6B911BC8); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94BD9CE5_878B_2B88_4195_DBD302AD7778",
   "pitch": -10.14,
   "yaw": 55.11,
   "hfov": 9.11,
   "distance": 100
  }
 ],
 "id": "overlay_89E13B16_8775_6E8B_41DF_A3AE4BE6E7EB",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.85,
   "hfov": 7.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88, this.camera_5248A183_4633_CB95_41CB_3FBDAA9B356F); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A052DF4A_8CF6_B763_41E0_4D3EC616BAD7",
   "pitch": -3.53,
   "yaw": 1.85,
   "hfov": 7.8,
   "distance": 100
  }
 ],
 "id": "overlay_AFFCA645_8CEB_A961_41C2_5FF24D35E35F",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -38.02,
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F, this.camera_5401B9C6_4633_DB9F_41BF_6A7D276C4F5B); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5ACB7C_8C2B_FF27_41DA_BBA05B1B6B9B",
   "pitch": -15.93,
   "yaw": -38.02,
   "hfov": 8.74,
   "distance": 100
  }
 ],
 "id": "overlay_99109508_8C15_E8EF_41E0_75EC25282FDC",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.96,
   "hfov": 8.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C, this.camera_541DC9B3_4633_DBF5_41A0_5BADEA5D3284); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5ABB7D_8C2B_FF21_415E_76FBD909DE3A",
   "pitch": -18.85,
   "yaw": 40.96,
   "hfov": 8.6,
   "distance": 100
  }
 ],
 "id": "overlay_999D0B9F_8C16_FFE2_41BC_341987B5E55D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -123.77,
   "hfov": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.33
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5BCB7D_8C2B_FF21_41CF_F75C63F3F391",
   "pitch": -6.33,
   "yaw": -123.77,
   "hfov": 9.2,
   "distance": 100
  }
 ],
 "id": "overlay_99824821_8C16_9921_41D8_0085C97A813D",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.44,
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.59
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1AC4F128_0B18_FE21_4199_6F6221ACE1D0, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FDF32FD_0B19_0222_418F_B2B46E7501CC",
   "pitch": -2.59,
   "yaw": 101.44,
   "hfov": 4.87,
   "distance": 100
  }
 ],
 "id": "overlay_1B8F09D3_0B1B_0E66_416B_4FB2864F5C58",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.99,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.82
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8, this.camera_55DA506F_4633_C96D_41C6_4694F906378B); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616143A3_7E7B_DB68_41A3_B077FE5F22A9",
   "pitch": -26.82,
   "yaw": -94.99,
   "hfov": 11.16,
   "distance": 100
  }
 ],
 "id": "overlay_668C8735_7E7B_5B68_41CE_DF34EDD87975",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.99,
   "hfov": 9.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.73
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6161D3A4_7E7B_DB68_41DB_D7D5DA6599C8",
   "pitch": -5.73,
   "yaw": -155.99,
   "hfov": 9.21,
   "distance": 100
  }
 ],
 "id": "overlay_668619C3_7E7A_F72F_41C0_7248CF048B63",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_1AFD3B88_0B09_02E2_4190_6075C57FE584",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Baju Kurung Songket</B></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bahan dasar katun dan benang emas. Warna dasarnya merah hati. </SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Bermotif bubur talam yang sudah digayakan, dengan isian bunga empat kelopak. Pada keempat sudutnya terdapat motif bunga bintang. Fungsi sebagai baju wanita yang dipakai saat ada acara tertentu</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9367"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.44,
   "hfov": 11.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456, this.camera_54BF0E57_4633_D8BE_41A6_18EEF12F5A31); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_907D0085_87B5_5B89_41B9_04F97394BB89",
   "pitch": -16.34,
   "yaw": 5.44,
   "hfov": 11.73,
   "distance": 100
  }
 ],
 "id": "overlay_94F49954_878D_2A8F_41CC_CB4C91A20169",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.12,
   "hfov": 5.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.8
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4, this.camera_544B7E42_4633_D896_41B7_DAB0D0A1743B); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_9F088D23_87BB_2A89_41DE_6AF49402D408",
   "pitch": -4.8,
   "yaw": -176.12,
   "hfov": 5.25,
   "distance": 100
  }
 ],
 "id": "overlay_93B481A6_878F_5D8B_41DD_24CD8B196634",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_953B026B_8795_DE99_41DD_0303BBBD0188_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.27,
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.6
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F, this.camera_55852022_4633_C897_41B0_4908EF5C6FE3); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5BBB7E_8C2B_FF23_41C9_32A982362FCF",
   "pitch": -5.6,
   "yaw": -89.27,
   "hfov": 12.45,
   "distance": 100
  }
 ],
 "id": "overlay_9A46C666_8C1A_A923_41D3_FE449FCD72EB",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.24,
   "hfov": 9.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC, this.camera_5592700E_4633_C8AF_41B9_7552B92A6556); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5B1B7E_8C2B_FF23_41C5_FF652D591EF4",
   "pitch": -16.04,
   "yaw": 7.24,
   "hfov": 9.96,
   "distance": 100
  }
 ],
 "id": "overlay_9B51C6EF_8C1E_A921_41DA_46F9E0E6896E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_8302776B_8C7F_9721_41C1_F71A0710F184_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 121.55,
   "hfov": 6.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.48
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1A81811A_0B19_3FE1_419B_EAFE17DB955C, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FDDD2FF_0B19_021E_41A3_9532FBD92664",
   "pitch": -20.48,
   "yaw": 121.55,
   "hfov": 6.25,
   "distance": 100
  }
 ],
 "id": "overlay_1BD715FA_0B19_0626_418A_BBC2E29F6B70",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.68,
   "hfov": 7.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.24
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88, this.camera_545EFE1A_4633_D8B7_41BC_F4F3C7F3B38E); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A06D8F7A_8CF6_B722_41D2_B8B219BAD8F6",
   "pitch": -0.24,
   "yaw": 1.68,
   "hfov": 7.9,
   "distance": 100
  }
 ],
 "id": "overlay_A831782E_8CED_9923_41B3_CFC835938626",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 61.51,
   "hfov": 11.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142, this.camera_55AC1C8B_4633_D996_41C1_110D02786407); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59FD2D03_44F6_EE14_41BA_B9122DED84CA",
   "pitch": -5.39,
   "yaw": 61.51,
   "hfov": 11.91,
   "distance": 100
  }
 ],
 "id": "overlay_5DAF4437_44F2_5E7C_4163_9836FCFB6590",
 "data": {
  "label": "Circle Point 01a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -95.76,
   "hfov": 10.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.83
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2, this.camera_55F38CBF_4633_D9ED_41C6_C233997FFDCD); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B31C894_6378_9784_41C9_18A6821FC333",
   "pitch": -10.83,
   "yaw": -95.76,
   "hfov": 10.2,
   "distance": 100
  }
 ],
 "id": "overlay_77E45FE8_6358_A98C_41D6_50E8EB65B9E6",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 176.49,
   "hfov": 8.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.52
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F, this.camera_55813CAB_4633_D995_41BA_CF5F85A5DC02); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B318894_6378_9784_41D7_C0F95C77F43A",
   "pitch": -12.52,
   "yaw": 176.49,
   "hfov": 8.95,
   "distance": 100
  }
 ],
 "id": "overlay_70706A41_6359_EAFF_41D4_FC0EF8D41184",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.97,
   "hfov": 6.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.41
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797, this.camera_559F4C97_4633_D9BE_41B1_A883DF97EDDF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7729D227_6768_4760_41BD_CEEFE5345273",
   "pitch": -5.41,
   "yaw": -3.97,
   "hfov": 6.75,
   "distance": 100
  }
 ],
 "id": "overlay_778FE14A_6359_968C_41CF_E1B039B6FE23",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_1_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -16.86,
   "hfov": 13.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.26
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73, this.camera_54E0BED9_4633_D9B2_41C3_CF2DB0768F14); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D61A419_44B2_5E34_41B9_BC08BFAD21A4",
   "pitch": -10.26,
   "yaw": -16.86,
   "hfov": 13.67,
   "distance": 100
  }
 ],
 "id": "overlay_51A0D06B_4496_7614_41B5_9D1559552C06",
 "data": {
  "label": "Circle Point 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -178.66,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676, this.camera_54FC9EC7_4633_D99D_41A7_CD0955BB0CBF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B32C88C_6378_9785_41D8_A4285ADF75C4",
   "pitch": -12.78,
   "yaw": -178.66,
   "hfov": 9.03,
   "distance": 100
  }
 ],
 "id": "overlay_705FD984_6358_E985_41C1_60FF67F1B8DE",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.67,
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_513F485D_4492_D62C_41C0_7336F9BFE11F, this.camera_54D69EED_4633_D992_41C0_77A7F5CA6FE0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BCE017D_6768_45E0_41D3_80C63694DAED",
   "pitch": -7.72,
   "yaw": 0.67,
   "hfov": 9.15,
   "distance": 100
  }
 ],
 "id": "overlay_70C9B257_6358_7A84_41D4_1E886A6E4B97",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 135.47,
   "hfov": 10.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862, this.camera_54F65EB5_4633_D9F2_41B0_B7AB7B6F8398); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5E3B83_8C2B_FFE1_41D2_AF806EB2E75C",
   "pitch": -16.58,
   "yaw": 135.47,
   "hfov": 10.85,
   "distance": 100
  }
 ],
 "id": "overlay_97C770C5_8C3A_E961_41CD_39AE7DCFF79F",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.09,
   "hfov": 11.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4, this.camera_5482BEA0_4633_D993_41B4_2BC416AEED98); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5FBB83_8C2B_FFE0_41BC_DBE8EC55B240",
   "pitch": -5,
   "yaw": 0.09,
   "hfov": 11.15,
   "distance": 100
  }
 ],
 "id": "overlay_906338FB_8C3E_F921_41D3_14D1149EE01B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.78,
   "hfov": 7.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.09
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1973B226_0B3F_0221_419A_D02C7AC98A17, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FC6C309_0B19_03E2_419D_069C64226A35",
   "pitch": -26.09,
   "yaw": -87.78,
   "hfov": 7.99,
   "distance": 100
  }
 ],
 "id": "overlay_1A065C4C_0B3F_0662_4191_6549CE9EE368",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.59,
   "hfov": 8.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.7
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_1AFEFB7B_0B09_0226_4180_E3FEE2CF9A05, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FC63309_0B19_03E2_4176_66886A74E928",
   "pitch": -25.7,
   "yaw": 88.59,
   "hfov": 8.02,
   "distance": 100
  }
 ],
 "id": "overlay_1ACF7BD1_0B09_0262_4171_581570E318BE",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "backgroundOpacity": 0,
 "maxHeight": 37,
 "right": 30,
 "width": 49,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 8,
 "height": 37,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 70.55,
   "hfov": 17.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EE6D080_7E39_3529_41C4_6896560F5C62, this.camera_55118BCC_4633_DF93_41B9_8DD71624CB03); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_775250F2_6358_B79D_41BC_7B3140BEDEEE",
   "pitch": -10.7,
   "yaw": 70.55,
   "hfov": 17.35,
   "distance": 100
  }
 ],
 "id": "overlay_712F2723_6359_BABC_4194_1B7F0669C32E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.63,
   "hfov": 11.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4, this.camera_5500ABF2_4633_DF77_41C8_4AD897726D36); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B28389B_6378_978C_41D0_22CA3633FCD2",
   "pitch": -18.45,
   "yaw": 4.63,
   "hfov": 11.86,
   "distance": 100
  }
 ],
 "id": "overlay_71BEBEB3_6359_EB83_41B5_18E6C3149370",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.13,
   "hfov": 6.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7, this.camera_552C0BAB_4633_DF95_41C4_B0118EF79657); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B29A89B_6378_978C_41AA_D052DD491862",
   "pitch": -5.28,
   "yaw": -175.13,
   "hfov": 6.02,
   "distance": 100
  }
 ],
 "id": "overlay_708F50F5_6348_9787_41BB_EE28C89123B1",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_71735390_6358_F99D_41B0_147C94D41C96_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 145.88,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.92
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9, this.camera_55B19FE7_4633_D79E_41C6_6B1E542E8F2A); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A06F1F74_8CF6_B727_41DA_34AB3156E27C",
   "pitch": -2.92,
   "yaw": 145.88,
   "hfov": 9.25,
   "distance": 100
  }
 ],
 "id": "overlay_AF1E2AD8_8CEE_B96F_41C2_040A3242C8A1",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.83,
   "hfov": 7.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.11
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7, this.camera_55A08FFB_4633_D776_41D0_2A51C8FDEEB1); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_A06FEF7A_8CF6_B722_41C0_7F92A06056C6",
   "pitch": -1.11,
   "yaw": 7.83,
   "hfov": 7.1,
   "distance": 100
  }
 ],
 "id": "overlay_A88A6E7F_8CEF_9922_41DE_32B7968EA218",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.5,
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6, this.camera_54C82B5F_4633_D8AE_41C0_C561A2A410E4); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D6E941A_44B2_5E34_41CC_A62650EBD39E",
   "pitch": -3.68,
   "yaw": 2.5,
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_5295128B_44B2_5A14_41CE_54CC89336BE5",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.85,
   "hfov": 6.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2, this.camera_553D7B7F_4633_DF6D_41B9_73316FA7A6DC); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6DF7B796_6364_333D_417F_B355C3F33988",
   "pitch": -9.34,
   "yaw": -177.85,
   "hfov": 6.58,
   "distance": 100
  }
 ],
 "id": "overlay_77DCC62B_635B_9A8C_41BC_43BC260116BE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -47.89,
   "hfov": 9.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E, this.camera_54DA7F00_4633_D893_41C0_43C3742B7849); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C00098_44B6_7634_41C8_27D80270AD54",
   "pitch": 0.72,
   "yaw": -47.89,
   "hfov": 9.26,
   "distance": 100
  }
 ],
 "id": "overlay_5803F73A_44B2_DA75_41CE_481D4D8A3306",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.46,
   "hfov": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71735390_6358_F99D_41B0_147C94D41C96, this.camera_54CE0F15_4633_D8B2_41C8_0D6108BE4146); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B2B8899_6378_978C_41D5_C91A587718ED",
   "pitch": -20.22,
   "yaw": 179.46,
   "hfov": 10.37,
   "distance": 100
  }
 ],
 "id": "overlay_77C1C42A_6348_FE8C_41B3_864E4147533C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.19,
   "hfov": 15.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.75
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_88CE7853_877B_2A89_41D4_02B7A22348B7, this.camera_542DC989_4633_DB92_419E_6B7FB48C3861); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94C52CEE_878B_2B9B_41DE_153F2BC501B3",
   "pitch": -21.75,
   "yaw": 5.19,
   "hfov": 15.52,
   "distance": 100
  }
 ],
 "id": "overlay_96769971_8775_2A89_41C3_19C143A7E9A0",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 93.92,
   "hfov": 19.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.32
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E, this.camera_5423C977_4633_DB7D_41D1_750B5954028F); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94C59CEE_878B_2B9B_41C4_ABE26D4DE22F",
   "pitch": -9.32,
   "yaw": 93.92,
   "hfov": 19.41,
   "distance": 100
  }
 ],
 "id": "overlay_97813313_8775_5E89_41D8_677CC323BAF0",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -175.15,
   "hfov": 11.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_953B026B_8795_DE99_41DD_0303BBBD0188, this.camera_5415B9A0_4633_DB93_41C7_D7440782B72B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_907D9085_87B5_5B89_41D0_40685D4622E3",
   "pitch": -20.88,
   "yaw": -175.15,
   "hfov": 11.35,
   "distance": 100
  }
 ],
 "id": "overlay_948D58B8_8795_2B87_41D5_49108FAE51AD",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_97315C4A_877E_EA9B_41D5_124B832B2456_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -17.38,
   "hfov": 7.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456, this.camera_523F3090_4633_C9B3_41B9_9F4F63E40512); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_128E4CAC_05B5_C0F6_418E_8B98B1975B48",
   "pitch": -4.58,
   "yaw": -17.38,
   "hfov": 7.98,
   "distance": 100
  }
 ],
 "id": "overlay_0AC2D5DF_059D_C858_418B_728C0C88D33E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -128.79,
   "hfov": 9.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9C80B017_8C7A_E8E1_4193_9F564057216C, this.camera_522E70A5_4633_C992_41A9_A88D1F2CA6D2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_128EDCAE_05B5_C0F2_4196_6D9B72B6B89A",
   "pitch": -2.77,
   "yaw": -128.79,
   "hfov": 9.2,
   "distance": 100
  }
 ],
 "id": "overlay_0AC2C5DF_059D_C858_4184_8C0433B57527",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_0AC535DF_059D_C858_4194_E9D604A583A0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -172.06,
   "hfov": 4.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.33
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_04A52C53_0B09_0667_4185_65D04B0D5DEC, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_1FDA62F3_0B19_0226_4198_E9ACDBBAF2DB",
   "pitch": 0.33,
   "yaw": -172.06,
   "hfov": 4.59,
   "distance": 100
  }
 ],
 "id": "overlay_05B55875_0B09_0E22_41A2_114A447FAF8D",
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 178.13,
   "hfov": 11.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862, this.camera_529D81DA_4633_CBB7_41BF_68423AC15C4F); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5ECB82_8C2B_FFE3_41D9_2438E79D6085",
   "pitch": -25.78,
   "yaw": 178.13,
   "hfov": 11.31,
   "distance": 100
  }
 ],
 "id": "overlay_9162069B_8C2E_E9E1_41A7_1DB603643316",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -26.56,
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.24
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5E4B83_8C2B_FFE1_41E0_02D9ACB1DC08",
   "pitch": -4.24,
   "yaw": -26.56,
   "hfov": 9.23,
   "distance": 100
  }
 ],
 "id": "overlay_969E0F0A_8C36_B8E2_41D4_1CAF4180C0B9",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 118.45,
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8309F509_8C7F_A8E1_41C8_D73396813862, this.camera_54E20AF7_4633_D97D_41B9_1DEB4ABDCA00); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC5F3B84_8C2B_FFE7_41D9_4A1EA9D66179",
   "pitch": -8.71,
   "yaw": 118.45,
   "hfov": 13.46,
   "distance": 100
  }
 ],
 "id": "overlay_90F582ED_8C3A_6921_41D5_8BAB85E96FAF",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.59,
   "hfov": 9.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.4
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_AC40AB84_8C2B_FFE7_41C2_B182190BDBE6",
   "pitch": -5.4,
   "yaw": 30.59,
   "hfov": 9.22,
   "distance": 100
  }
 ],
 "id": "overlay_90B729F3_8C3A_7B21_41CA_360169C1EFB2",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.63,
   "hfov": 13.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680, this.camera_54D6AB1B_4633_D8B6_41AF_D4CEE7EB38C9); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C12096_44B6_763C_41BF_3B905524A967",
   "pitch": -5.59,
   "yaw": 136.63,
   "hfov": 13.55,
   "distance": 100
  }
 ],
 "id": "overlay_5FC022D3_4493_BA34_41CE_ED390C184720",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.64,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.92
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6, this.camera_54D92B3A_4633_D8F6_41CE_42C5A94B1FA8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C14096_44B6_763C_41BE_02069E7062EF",
   "pitch": -2.92,
   "yaw": -52.64,
   "hfov": 9.25,
   "distance": 100
  }
 ],
 "id": "overlay_5FF3CBC3_4491_AA14_4175_BD0E531837B9",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5D3FE608_449F_BA14_41CB_33186F684026_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid55F32882_4633_D997_41B8_FD7A6EDF75CC_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1196F4F7_0595_C053_4191_ECCAF1667D0C.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3979"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_11FAE698_0594_40DD_4195_941BBD703DDA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Brahma</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Brahma merupakan salah satu dewa penting dalam agama</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Hindu karena dianggap sebagai dewa pencipta. Arca Brahma</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ini digambarkan dalam posisi berdiri di atas kendaraan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">seekor Angsa dan juga digambarkan bermuka empat sebagai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">simbol keempat Weda. Muka yang menghadap timur Reg</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Weda bertangan empat yang melukiskan keempat arah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mata angin. Tangan kiri belakang membawa kendi dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan kanan belakang membawa tombak sakti. Meng-</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">gunakan pakaian kebesaran dengan perhiasan lengkap.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Memakai mahkota berbentuk jamakuta dan memakai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">prabha atau sandaran.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Wisnu</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Wisnu merupakan salah satu dewa penting dalam agama</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Hindu karena dianggap sebagai dewa pemelihara. Dalam</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">usahanya untuk menolong manusia dalam kesulitan, Wisnu</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sering menjelma turun ke dunia manusia, antara lain sebagai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Kresna dan Rama. Wisnu berkendaraan Burung Garuda.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Penganut agama Hindu yang memuja Wisnu disebut aliran</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Waishawa. Wisnu digambarkan berdiri di atas pundak</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Garuda, bertangan empat; tangan kiri depan memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sesuatu yang tidak jelas, tangan kanan depan memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">wajra, tangan kiri belakang memegang sangkha bersayap,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan kanan belakang memegang cakra.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Siwa</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Siwa adalah salah satu dari tiga dewa utama (Trimurti) dalam</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">agama Hindu yang paling tinggi kedudukannya. Siwa</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berperan sebagai dewa perusak. Aliran yang secara khusus</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">memuja Siwa disebut Saiwa. Arca Siwa ini berdiri di atas</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kendaraan berupa Nandi. Wajah Nandi sangat menye-</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ramkan, bertaring, melotot dengan lidah menjulur keluar.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Siwa memiliki empat tangan, kedua tangan depan diletakkan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">di depan dada. Tangan kiri belakang memegang busur yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">telah patah, tangan kanan belakang memegang anak panah.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Mengenakan jawatakuta (hiasan rambut), kalung, gelang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan, gelang kaki dan selendang yang diselempangkan di</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bahu kiri.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText17826"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.57,
   "hfov": 12.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797, this.camera_54589A3B_4633_D8F6_41C4_3032F3659B0C); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5DAD33F4_4491_B9FC_41C1_E1BCB0779E52",
   "pitch": -6.16,
   "yaw": 2.57,
   "hfov": 12.57,
   "distance": 100
  }
 ],
 "id": "overlay_5EC673BC_448E_5A6C_41CC_A049451E2816",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.21,
   "hfov": 8.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.05
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3, this.camera_544EFA52_4633_D8B6_41D0_F0F67E7BD82C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B323892_6378_979C_41C9_50F3E15955F9",
   "pitch": -11.05,
   "yaw": -86.21,
   "hfov": 8.46,
   "distance": 100
  }
 ],
 "id": "overlay_77E2471A_6359_BA8D_419D_A8C33464B46C",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.4,
   "hfov": 9.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A, this.camera_54B2EA66_4633_D89E_41CC_5CA3C90281EF); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B33E892_6378_979C_41D6_95A535B4E372",
   "pitch": -9.58,
   "yaw": 1.4,
   "hfov": 9.38,
   "distance": 100
  }
 ],
 "id": "overlay_71B2C79C_6358_B984_41B9_336E3B6563AE",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.35,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6, this.camera_5274510B_4633_C896_418F_69A38FCED14B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D846B3E7_CA3E_1E58_41E4_8C165BB658DB",
   "pitch": -2.71,
   "yaw": 0.35,
   "hfov": 9.25,
   "distance": 100
  }
 ],
 "id": "overlay_4AA7B52F_4477_DE6C_419D_AE8688C4E75E",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 78.93,
   "hfov": 13.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_71735390_6358_F99D_41B0_147C94D41C96, this.camera_554ECFD4_4633_D7B3_41A9_0E21EFB1367E); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61681398_7E7B_DB59_41B9_481E0D05D474",
   "pitch": -4.37,
   "yaw": 78.93,
   "hfov": 13.58,
   "distance": 100
  }
 ],
 "id": "overlay_6C137490_7E39_3D28_41D4_47B1619161CC",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -118.86,
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5, this.camera_556A0FAD_4633_D792_41B2_6D97E712AD76); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6168E399_7E7B_DB5B_41C7_292E19FD0B05",
   "pitch": -19.86,
   "yaw": -118.86,
   "hfov": 11.76,
   "distance": 100
  }
 ],
 "id": "overlay_6D066B5F_7E49_4BD7_41C8_978E06C0566D",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -34.6,
   "hfov": 9.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12, this.camera_555D1FC2_4633_D796_41AB_30BF99B56058); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616B439A_7E7B_DB59_41D3_EC7834B4DAB4",
   "pitch": -2.35,
   "yaw": -34.6,
   "hfov": 9.25,
   "distance": 100
  }
 ],
 "id": "overlay_6DF24161_7E49_37EB_41CB_35FA0141C34E",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -111.22,
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.8
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A, this.camera_5438B964_4633_D893_41C1_4A686D07BB77); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59FF4D04_44F6_EE1C_41C2_E7224CF2A43E",
   "pitch": 0.8,
   "yaw": -111.22,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "id": "overlay_5D9494F6_44F6_5FFD_41CB_A649C82644BD",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.03,
   "hfov": 11.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE, this.camera_55CDB084_4633_C993_4195_DA86013D1D7B); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12907CC4_05B5_C0B6_4191_90C453575C8B",
   "pitch": -1.22,
   "yaw": 33.03,
   "hfov": 11.25,
   "distance": 100
  }
 ],
 "id": "overlay_141DBD9A_05B4_40DD_417E_9487C1A78F83",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -24.57,
   "hfov": 9.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7, this.camera_5439BD1C_4633_D8B3_41BD_73CA1408AFF4); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94C40CED_878B_2B99_41D1_605D1534474D",
   "pitch": 2.58,
   "yaw": -24.57,
   "hfov": 9.35,
   "distance": 100
  }
 ],
 "id": "overlay_88CC4964_877D_6A8F_4198_96ACB261F965",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 178.42,
   "hfov": 11.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.27
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_97315C4A_877E_EA9B_41D5_124B832B2456, this.camera_54230D2F_4633_D8EE_41C9_A2489A14D0F1); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_94C49CED_878B_2B99_41C3_35D1D7A18054",
   "pitch": -20.27,
   "yaw": 178.42,
   "hfov": 11.54,
   "distance": 100
  }
 ],
 "id": "overlay_97D5549B_877F_3BB9_41C3_C805BBA9EC31",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.63,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1, this.camera_55117F60_4633_D892_41CB_F1F69FC72216); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_50DD3AE5_4492_AA1F_41CF_1BFE10DCF008",
   "pitch": -3.88,
   "yaw": 179.63,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_56C8EF3F_4476_AA6B_41B7_21C18D9FF101",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.58,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50415365_4497_DA1F_41C0_0A50A2EE3676, this.camera_55383F3A_4633_D8F6_41B2_3B54C51583E5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_50DD6AE5_4492_AA1F_41C7_457E764557DA",
   "pitch": -3.62,
   "yaw": 40.58,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_501764F9_4492_5FF7_41B2_B4A18F110E25",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.9,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.48
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D, this.camera_552F8F4B_4633_D895_41B2_7C2D8CF00CDB); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D631418_44B2_5E34_41AA_E8C388570E78",
   "pitch": -3.48,
   "yaw": -43.9,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_5048F90E_4493_B62C_41CC_FA0C49F9772F",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.25,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE, this.camera_55344F28_4633_D893_414E_2B4008D67950); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_12B73C81_05B5_C0AF_4193_7FD9CBED480E",
   "pitch": -3.09,
   "yaw": -104.25,
   "hfov": 7.56,
   "distance": 100
  }
 ],
 "id": "overlay_15F7AB70_05AC_406E_418D_338C08DB8F67",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -169.07,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.55
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6, this.camera_520330EC_4633_C993_41D0_7A82948085C5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5D637418_44B2_5E34_416F_971C1A5ED776",
   "pitch": -3.55,
   "yaw": -169.07,
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_5059EC4F_4492_6E2B_4115_D06934A86C10",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.48,
   "hfov": 9.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3, this.camera_5213C0CD_4633_C9AD_41CE_E1C502C019EA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B3D488B_6378_9783_41D7_DF7159BF5520",
   "pitch": -13.07,
   "yaw": -0.48,
   "hfov": 9.02,
   "distance": 100
  }
 ],
 "id": "overlay_71E9D004_6358_7685_41CB_9CD310029871",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -42.57,
   "hfov": 13.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF40890_7E3A_D529_41D3_0551E674D739, this.camera_55793F98_4633_D7B3_41CD_FED8BF70A0C8); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616783A1_7E7B_DB6B_41DC_F77C07660800",
   "pitch": -5.45,
   "yaw": -42.57,
   "hfov": 13.56,
   "distance": 100
  }
 ],
 "id": "overlay_69CBB556_7E49_DF28_41D1_D1797E60B9AD",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 95.8,
   "hfov": 11.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.77
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A, this.camera_55775F84_4633_D793_41C9_3EB636E4803B); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_616663A2_7E7B_DB69_41D0_3C7B1BD95072",
   "pitch": -25.77,
   "yaw": 95.8,
   "hfov": 11.26,
   "distance": 100
  }
 ],
 "id": "overlay_667DE309_7E77_FB38_41DB_A5245FAAFFD1",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.85,
   "hfov": 7.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.04
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7, this.camera_55031F73_4633_D775_41C2_17EB83D97AEF); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6006768B_7E4B_DD3F_41D6_1CC42265E58A",
   "pitch": -6.04,
   "yaw": -177.85,
   "hfov": 7.15,
   "distance": 100
  }
 ],
 "id": "overlay_660B2E7F_7E79_CDD8_41B8_E33153780DC0",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 5.05,
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.79
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_10A22332_05EC_41D2_4180_8472176D5799, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AEC05A_40CC_AF5B_41CB_A6D76706A80B",
   "pitch": -1.79,
   "yaw": 5.05,
   "hfov": 5.32,
   "distance": 100
  }
 ],
 "id": "overlay_5133D2F7_40CC_5369_41C6_0510FCFD92C1",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 70.79,
   "hfov": 9.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.36
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_50A18DDA_40DC_B15B_41BE_AF7B365CD573, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AE505B_40CC_AF59_41C6_752A96718367",
   "pitch": -22.36,
   "yaw": 70.79,
   "hfov": 9.3,
   "distance": 100
  }
 ],
 "id": "overlay_53BF6D04_40CC_B6AE_41C0_94000A4039C5",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 124.11,
   "hfov": 9.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.36
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_5033B278_40D4_5366_41B8_63BADAEC29F4, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51AE305B_40CC_AF59_41AC_B75EC16792BE",
   "pitch": -22.36,
   "yaw": 124.11,
   "hfov": 9.3,
   "distance": 100
  }
 ],
 "id": "overlay_512FCFBA_40CC_D1DB_41C2_6059C9F4406F",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "image_uid55FE7885_4633_D99D_41CC_22A8A4272EF3_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1178DCF3_05EC_4052_4173_DA2CF11F4832.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3980"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_10A46332_05EC_41D2_4192_8685EC40DA52",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Perlengkapan Pakaian Pejabat Kolonial Belanda</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Berikut ini merupakan perlengkapan pakaian pejabat</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pemerintah kolonial Belanda di wilayah Sumatera</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Selatan, seperti Kopiah Kerio, Kopiah Pembarap,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tongkat dan terompah serta topi pejabat Belanda.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Pada saat kolonialisme Belanda, orang-orang pribumi</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">diberi kesempatan untuk menduduki jabatan-jabatan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tingkat rendah, seperti wedana dan demang. Para</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pejabat pribumi ini tidak mau menggunakan pakaian</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">pejabat Belanda, tetapi masih menggunakan pakaian</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">khas Sumatera Selatan.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText21336"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "image_uid55F51880_4633_D993_41C3_E65AC24BB36A_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "media/photo_1196F4F7_0595_C053_4191_ECCAF1667D0C.JPG",
 "minHeight": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "paddingRight": 0,
 "height": "50%",
 "minWidth": 0,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image3977"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_4871AD13_4630_D8B6_418D_72C1CF509DAD",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "50%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Brahma</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Brahma merupakan salah satu dewa penting dalam agama</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Hindu karena dianggap sebagai dewa pencipta. Arca Brahma</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ini digambarkan dalam posisi berdiri di atas kendaraan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">seekor Angsa dan juga digambarkan bermuka empat sebagai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">simbol keempat Weda. Muka yang menghadap timur Reg</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Weda bertangan empat yang melukiskan keempat arah</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">mata angin. Tangan kiri belakang membawa kendi dan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan kanan belakang membawa tombak sakti. Meng-</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">gunakan pakaian kebesaran dengan perhiasan lengkap.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Memakai mahkota berbentuk jamakuta dan memakai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">prabha atau sandaran.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Wisnu</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Wisnu merupakan salah satu dewa penting dalam agama</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Hindu karena dianggap sebagai dewa pemelihara. Dalam</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">usahanya untuk menolong manusia dalam kesulitan, Wisnu</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sering menjelma turun ke dunia manusia, antara lain sebagai</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Kresna dan Rama. Wisnu berkendaraan Burung Garuda.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Penganut agama Hindu yang memuja Wisnu disebut aliran</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Waishawa. Wisnu digambarkan berdiri di atas pundak</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Garuda, bertangan empat; tangan kiri depan memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">sesuatu yang tidak jelas, tangan kanan depan memegang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">wajra, tangan kiri belakang memegang sangkha bersayap,</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan kanan belakang memegang cakra.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Arca Siwa</B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Siwa adalah salah satu dari tiga dewa utama (Trimurti) dalam</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">agama Hindu yang paling tinggi kedudukannya. Siwa</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">berperan sebagai dewa perusak. Aliran yang secara khusus</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">memuja Siwa disebut Saiwa. Arca Siwa ini berdiri di atas</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">kendaraan berupa Nandi. Wajah Nandi sangat menye-</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">ramkan, bertaring, melotot dengan lidah menjulur keluar.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Siwa memiliki empat tangan, kedua tangan depan diletakkan</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">di depan dada. Tangan kiri belakang memegang busur yang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">telah patah, tangan kanan belakang memegang anak panah.</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Mengenakan jawatakuta (hiasan rambut), kalung, gelang</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">tangan, gelang kaki dan selendang yang diselempangkan di</SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">bahu kiri.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText17826"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.84,
   "hfov": 19.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680, this.camera_5486BAB2_4633_D9F7_41CB_1266CE7155A5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5EAE4B3D_4496_EA6C_4189_781615FF8EC0",
   "pitch": -10.7,
   "yaw": -89.84,
   "hfov": 19.29,
   "distance": 100
  }
 ],
 "id": "overlay_5CE8C38F_4492_DA2B_41B3_3C3A919F8240",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 33.79,
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4, this.camera_548AAAC4_4633_D993_41AC_A482BCC2BFBB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_59C6A093_44B6_7634_41C7_214F7CD40D5C",
   "pitch": -8.9,
   "yaw": 33.79,
   "hfov": 9.15,
   "distance": 100
  }
 ],
 "id": "overlay_5829EE48_44B2_6A15_41CB_C41722DF51F7",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 2.52,
   "hfov": 6.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4, this.camera_54F09AD7_4633_D9BD_41BA_BA9B60009AFB); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72C68BA1_6349_E9BC_41B8_B68C4A1AAFCB",
   "pitch": -0.2,
   "yaw": 2.52,
   "hfov": 6.49,
   "distance": 100
  }
 ],
 "id": "overlay_6C3214F9_6338_9F8C_41D6_B1837C59636A",
 "data": {
  "label": "Circle Arrow 07"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.63,
   "hfov": 8.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797, this.camera_5490AAA0_4633_D992_41B8_3AF3E903E9F9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_7B34A896_6378_9784_41CA_DE94E77926F8",
   "pitch": -12.7,
   "yaw": -176.63,
   "hfov": 8.21,
   "distance": 100
  }
 ],
 "id": "overlay_70D1FAB7_6347_AB84_41D5_A973D0907EFA",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 31.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_DA1DF091_CABB_BCC1_41E2_FC2B3DD6C9DF",
  "this.Button_DA05B2F0_CABB_BC40_41E9_4059320211BB",
  "this.Button_C566F56E_CAB4_4440_41DE_C09C7A8FB7B2",
  "this.Button_DADD0816_CAB4_4BC3_41A4_8F64BEA81C0B"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "0%",
 "scrollBarWidth": 10,
 "height": 51,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingLeft": 30,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "height": 110,
 "minWidth": 1,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "paddingRight": 0,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "class": "Container",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "gap": 3,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C19097_44B6_763C_4195_9A843B78DB23",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3FD03B_449E_5674_41C5_E81A1E226AA6_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C1B097_44B6_763C_41C0_E67F251AFD44",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6164B3A0_7E7B_DB69_41D9_3F2D39863BF1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF40890_7E3A_D529_41D3_0551E674D739_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_616723A0_7E7B_DB69_41A6_259D0D7AF276",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C6E096_44B6_763C_41D0_C3587F1B99A1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5EE8FC14_449F_AE3C_41A9_1CE51B85D680_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C10096_44B6_763C_41D0_63BFC04654B0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC585B7B_8C2B_FF21_41B3_5480A6EEC13A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC59CB7B_8C2B_FF21_41E0_593F49E910FF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C7A20E6_8C7D_A923_41BC_6841D69A919F_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC594B7C_8C2B_FF27_41D0_5409B8E1FD87",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5CAB7F_8C2B_FF21_41D8_777DDDEA56DC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8302D5EE_8C7F_AB23_4191_C8D988A09DFC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5C2B7F_8C2B_FF21_41D3_D4A83BA3ECCD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_72C3CBA7_6349_E984_41CE_435B994BBC2F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6DC0AC0F_6338_EE84_41C0_C9BD9396CEF4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_72C2BBA8_6349_E98C_41BE_30D6058A9986",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7328B8FF_6348_7783_41D6_6A19F9346647_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_72C2DBA9_6349_E98C_41C1_78CDAB801658",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5DBB80_8C2B_FFDF_41DB_292396AD8AF0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5D2B80_8C2B_FFDF_41D7_52A49EC51213",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5EAB81_8C2B_FFE1_41C3_BDEE5F07B14A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8309F509_8C7F_A8E1_41C8_D73396813862_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5DBB82_8C2B_FFE3_41D7_188CC94568D7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12916CC3_05B5_C0B2_4185_B672D10F9057",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_14CA46BA_05AC_40DD_418A_8D0466EF9CDE_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12918CC3_05B5_C0B2_4193_15DCFBEA32EB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6165639D_7E7B_DB5B_41CA_0E6BA38D42D1",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6165C39D_7E7B_DB5B_41D2_71D9B49B9649",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1165D63C_05EC_C3D6_415E_36F1A5D67748",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7250D_7E3A_FF3B_41D0_3A6CD4B0DC6C_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1165E63C_05EC_C3D6_418A_9D5A0B299E0A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_616BD39A_7E7B_DB59_41D9_6BF11B36E1E2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6F9B0068_7E3A_D5F9_41D0_8E5F56C892E5_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_616B839B_7E7B_DB5F_41CA_E4EAA27E9262",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C1D097_44B6_763C_41C8_6C895DF77F64",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3CE9ED_449E_69EC_41A2_D7746E342970_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C1E097_44B6_763C_41CE_E897F0DA7B46",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51C017EB_4496_D9EB_41B3_F21F14AF7C73_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_5D614419_44B2_5E34_4181_E0E79E57E51C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5EAF6B3C_4496_EA6C_41C3_07AC601A8DDD",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B364895_6378_9784_41C0_DF22CD795329",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5CB662E7_44B6_5A1B_41CF_DE8D925EE797_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B37F895_6378_9784_41CB_5C02BF81E3B7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6DF7D797_6364_333B_41C1_CF8C8B725256",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51F2C8BC_44B3_B66C_41B9_4D61627B13D2_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B307893_6378_979C_4198_ECA58F859B13",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC567B79_8C2B_FF21_41D8_AD17F672E4CC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC57EB7A_8C2B_FF23_41D2_C154FDDF932D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC576B7A_8C2B_FF23_41B0_BBDC750AA957",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9C80B017_8C7A_E8E1_4193_9F564057216C_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC58DB7A_8C2B_FF23_417A_93C75A6F9C95",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AF8947E1_8C16_7721_41BC_BDD830E6ABBC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9659C0D6_8795_FB8B_41CE_00D4AAD7D2B4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_907FA086_87B5_5B8B_41CF_E487408525BE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6164439E_7E7B_DB59_41D1_3832328E84AB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF69EDF_7E3A_CAD7_41C9_CD43267F7F79_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6164239F_7E7B_DB57_41CE_D0F665496FB0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_616A639B_7E7B_DB5F_41B6_BE0471133BA0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_616AF39C_7E7B_DB59_41CB_C539F0BEDA8C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_5718A2C8_4630_4992_41AD_EFBA4E62AAA4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7EADA_7E3A_CAD8_41D9_E74029440A12_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_571DB2CD_4630_4992_41A0_826C444A2124",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B29789B_6378_978C_41B9_C05440D82B38",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_61698398_7E7B_DB59_41DC_9218C3C90BD0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_94BD9CE5_878B_2B88_4195_DBD302AD7778",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7031A499_6348_7F8C_41D0_2BAFB0B58DB7_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A052DF4A_8CF6_B763_41E0_4D3EC616BAD7",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5ACB7C_8C2B_FF27_41DA_BBA05B1B6B9B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5ABB7D_8C2B_FF21_415E_76FBD909DE3A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC5BCB7D_8C2B_FF21_41CF_F75C63F3F391",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9E836850_8C7E_797F_41D6_ADA6EEE2243B_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FDF32FD_0B19_0222_418F_B2B46E7501CC",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_616143A3_7E7B_DB68_41A3_B077FE5F22A9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF7FC6E_7E3B_4DF9_41C0_AAAF70DC175A_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6161D3A4_7E7B_DB68_41DB_D7D5DA6599C8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_907D0085_87B5_5B89_41B9_04F97394BB89",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_953B026B_8795_DE99_41DD_0303BBBD0188_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_9F088D23_87BB_2A89_41DE_6AF49402D408",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC5BBB7E_8C2B_FF23_41C9_32A982362FCF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5B1B7E_8C2B_FF23_41C5_FF652D591EF4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8302776B_8C7F_9721_41C1_F71A0710F184_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FDDD2FF_0B19_021E_41A3_9532FBD92664",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AF5C11BB_8CEE_AB21_41B0_FD6A3DC967E9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A06D8F7A_8CF6_B722_41D2_B8B219BAD8F6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59FD2D03_44F6_EE14_41BA_B9122DED84CA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B31C894_6378_9784_41C9_18A6821FC333",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B318894_6378_9784_41D7_C0F95C77F43A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_512BF2B0_44B6_DA75_41B7_3075D8490E1A_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7729D227_6768_4760_41BD_CEEFE5345273",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440
  }
 ],
 "id": "AnimatedImageResource_5D61A419_44B2_5E34_41B9_BC08BFAD21A4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B32C88C_6378_9785_41D8_A4285ADF75C4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51A11ED3_449F_AA34_41BA_5B77F05D2BC3_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6BCE017D_6768_45E0_41D3_80C63694DAED",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5E3B83_8C2B_FFE1_41D2_AF806EB2E75C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC5FBB83_8C2B_FFE0_41BC_DBE8EC55B240",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FC6C309_0B19_03E2_419D_069C64226A35",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830D1286_8C7F_E9E2_41DB_63CC11B5116F_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FC63309_0B19_03E2_4176_66886A74E928",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_775250F2_6358_B79D_41BC_7B3140BEDEEE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B28389B_6378_978C_41D0_22CA3633FCD2",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_71735390_6358_F99D_41B0_147C94D41C96_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B29A89B_6378_978C_41AA_D052DD491862",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A06F1F74_8CF6_B727_41DA_34AB3156E27C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8843C78_8CEA_992F_41D5_A2A84543CE88_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A06FEF7A_8CF6_B722_41C0_7F92A06056C6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5D6E941A_44B2_5E34_41CC_A62650EBD39E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51AF8CA8_448F_AE14_41C5_7612DED0C43D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6DF7B796_6364_333D_417F_B355C3F33988",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C00098_44B6_7634_41C8_27D80270AD54",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58D755BF_448E_5E6C_41B2_EA0CA294B6A4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B2B8899_6378_978C_41D5_C91A587718ED",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_94C52CEE_878B_2B9B_41DE_153F2BC501B3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_94C59CEE_878B_2B9B_41C4_ABE26D4DE22F",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_97315C4A_877E_EA9B_41D5_124B832B2456_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_907D9085_87B5_5B89_41D0_40685D4622E3",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_128E4CAC_05B5_C0F6_418E_8B98B1975B48",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_128EDCAE_05B5_C0F2_4196_6D9B72B6B89A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0AC2F5DE_059D_C858_4190_FBDD87CB702E_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_1FDA62F3_0B19_0226_4198_E9ACDBBAF2DB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_AC5ECB82_8C2B_FFE3_41D9_2438E79D6085",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830F436D_8C7F_EF21_41D9_49EED74C11F2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC5E4B83_8C2B_FFE1_41E0_02D9ACB1DC08",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC5F3B84_8C2B_FFE7_41D9_4A1EA9D66179",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_830DE158_8C7F_AB6F_41E1_47469A7FF454_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_AC40AB84_8C2B_FFE7_41C2_B182190BDBE6",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C12096_44B6_763C_41BF_3B905524A967",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D3FE608_449F_BA14_41CB_33186F684026_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C14096_44B6_763C_41BE_02069E7062EF",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5EF32D9D_448F_AE2C_41B3_98213A01F59B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5DAD33F4_4491_B9FC_41C1_E1BCB0779E52",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B323892_6378_979C_41C9_50F3E15955F9",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_513F485D_4492_D62C_41C0_7336F9BFE11F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B33E892_6378_979C_41D6_95A535B4E372",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4F95B2C8_4472_5A14_41CB_33B04A4EC2E1_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_D846B3E7_CA3E_1E58_41E4_8C165BB658DB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_61681398_7E7B_DB59_41B9_481E0D05D474",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_6168E399_7E7B_DB5B_41C7_292E19FD0B05",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EE6D080_7E39_3529_41C4_6896560F5C62_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_616B439A_7E7B_DB59_41D3_EC7834B4DAB4",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C328328_44FE_7A14_41C0_CAF9B3F0D142_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59FF4D04_44F6_EE1C_41C2_E7224CF2A43E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_144F3E72_05B4_4052_4176_B1D7FAC5A5E6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12907CC4_05B5_C0B6_4191_90C453575C8B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_94C40CED_878B_2B99_41D1_605D1534474D",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_88CE7853_877B_2A89_41D4_02B7A22348B7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_94C49CED_878B_2B99_41C3_35D1D7A18054",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50DD3AE5_4492_AA1F_41CF_1BFE10DCF008",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_50DD6AE5_4492_AA1F_41C7_457E764557DA",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5D631418_44B2_5E34_41AA_E8C388570E78",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4BDA5EE1_4476_AA14_41BC_AB2F115A3EF6_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_12B73C81_05B5_C0AF_4193_7FD9CBED480E",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5D637418_44B2_5E34_416F_971C1A5ED776",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50415365_4497_DA1F_41C0_0A50A2EE3676_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B3D488B_6378_9783_41D7_DF7159BF5520",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_616783A1_7E7B_DB6B_41DC_F77C07660800",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_616663A2_7E7B_DB69_41D0_3C7B1BD95072",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6006768B_7E4B_DD3F_41D6_1CC42265E58A",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51AEC05A_40CC_AF5B_41CB_A6D76706A80B",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51AE505B_40CC_AF59_41C6_752A96718367",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6EF6625A_7E3B_35D8_41D6_8B60894F46A8_0_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_51AE305B_40CC_AF59_41AC_B75EC16792BE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5EAE4B3D_4496_EA6C_4189_781615FF8EC0",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59C6A093_44B6_7634_41C7_214F7CD40D5C",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_72C68BA1_6349_E9BC_41B8_B68C4A1AAFCB",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C0233B6_4492_5A7C_41C9_ACD98A6D929E_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_7B34A896_6378_9784_41CA_DE94E77926F8",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "backgroundOpacity": 0,
 "width": 89.35,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.openLink('https://vtmuseumsumsel.site/', '_top')",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Beranda",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Beranda"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_DA1DF091_CABB_BCC1_41E2_FC2B3DD6C9DF",
 "backgroundOpacity": 0,
 "width": 123.35,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Gedung utama",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Gedung Utama"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_DA05B2F0_CABB_BC40_41E9_4059320211BB",
 "backgroundOpacity": 0,
 "width": 89.35,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Pameran I",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Pameran I"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_C566F56E_CAB4_4440_41DE_C09C7A8FB7B2",
 "backgroundOpacity": 0,
 "width": 89.35,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 22)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Pameran II",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Pameran II"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Cinzel Bold",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_DADD0816_CAB4_4BC3_41A4_8F64BEA81C0B",
 "backgroundOpacity": 0,
 "width": 89.35,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "gap": 5,
 "iconHeight": 0,
 "borderRadius": 0,
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 34)",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 40,
 "rollOverFontColor": "#DB9B4D",
 "borderColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 14,
 "class": "Button",
 "pressedBackgroundOpacity": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "pameran III",
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0,
 "data": {
  "name": "Pameran III"
 },
 "shadow": false,
 "iconWidth": 0,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "pressedFontColor": "#000000",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "bold"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
