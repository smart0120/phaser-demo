
        import _Score from './images/Score.png'
let paths = [
        ['PianoPlay_Score', _Score, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Score_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Score"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1107;
export const Y = 699;
export const Height = 153;
export const Interactive= true
export const Width = 410;
export const Alpha = 1;
export let Scale = 1;

 
