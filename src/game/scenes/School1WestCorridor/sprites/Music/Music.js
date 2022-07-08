
        import _Music from './images/Music.png'
let paths = [
        ['School1WestCorridor_Music', _Music, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Music_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Music"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 646;
export const Y = 306;
export const Height = 276;
export const Interactive= true
export const Width = 39;
export const Alpha = 1;
export let Scale = 1;

 
