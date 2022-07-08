
        import _PianoScore from './images/PianoScore.png'
let paths = [
        ['School1WestCorridor_PianoScore', _PianoScore, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PianoScore_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PianoScore"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1793;
export const Y = 507;
export const Height = 131;
export const Interactive= true
export const Width = 127;
export const Alpha = 1;
export let Scale = 1;

 
