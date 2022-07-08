
        import _Sink from './images/Sink.png'
let paths = [
        ['HomeBathroom_Sink', _Sink, 12],
      
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
export const X = 1351;
export const Y = 464;
export const Height = 478;
export const Interactive= true
export const Width = 563;
export const Alpha = 1;
export let Scale = 1;

 
