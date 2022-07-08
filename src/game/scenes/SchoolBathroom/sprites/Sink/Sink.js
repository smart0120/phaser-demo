
        import _Sink from './images/Sink.png'
let paths = [
        ['SchoolBathroom_Sink', _Sink, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sink_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sink"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1638;
export const Y = 640;
export const Height = 275;
export const Interactive= true
export const Width = 282;
export const Alpha = 1;
export let Scale = 1;

 
