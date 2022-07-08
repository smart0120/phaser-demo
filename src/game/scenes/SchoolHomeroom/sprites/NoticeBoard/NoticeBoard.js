
        import _NoticeBoard from './images/NoticeBoard.png'
let paths = [
        ['SchoolHomeroom_NoticeBoard', _NoticeBoard, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NoticeBoard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NoticeBoard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1206;
export const Y = 451;
export const Height = 158;
export const Interactive= true
export const Width = 148;
export const Alpha = 1;
export let Scale = 1;

 
