import request from '../utils/request';

export function showInTable(){
     const data=request(`http://localhost:8823/api/photos`);
     console.log(data);
     
     return data;
}