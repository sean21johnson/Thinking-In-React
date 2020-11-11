/*
This file is used to store the FEATURES object
    -The FEATURES object contains all of the possible choices for a user to customize a laptop
        -Processor which is an array with two objects
        -Operating System which is an array with two objects
        -Video Card which is an array with two objects
        -Display which is an array with two objects
    -This object will need to be imported to the "CustomizeFeatures" component
*/

const FEATURES = {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      {
        name: 'Bodhi Linux',
        cost: 300
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      {
        name: 'Mind mild breeze 2000',
        cost: 1345
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      },
      {
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: 1400
      },
    ]
  };

  export default FEATURES;