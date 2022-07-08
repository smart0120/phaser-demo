
        import _Gramophone from './images/Gramophone.png'
let paths = [
        ['SchoolMusicClass_Gramophone', _Gramophone, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Gramophone_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Gramophone"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1316;
export const Y = 467;
export const Height = 170;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
